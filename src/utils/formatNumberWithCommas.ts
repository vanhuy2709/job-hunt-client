export const formatNumberWithCommas = (x: number | undefined) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}