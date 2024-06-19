export const formatNumber = (digit: number) => {
    const formatter = new Intl.NumberFormat('it-IT', {
      style: 'decimal', // Use 'decimal' for standard number formatting
    });
    return formatter.format(digit);
  };
  