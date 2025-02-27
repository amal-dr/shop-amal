export const saveProduct = (product) => {
  return {
    type: 'SAVE_PRODUCT',
    payload: product,
  };
};
export const removeProduct = (product) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: product,
  };
};
