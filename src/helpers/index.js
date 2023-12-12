export const formatearDinero = (monto) => {
  return monto.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
