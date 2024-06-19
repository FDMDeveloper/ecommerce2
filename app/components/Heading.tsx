import React from "react";

interface HeadingProps {
  title: string;
  center?: boolean; // Optional property with default value of false
}

const Heading: React.FC<HeadingProps> = ({ title, center = false }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
        <h1 className="font-bold text-2x1">{title}</h1>
    </div>
  );
};

export default Heading;
