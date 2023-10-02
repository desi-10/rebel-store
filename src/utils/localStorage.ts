interface ICartItems {
  id: number;
  productName: string;
  color: string;
  price: number;
  quantity: number;
}

export const saveToLocalStorage = (cartItems: ICartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

export const getFromLocalStorage = (): ICartItems | null => {
  const storage = localStorage.getItem("cart");
  if (storage) {
    return JSON.parse(storage);
  }
  return null;
};
