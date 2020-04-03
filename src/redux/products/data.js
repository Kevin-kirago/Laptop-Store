// backgrounds images
import Product_1 from "../../assets/images/bg-1.jpg";
import Product_2 from "../../assets/images/bg-2.jpg";
import Product_3 from "../../assets/images/bg-3.png";
import Product_4 from "../../assets/images/bg-4.jpg";
import Product_5 from "../../assets/images/bg-5.jpg";

const STORE_DATA = [
	{
		sys: {
			id: 0,
			linkUrl: "store/huawei-matebook-x-pro"
		},
		fields: {
			productName: "Huawei MateBook X Pro",
			price: "1499",
			stars: 4,
			cpu: "Intel Core i7, 8th generation",
			ram: "8GB RAM",
			storage: "512 GB SSD",
			screen: "13.9-inch, 3K (3,000 x 2,080)",
			thumbnail: Product_1,
			description:
				"The Huawei MateBook X Pro is our pick for the best laptop money can buy in 2018. This is a gorgeously-designed laptop with a stunning screen."
		}
	},
	{
		sys: {
			id: 1,
			linkUrl: "store/apple-macbook-pro-2018"
		},
		fields: {
			productName: "Apple Macbook Pro 2018",
			price: "3199",
			stars: 4,
			image: "macbook-pro-15.jpg",
			cpu: "6-core Intel i7, 8th generation",
			ram: "16GB RAM",
			storage: "1TB GB SSD",
			screen: "15-inch Retina display",
			thumbnail: Product_2,
			description:
				"If you're after the latest and greatest laptop from Apple, we suggest you look into the 2018 model of the 15-inch MacBook Pro with Touch Bar."
		}
	},
	{
		sys: {
			id: 2,
			linkUrl: "store/dell-xps-13"
		},
		fields: {
			productName: "Dell XPS 13",
			price: "1199",
			stars: 4,
			cpu: "Intel Core i7, 8th generation",
			ram: "16GB RAM",
			storage: "512 GB SSD",
			screen: "13.3-inch, Full HD",
			thumbnail: Product_3,
			description:
				"The Dell XPS 13 is an absolutely brilliant laptop. The 2018 version rocks an 8th-generation Intel Core i5 or i7 processor and a bezel-less ‘Infinity Edge’ display."
		}
	},
	{
		sys: {
			id: 3,
			linkUrl: "store/asus-zenbook-flip-s"
		},
		fields: {
			productName: "Asus ZenBook Flip S",
			price: "1399",
			stars: 4,
			cpu: "Intel Core i7, 8th generation",
			ram: "16GB, 8GB RAM",
			storage: "512 GB SSD",
			screen: "13.3-inch, Full HD touchscreen",
			thumbnail: Product_4,
			description:
				"Asus has struck gold with its new refresh of its ZenBook Flip S 2-in-1 laptop. With a new Kaby Lake R 8th-generation processor powering the device."
		}
	},
	{
		sys: {
			id: 4,
			linkUrl: "store/samsung-notebook-9"
		},
		fields: {
			productName: "Samsung Notebook 9",
			price: "1499",
			stars: 4,
			cpu: "Intel Core i7, 8th generation",
			ram: "16GB RAM",
			storage: "256 GB SSD",
			screen: "15-inch, Full HD",
			thumbnail: Product_5,
			description:
				"While it may not have the best keyboard in the world, the Samsung Notebook 9 is still one of the best laptops you can buy in 2018."
		}
	}
];

export default STORE_DATA;
