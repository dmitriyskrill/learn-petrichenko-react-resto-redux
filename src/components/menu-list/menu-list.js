import React, { Component } from "react"
import MenuListItem from "../menu-list-item"
import { connect } from "react-redux"
import WithRestoService from "../hoc"
import { menuLoaded, menuRequested, addItemToCart } from "../../actions"
import Spinner from "../spinner"

import "./menu-list.scss"

class MenuList extends Component {
  componentDidMount() {
    this.props.menuRequested()
    const { RestoService } = this.props
    RestoService.getMenuItems().then((res) => this.props.menuLoaded(res))
  }

  render() {
    const { menuItems, loading, addItemToCart } = this.props
    if (loading) {
      return <Spinner />
    }
    return (
      <ul className="menu__list">
        {menuItems.map((menuItem) => {
          return (
            <MenuListItem
              key={menuItem.id}
              menuItem={menuItem}
              onAddToCard={addItemToCart}
            />
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
  }
}

export default WithRestoService()(
  connect(mapStateToProps, { menuLoaded, menuRequested, addItemToCart })(
    MenuList,
  ),
)
