
export const formatPrice =
(amount: number) =>{
    return new Intl.NumberFormat
    ('it-IT', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount)
}