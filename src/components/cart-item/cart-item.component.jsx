import React from "react";
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../redux/cart/cart.actions";

import "./cart-item.component.scss";
import addBtn from "../../assets/bx-plus.svg";
import minBtn from "../../assets/bx-minus.svg";
import trashBtn from "../../assets/bx-trash.svg";

const CartItem = ({ addItem, removeItem, clearItem, item }) => {
	const { thumbnail, productName, quantity, price } = item;
	return (
		<div className="cart__item">
			<div className="cart__item-img">
				<img src={thumbnail} alt="cart-thumbnail" />
			</div>
			<div className="cart__item-details">
				<span className="cart__item-details--title">{productName}</span>
				<span className="cart__item-details--price">${price}</span>
			</div>
			<div className="cart__item-adjuster">
				<div className="cart__item-adjuster--btn" onClick={() => addItem(item)}>
					<img src={addBtn} alt="add-icon" />
				</div>
				<div className="cart__item-adjuster--value">{quantity}</div>
				<div className="cart__item-adjuster--btn" onClick={() => removeItem(item)}>
					<img src={minBtn} alt="minus-icon" />
				</div>
			</div>
			<div className="cart__item-removeBtn" onClick={() => clearItem(item)}>
				<img src={trashBtn} alt="trash-btn" />
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatchEvent) => ({
	addItem: (item) => dispatchEvent(addItemToCart(item)),
	removeItem: (item) => dispatchEvent(removeItemFromCart(item)),
	clearItem: (item) => dispatchEvent(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
