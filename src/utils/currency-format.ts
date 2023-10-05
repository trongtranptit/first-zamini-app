const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat("en-US").format(currency);
};

export default formatCurrency;
