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
			availability: "currently available",
			cpu: "8th generation Intel Core i5 – i7 ",
			ram: "8GB RAM",
			storage: "256GB - 512GB SSD",
			screen: "13-inch 1440p (2,160 x 1,440)",
			thumbnail: Product_1,
			description:
				"The Huawei MateBook 13 is our pick for the best laptop money can buy in 2020. This is a gorgeously-designed laptop with a stunning screen.",
			routeName: "/store/huawei-matebook-13",
			item: {
				description:
					"The Huawei MateBook 13 looks like the usual iterative update to its predecessor both on paper and in practice. However, Huawei managed to eke even more graphical power out of the same processor this year with improved thermals and 25% faster fans inside, allowing the graphics chip to use 25 watts of the laptop’s overall power draw – most laptops equipped with the Nvidia MX150 run a 15W, lower-spec version of the chip. These fans also help keep the laptop surprisingly cool under load compared to similarly thin and light models.",
				main_features: [
					{
						feature: "Display",
						description:
							"13.9 inch 10-point Touch Screen with 3000 x 2000 Resolution - Natural finger-touch screen with the 3000 x 2000 resolution boasts impressive color and clarity and IPS technology provides wide viewing angles",
					},
					{
						feature: "Processor",
						description: [
							"Intel Core i5-8250U Quad Core 1.6GHz, up to 3.4GHz - Ultra-low-voltage platform and quad-core processing provide maximum high-efficiency power",
							"NVIDIA Geforce MX150 DDR5 2GB Dedicated Graphics - On-processor graphics with shared video memory provide high image quality for Internet use, basic photo editing and casual gaming",
						],
					},
					{
						feature: "Storage",
						description: [
							"256GB SSD Storage Capacity - Provides room to store pictures, videos, music and more",
							"8GB LPDDR3 2133MHz RAM for Advanced Multitasking - Substantial high-bandwidth RAM to smoothly run your games, photos and video-editing applications",
						],
					},
					{
						feature: "Devices",
						description: [
							"Front Camera for Photos and Face-to-face Chat - 1.0MP front camera allows you to capture memorable moments or chat with friends",
							"Bluetooth 4.1 Interface Syncs with Compatible Devices - Wirelessly transfer photos, music and other media between the computer and your Bluetooth-enabled cell phone or MP3 player, or connect Bluetooth wireless accessories",
						],
					},
				],
				images: [
					"https://geardiary.com/wp-content/uploads/2018/03/DSCF3044-750x507.jpg",
					"https://i.pinimg.com/originals/a1/31/41/a13141fbe7ce3273a4464d1daf005eb8.jpg",
					"https://i.pinimg.com/564x/87/cd/9f/87cd9ffbdd989ac2e97500b0d61cffca.jpg",
				],
			},
		},
	},
	{
		sys: {
			id: 1,
			linkUrl: "store/apple-macbook-pro-2019",
		},
		fields: {
			productName: "MacBook Pro (2019)",
			price: "2399",
			stars: 4,
			availability: "currently available",
			image: "macbook-pro-15.jpg",
			cpu: "9th-generation Intel Core i7 – i9",
			ram: "16GB – 64GB RAM",
			storage: "512GB – 8TB SSD",
			screen: "16-inch Retina display with True Tone",
			thumbnail: Product_2,
			description:
				"If you're after the latest and greatest laptop from Apple, we suggest you look into the 2019 model of the 16-inch MacBook Pro with Touch Bar.",
			routeName: "/store/apple-macbook-pro-2019",
			item: {
				description:
					"The MacBook Pro 16-inch is the most powerful MacBook ever made – especially if you splash out on the fully-loaded option. It’s pricey, but with an 8-core Intel processor, 64GB RAM and 8TB SSD, you’ll not get another laptop quite like it.Sadly we didn’t get to play with that version – instead we’ve reviewed the high-end base configuration, with a 2.3GHz 8-core Intel Core i9 processor, AMD Radeon Pro 5500M, 16GB RAM and 1TB SSD. This is still an incredibly powerful device, and one that many people will go for if you need a laptop for video editing. For many others, it’s wildly over-specced for their needs.",
				main_features: [
					{
						feature: "Display",
						description:
							"16‑inch (diagonal) LED‑backlit display with IPS technology; 3072‑by‑1920 native resolution at 226 pixels per inch with support for millions of colors 500 nits brightness Wide color (P3) True Tone technology Refresh rates: 47.95Hz, 48.00Hz, 50.00Hz, 59.94Hz, 60.00Hz",
					},
					{
						feature: "Processor",
						description: [
							"2.6GHz 6‑core Intel Core i7, Turbo Boost up to 4.5GHz, with 12MB shared L3 cache - Ultra-low-voltage platform and quad-core processing provide maximum high-efficiency power.",
							"AMD Radeon Pro 5300M with 4GB of GDDR6 memory and automatic graphics switching Intel UHD Graphics 630",
						],
					},
					{
						feature: "Storage",
						description: [
							"512GB SSD -256GB SSD Storage Capacity - Provides room to store pictures, videos, music and more",
							"8GB LPDDR3 2133MHz RAM for Advanced Multitasking - Substantial high-bandwidth RAM to smoothly run your games, photos and video-editing applications",
						],
					},
					{
						feature: "Devices",
						description: [
							"Front Camera for Photos and Face-to-face Chat - 1.0MP front camera allows you to capture memorable moments or chat with friends",
							"Bluetooth 4.1 Interface Syncs with Compatible Devices - Wirelessly transfer photos, music and other media between the computer and your Bluetooth-enabled cell phone or MP3 player, or connect Bluetooth wireless accessories",
						],
					},
				],
				images: [
					"https://specials-images.forbesimg.com/imageserve/5ddc07232c886a0007ed0722/960x0.jpg?fit=scale",
					"https://images.idgesg.net/images/article/2019/11/16in-macbook-pro-angle-100818635-large.jpg",
					"https://cnet2.cbsistatic.com/img/UVvOyetJCaHw4aapWJM1jwvT_UY=/940x0/2019/07/10/47fce273-8bbc-47a9-a07f-1b1ad4d06a46/04-macbook-pro-2019.jpg",
				],
			},
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
			availability: "currently available",
			cpu: "10th Generation Intel Core™ i7",
			ram: "16GB LPDDR4x",
			storage: "512 GB SSD",
			screen: "13.3-inch FHD (1,920 x 1,080) touch",
			thumbnail: Product_3,
			description:
				"The Dell XPS 13 is an absolutely brilliant laptop. The 2018 version rocks an 8th-generation Intel Core i5 or i7 processor and a bezel-less ‘Infinity Edge’ display.",
			routeName: "/store/dell-xps-13",
			item: {
				description:
					"For years, the Dell XPS 13 has sat at the top of the Ultrabook pile, with pristine design and excellent displays, but competition is getting tougher every single year. Sure, Dell is still bringing its design chops to the game with the new XPS 13 - bezels are incredibly thin, while still managing to fit a pretty decent webcam up in the top, along with a thin and light build that makes it extremely easy to carry around. But here's the thing: laptops from other houses like the HP Spectre x360 are catching up.",
				main_features: [
					{
						feature: "Display",
						description:
							"13.4 UHD+ (3840 x 2400) InfinityEdge Touch Anti-Reflecitve 500-Nit Display - Natural finger-touch screen with the 3000 x 2000 resolution boasts impressive color and clarity and IPS technology provides wide viewing angles",
					},
					{
						feature: "Processor",
						description: [
							"10th Generation Intel® Core™ i7-1065G7 Processor (8MB Cache, up to 3.9 GHz) - Ultra-low-voltage platform and quad-core processing provide maximum high-efficiency power",
							"NVIDIA Geforce MX150 DDR5 2GB Dedicated Graphics - On-processor graphics with shared video memory provide high image quality for Internet use, basic photo editing and casual gaming",
						],
					},
					{
						feature: "Storage",
						description: [
							"Customization up to 1TB M.2 PCIe NVMe Solid State Drive Storage Capacity - Provides room to store pictures, videos, music and more",
							"Up to 32GB 3733MHz LPDDR4x Memory Onboard RAM for Advanced Multitasking - Substantial high-bandwidth RAM to smoothly run your games, photos and video-editing applications",
						],
					},
					{
						feature: "Devices",
						description: [
							"Front Camera for Photos and Face-to-face Chat - 1.0MP front camera allows you to capture memorable moments or chat with friends",
							"Bluetooth 4.1 Interface Syncs with Compatible Devices - Wirelessly transfer photos, music and other media between the computer and your Bluetooth-enabled cell phone or MP3 player, or connect Bluetooth wireless accessories",
						],
					},
				],
				images: [
					"https://www.ultrabookreview.com/wp-content/uploads/2019/12/dell-xps-13-9300-2020-thumb.jpg",
					"https://media.itpro.co.uk/image/upload/v1578933915/itpro/Reviews/Dell%20XPS%2013%202020%20hands-on/20200107_185603.jpg",
					"https://cdn.mos.cms.futurecdn.net/S9cX76Jon3K35GYvGvR4xD.jpg",
				],
			},
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
			availability: "currently available",
			cpu: "AMD Ryzen 7 4800HS – 9 4900HS",
			ram: "16GB – 32GB RAM",
			storage: "512GB / 1TB M.2",
			screen: "14-inch Non-glare Full HD",
			thumbnail: Product_4,
			description:
				"Asus has struck gold with its ROG Zaphyrus g14 laptop. delivering an incredible performance with its AMD Ryzen 4000 processors and Nvidia RTX 2060 graphics card.",
			routeName: "/store/asus-rog",
			item: {
				description:
					"The Asus Zephyrus G14 is not perfect, missing a webcam and a Thunderbolt 3 port. However, it’s damn near close to being one, garnering our coveted yet rarely given five-star rating, and making it one of the best laptops in 2020, and our pick of the best gaming laptop overall.This is an absolute beast of a gaming laptop, delivering an incredible performance with its AMD Ryzen 4000 processors and Nvidia RTX 2060 graphics card while touting best-in-class battery life that will last you all day long, a fast display with a 120Hz refresh rate and a lightweight, ultra-thin design.",
				main_features: [
					{
						feature: "Display",
						description:
							"14-inch Full HD (1,920 x 1,080) IPS, 120Hz - screen with the 3000 x 2000 resolution boasts impressive color and clarity and IPS technology provides wide viewing angles",
					},
					{
						feature: "Processor",
						description: [
							"3.0GHz AMD Ryzen 9 4900HS (8-core, 12MB cache, up to 4.3GHz) - Ultra-low-voltage platform and quad-core processing provide maximum high-efficiency power",
							"Nvidia GeForce RTX 2060 (6GB GDDR6) - On-processor graphics with shared video memory provide high image quality for Internet use, basic photo editing and casual gaming",
						],
					},
					{
						feature: "Storage",
						description: [
							"256GB SSD Storage Capacity - Provides room to store pictures, videos, music and more",
							"8GB LPDDR3 2133MHz RAM for Advanced Multitasking - Substantial high-bandwidth RAM to smoothly run your games, photos and video-editing applications",
						],
					},
					{
						feature: "Devices",
						description: [
							"Front Camera for Photos and Face-to-face Chat - 1.0MP front camera allows you to capture memorable moments or chat with friends",
							"Bluetooth 4.1 Interface Syncs with Compatible Devices - Wirelessly transfer photos, music and other media between the computer and your Bluetooth-enabled cell phone or MP3 player, or connect Bluetooth wireless accessories",
						],
					},
				],
				images: [
					"https://www.ultrabookreview.com/wp-content/uploads/2020/01/asus-rog-zephyrus-g14-ga401-2.jpg",
					"https://i.pcmag.com/imagery/lineups/037bGGJl91gf6X5MreCoFxS-1..v_1578361658.jpg",
					"https://cdn.vox-cdn.com/thumbor/c_ivFRbD_RWkfz34RltQ7J91Dm4=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19571839/bfarsace_191212_3852_0006.jpg",
				],
			},
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
			availability: "currently available",
			cpu: "Intel Core i7, 8th generation",
			ram: "16GB RAM",
			storage: "256 GB SSD",
			screen: "15-inch, Full HD",
			thumbnail: Product_5,
			description:
				"While it may not have the best keyboard in the world, the Samsung Notebook 9 is still one of the best laptops you can buy in 2018.",
			routeName: "/store/samsung-notebook-9",
			item: {
				description:
					"HUAWEI MateBook X Pro is a cost-effective laptop which supports fingerprint recognition. Equipped with a 13.9 inch LTPS display, brings your photos and videos to life. The powerful Windows 10 operating system makes it easy to check E-mail and manage digital files. Powered by Intel Core i5-8250U processor, ensures high performance. NVIDIA GeForce MX150 dedicated graphics, all of these give users a full suite for using dominance and offer users a truly seamless gaming experience.",
				main_features: [
					{
						feature: "Display",
						description:
							"13.9 inch 10-point Touch Screen with 3000 x 2000 Resolution - Natural finger-touch screen with the 3000 x 2000 resolution boasts impressive color and clarity and IPS technology provides wide viewing angles",
					},
					{
						feature: "Processor",
						description: [
							"Intel Core i5-8250U Quad Core 1.6GHz, up to 3.4GHz - Ultra-low-voltage platform and quad-core processing provide maximum high-efficiency power",
							"NVIDIA Geforce MX150 DDR5 2GB Dedicated Graphics - On-processor graphics with shared video memory provide high image quality for Internet use, basic photo editing and casual gaming",
						],
					},
					{
						feature: "Storage",
						description: [
							"256GB SSD Storage Capacity - Provides room to store pictures, videos, music and more",
							"8GB LPDDR3 2133MHz RAM for Advanced Multitasking - Substantial high-bandwidth RAM to smoothly run your games, photos and video-editing applications",
						],
					},
					{
						feature: "Devices",
						description: [
							"Front Camera for Photos and Face-to-face Chat - 1.0MP front camera allows you to capture memorable moments or chat with friends",
							"Bluetooth 4.1 Interface Syncs with Compatible Devices - Wirelessly transfer photos, music and other media between the computer and your Bluetooth-enabled cell phone or MP3 player, or connect Bluetooth wireless accessories",
						],
					},
				],
				images: [
					"https://cnet3.cbsistatic.com/img/pX-rLfDaO1CzgnKm0rkDTLjNjSk=/980x551/2019/03/25/ff707e26-08b7-41d7-9d8f-6e69bf79783a/034-samsung-notebook-9-pro.jpg",
					"https://i2.wp.com/microsoftcaregh.com/wp-content/uploads/2019/01/Samsung-notebook-pro-9.jpg?resize=1024%2C578&ssl=1",
					"https://i.pinimg.com/564x/87/cd/9f/87cd9ffbdd989ac2e97500b0d61cffca.jpg",
				],
			},
		},
	},
];

export default STORE_DATA;
