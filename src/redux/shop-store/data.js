// backgrounds images
import Product_1 from "../../assets/images/bg-1.jpg";
import Product_2 from "../../assets/images/bg-2.jpg";
import Product_3 from "../../assets/images/bg-3.jpg";
import Product_4 from "../../assets/images/bg-4.jpg";
import Product_5 from "../../assets/images/bg-5.jpg";

const STORE_DATA = [
	{
		sys: {
			id: 0,
			linkUrl: "store/huawei-matebook-13",
		},
		fields: {
			productName: "Huawei MateBook 13",
			price: "1299",
			stars: 4.5,
			cpu: "8th generation Intel Core i5 – i7 ",
			ram: "8GB RAM",
			storage: "256GB - 512GB SSD",
			screen: "13-inch 1440p (2,160 x 1,440)",
			thumbnail: Product_1,
			description:
				"The Huawei MateBook 13 is our pick for the best laptop money can buy in 2020. This is a gorgeously-designed laptop with a stunning screen.",
		},
	},
	{
		sys: {
			id: 1,
			linkUrl: "store/apple-macbook-pro-2019",
		},
		fields: {
			productName: "MacBook Pro (16-inch, 2019)",
			price: "2399",
			stars: 4,
			image: "macbook-pro-15.jpg",
			cpu: "9th-generation Intel Core i7 – i9",
			ram: "16GB – 64GB RAM",
			storage: "512GB – 8TB SSD",
			screen: "16-inch Retina display with True Tone",
			thumbnail: Product_2,
			description:
				"If you're after the latest and greatest laptop from Apple, we suggest you look into the 2019 model of the 16-inch MacBook Pro with Touch Bar.",
		},
	},
	{
		sys: {
			id: 2,
			linkUrl: "store/dell-xps-13",
		},
		fields: {
			productName: "Dell XPS 13 (2020)",
			price: "1119",
			stars: 4,
			cpu: "10th Generation Intel Core™ i7",
			ram: "16GB LPDDR4x (3,733MHz)",
			storage: "512 GB SSD",
			screen: "13.3-inch FHD (1,920 x 1,080) touch",
			thumbnail: Product_3,
			description:
				"The Dell XPS 13 is an absolutely brilliant laptop. The 2018 version rocks an 8th-generation Intel Core i5 or i7 processor and a bezel-less ‘Infinity Edge’ display.",
		},
	},
	{
		sys: {
			id: 3,
			linkUrl: "store/asus-rog",
		},
		fields: {
			productName: "Asus ROG Zephyrus G14",
			price: "1499",
			stars: 4,
			cpu: "AMD Ryzen 7 4800HS – 9 4900HS",
			ram: "16GB – 32GB RAM",
			storage: "512GB / 1TB M.2",
			screen: "14-inch Non-glare Full HD",
			thumbnail: Product_4,
			description:
				"Asus has struck gold with its ROG Zaphyrus g14 laptop. delivering an incredible performance with its AMD Ryzen 4000 processors and Nvidia RTX 2060 graphics card.",
		},
	},
	{
		sys: {
			id: 4,
			linkUrl: "store/samsung-notebook-9",
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
				"While it may not have the best keyboard in the world, the Samsung Notebook 9 is still one of the best laptops you can buy in 2018.",
		},
	},
];

export default STORE_DATA;
