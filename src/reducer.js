import { SAVE_PRODUCT, REMOVE_PRODUCT } from './Action';

// Initial state for cart
const initialState = {
  savedProducts: [],  // Array to store saved products
};

// Reducer to handle saving/removing products from the cart
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_PRODUCT':
      return {
        ...state,
        savedProducts: [...state.savedProducts, action.payload],  // Add the product to savedProducts
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        savedProducts: state.savedProducts.filter(
          (product) => product.id !== action.payload.id  // Remove the product by id
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
