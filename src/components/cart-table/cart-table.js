import React from "react"
import "./cart-table.scss"
import { connect } from "react-redux"
import { removeItemFromCart } from "../../actions"

const CartTable = ({ items, removeItemFromCart }) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map((item) => {
          return (
            <CardItem
              key={item.basketId}
              {...item}
              removeItemFromCart={removeItemFromCart}
            />
          )
        })}
      </div>
    </>
  )
}

const CardItem = ({ title, price, url, id, removeItemFromCart, basketId }) => {
  return (
    <div key={id} className="cart__item">
      <img src={url} className="cart__item-img" alt={title}></img>
      <div className="cart__item-title">{title}</div>
      <div className="cart__item-price">{price}$</div>
      <div onClick={() => removeItemFromCart(basketId)} className="cart__close">
        &times;
      </div>
    </div>
  )
}

export default connect(({ items }) => ({ items }), { removeItemFromCart })(
  CartTable,
)
