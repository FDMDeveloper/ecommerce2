import { buffer } from "micro";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const buf = await buffer(req);

  // Handle missing signature
  if (!req.headers["stripe-signature"]) {
    res.status(400).send("Missing the stripe signature");
    return;
  }

  const sig = req.headers["stripe-signature"] as string; // Cast to string

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (error) {
    res.status(400).send("Webhook error: " + error);
    return; // Exit the function after sending the error response
  }

  // Now 'event' is guaranteed to be a Stripe.Event object

  switch (event.type) {
    case "charge.succeeded":
      const charge: any = event.data.object as Stripe.Charge;

      if (typeof charge.payment_intent === "string") {
        await prisma?.order.update({
          where: { paymentIntentId: charge.payment_intent },
          data: { status: "complete", address: charge.shipping?.address },
        });
      }
      break;
    default:
      console.log("Unhandled event type:", event.type);
  }

  res.json({ received: true });
}
