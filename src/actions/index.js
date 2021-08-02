const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED",
    payload: newMenu,
  }
}
const menuRequested = () => {
  return {
    type: "MENU_REQUESTED",
  }
}
const addItemToCart = (id) => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: id,
  }
}
const removeItemFromCart = (basketId) => ({
  type: "ITEM_REMOVE_FROM_CART",
  payload: basketId,
})

export { menuLoaded, menuRequested, addItemToCart, removeItemFromCart }
