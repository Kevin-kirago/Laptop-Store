import React from "react";
import "./product-view.component.scss";

const ProductView = ({ ...props }) => {
	return (
		<div className="product">
			<div className="product__features">
				<h1 className="product__heading--primary">Features</h1>
				<div className="product__content">
					<h2 className="product__heading--secondary">Display</h2>
					<p className="product__paragraph">
						13.9 inch 10-point Touch Screen with 3000 x 2000 Resolution - Natural finger-touch screen with the 3000 x 2000 resolution
						boasts impressive color and clarity and IPS technology provides wide viewing angles.
					</p>
				</div>
				<div className="product__content">
					<h2 className="product__heading--secondary">Processor</h2>
					<p className="product__paragraph">
						Intel Core i5-8250U Quad Core 1.6GHz, up to 3.4GHz - Ultra-low-voltage platform and quad-core processing provide maximum
						high-efficiency power.
					</p>
					<p className="product__paragraph">
						NVIDIA Geforce MX150 DDR5 2GB Dedicated Graphics - On-processor graphics with shared video memory provide high image quality
						for Internet use, basic photo editing and casual gaming.
					</p>
				</div>
				<div className="product__content">
					<h2 className="product__heading--secondary">Storage</h2>
					<p className="product__paragraph">256GB SSD Storage Capacity - Provides room to store pictures, videos, music and more</p>
					<p className="product__paragraph">
						8GB LPDDR3 2133MHz RAM for Advanced Multitasking - Substantial high-bandwidth RAM to smoothly run your games, photos and
						video-editing applications.
					</p>
				</div>
				<div className="product__content">
					<h2 className="product__heading--secondary">Devices</h2>
					<p className="product__paragraph">
						Front Camera for Photos and Face-to-face Chat - 1.0MP front camera allows you to capture memorable moments or chat with
						friends.
					</p>
					<p className="product__paragraph">
						Bluetooth 4.1 Interface Syncs with Compatible Devices - Wirelessly transfer photos, music and other media between the computer
						and your Bluetooth-enabled cell phone or MP3 player, or connect Bluetooth wireless accessories.
					</p>
				</div>
			</div>
			<div className="product__story">
				<h1 className="product__heading--primary-red">Huawei MateBook X Pro</h1>
				<p className="product__paragraph">
					HUAWEI MateBook X Pro is a cost-effective laptop which supports fingerprint recognition. Equipped with a 13.9 inch LTPS display,
					brings your photos and videos to life. The powerful Windows 10 operating system makes it easy to check E-mail and manage digital
					files. Powered by Intel Core i5-8250U processor, ensures high performance. NVIDIA GeForce MX150 dedicated graphics, all of these
					give users a full suite for using dominance and offer users a truly seamless gaming experience.
				</p>
				<button className="btn">Add To Cart</button>
			</div>
			<div className="product__thumbnail">
				<div className="product__thumbnail--img">
					<img src="https://geardiary.com/wp-content/uploads/2018/03/DSCF3044-750x507.jpg" alt="caption-1" />
				</div>
				<div className="product__thumbnail--img">
					<img src="https://i.pinimg.com/originals/a1/31/41/a13141fbe7ce3273a4464d1daf005eb8.jpg" alt="caption-2" />
				</div>
				<div className="product__thumbnail--img">
					<img src="https://i.pinimg.com/564x/87/cd/9f/87cd9ffbdd989ac2e97500b0d61cffca.jpg" alt="caption-3" />
				</div>
			</div>
		</div>
	);
};

export default ProductView;
