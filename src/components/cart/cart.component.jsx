import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartDrawer, selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCart } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";
import closeIcon from "../../assets/bx-x.svg";
import { CartDrawer } from "./cart.styles";
import "./cart.component.scss";

class Cart extends React.Component {
	render() {
		return (
			<CartDrawer props={this.props}>
				<div className="cart__content">
					<div className="cart__header">
						<span className="cart__header--text">Your cart</span>
						<div
							className="cart__header--closebtn"
							onClick={() => {
								this.props.dispatch(toggleCart());
							}}>
							<img src={closeIcon} alt="close-btn" />
						</div>
					</div>
					<div className="cart__shelf">
						{this.props.items.map((item) => (
							<CartItem key={item.id} item={item} />
						))}
					</div>
					<div className="cart__footer">
						<div className="cart__total">
							<span className="cart__total--text">SUBTOTAL</span>
							<span className="cart__total--value">$180.00</span>
						</div>
						<div className="btn">Checkout</div>
					</div>
				</div>
			</CartDrawer>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	drawerIsOpen: selectCartDrawer,
	items: selectCartItems,
});

export default connect(mapStateToProps)(Cart);
