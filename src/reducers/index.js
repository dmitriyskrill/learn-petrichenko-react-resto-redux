const initialState = {
  menu: [],
  loading: true,
  items: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      }
    case "MENU_REQUESTED":
      return {
        ...state,
        loading: true,
      }
    case "ITEM_ADD_TO_CART":
      const item = state.menu.find((item) => item.id === action.payload)
      const newItem = { ...item, basketId: +new Date() }
      return {
        ...state,
        items: [...state.items, newItem],
      }
    case "ITEM_REMOVE_FROM_CART":
      console.log(action)
      const index = state.items.findIndex(
        (item) => item.basketId === action.payload,
      )
      if (index === -1) {
        return state
      }
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ],
      }
    default:
      return state
  }
}

export default reducer
