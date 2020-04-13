import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartDrawer } from "../../redux/cart/cart.selector";

import { CartDrawer } from "./cart.styles";
import "./cart.component.scss";

class Cart extends React.Component {
	render() {
		return (
			<CartDrawer props={this.props}>
				<div className="cart__header">
					<span className="cart__header--text">Cart</span>
					<div className="cart__header--closebtn">{/* <img src={} alt="close-btn" /> */}</div>
				</div>
			</CartDrawer>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	drawerIsOpen: selectCartDrawer,
});

export default connect(mapStateToProps)(Cart);
