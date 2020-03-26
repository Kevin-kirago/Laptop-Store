// backgrounds images
import Product_1 from "./images/bg-1.png";
import Product_2 from "./images/bg-2.jpg";

// products
import Oppo_image_1 from "./images/oppo-img-1.png";
import Oppo_image_2 from "./images/oppo-img-2.jpg";
import Oppo_image_3 from "./images/oppo-img-3.jpg";
import Huawei_image_1 from "./images/huawei-p30-1.jpg";
import Huawei_image_2 from "./images/huawei-p30-2.jpg";
import Huawei_image_3 from "./images/huawei-p30-3.jpg";

const SHOP_DATA = [
	{
		sys: {
			id: 1
		},
		fields: {
			name: "Oppo a5s 2020",
			price: "23,000",
			stars: 4,
			thumbnail: Product_1,
			availability: true,
			detail: {
				description: ["Released 2019, October", "195g, 9.1mm thickness", "Android 9.0; ColorOS 6.1", "64GB/128GB storage, microSDXC"],
				extra: {
					launch: ["Announced- 2019, September", "Status - Available. Released 2019, October"],
					display: [
						"Resolution - 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
						"Type - IPS LCD capacitive touchscreen, 16M colors",
						"Size - 6.5 inches, 102.0 cm2 (~82.7% screen-to-body ratio)"
					],
					memory: ["Card slot - microSDXC (dedicated slot)", "Internal - 64GB 3GB RAM, 64GB 4GB RAM, 128GB 4GB RAM"],
					main_camera: [
						"Quad - 12 MP( f/1.8, (wide), 1/2.8', 1.25µm, PDAF), 8 MP(13mm (ultrawide), 1/4.0', 1.12µm), 2 MP(2 MP, f/2.4, 1/5.0', 1.75µm), 2 MP(2 MP, f/2.4, (depth))",
						"Features - LED flash, HDR, panorama",
						"Video - 2160p@30fps, 1080p@30fps, gyro-EIS"
					],
					selfie_camera: ["Single - 24 MP, f/2.0, 26mm (wide), 1/2.8', 0.9µm", "Features - Panorama", "Video - 1080p@30fps"],
					network: [
						"Technology - GSM / HSPA / LITE",
						"2G Bands - GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2",
						"3G Bands - HSDPA 850 / 900 / 2100",
						"4G Bands - LTE band 1(2100), 3(1800), 5(850), 7(2600), 8(900), 20(800), 28(700), 38(2600), 40(2300), 41(2500)"
					],
					battery: ["Non-removable Li-Po 5000 mAh battery", "Power bank/Reverse charging"]
				}
			},
			images: [
				{
					fields: {
						imageUrl: Oppo_image_1
					}
				},
				{
					fields: {
						imageUrl: Oppo_image_2
					}
				},
				{
					fields: {
						imageUrl: Oppo_image_3
					}
				}
			]
		}
	},
	{
		sys: {
			id: 2
		},
		fields: {
			name: "Huawei P30 lite",
			price: "21,000",
			stars: 4,
			thumbnail: Product_2,
			availability: true,
			detail: {
				description: [
					"Released 2019, October",
					"159g, 7.4mm thickness",
					"Android 9.0, up to Android 10.0; EMUI 10.0",
					"128GB storage, microSDXC"
				],
				extra: {
					launch: ["Announced- 2019, March", "Status - Available. Released 2019, October"],
					display: [
						"Resolution - 1080 x 2312 pixels (~415 ppi density)",
						"Type - LTPS IPS LCD capacitive touchscreen, 16M colors",
						"Size - 6.15 inches, 93.6 cm2 (~84.2% screen-to-body ratio)"
					],
					memory: ["Card slot - microSDXC (uses shared SIM slot)", "Internal - 128GB 4GB RAM, 128GB 6GB RAM, 128GB 8GB RAMeMMC 5.1"],
					main_camera: [
						"Quad - 48 MP, f/1.8, 27mm (wide), 1/2.0', 0.8µm, PDAF, 8 MP, 17mm (ultrawide), 2 MP(2 MP, f/2.4, 1/5.0', 1.75µm), 2 MP(2 MP, f/2.4, (depth))",
						"Features - LED flash, HDR, panorama",
						"Video - 1080p@30fps (gyro-EIS)"
					],
					selfie_camera: ["Single - 24 MP, f/2.0, 26mm (wide), 1/2.8', 0.9µm", "Features - Panorama", "Video - 1080p@30fps"],
					network: [
						"Technology - GSM / HSPA / LITE",
						"2G Bands - GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)",
						"3G Bands - HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 - Europe, Canada",
						"4G Bands - LTE band 1(2100), 3(1800), 5(850), 7(2600), 8(900), 20(800), 28(700), 38(2600), 40(2300), 41(2500)",
						"speed - HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat6 400/50 Mbps"
					],
					battery: ["Non-removable Li-Po 4000 mAh battery", "Power bank/Reverse charging"]
				}
			},
			images: [
				{
					fields: {
						imageUrl: Huawei_image_1
					}
				},
				{
					fields: {
						imageUrl: Huawei_image_2
					}
				},
				{
					fields: {
						imageUrl: Huawei_image_3
					}
				}
			]
		}
	},
	{
		sys: {
			id: 3
		},
		fields: {
			name: "Samsung Galaxy A70",
			price: "30,000",
			stars: 5,
			thumbnail: Product_2,
			availability: true,
			detail: {
				description: [
					"Released 2019, April",
					"183g, 7.9mm thickness",
					"Android 9.0, up to Android 10.0; One UI 2.0",
					"128GB storage, microSDXC"
				],
				extra: {
					launch: ["Announced- 2019, March", "Status - Available. Released 2019, April"],
					display: [
						"Resolution - 1080 x 2400 pixels, 20:9 ratio (~393 ppi density)",
						"Type - Super AMOLED capacitive touchscreen, 16M colors",
						"Size - 6.7 inches, 108.4 cm2 (~86.0% screen-to-body ratio)"
					],
					memory: ["Card slot - microSDXC (dedicated slot)", "Internal - 128GB 6GB RAM, 128GB 8GB RAM"],
					main_camera: [
						"Quad - 32 MP(f/1.7, 26mm (wide), 1/2.8', 0.8µm, PDAF), 8 MP(f/2.2, 12mm (ultrawide), 1/4.0', 1.12µm), 5 MP(f/2.2, (depth))",
						"Features - LED flash, HDR, panorama",
						"Video - 2160p@30fps, 1080p@30/240fps"
					],
					selfie_camera: ["Single - 32 MP(f/2.0, 26mm (wide), 1/2.8', 0.8µm)", "Features - Panorama", "Video - 1080p@30fps"],
					network: [
						"Technology - GSM / HSPA / LITE",
						"2G Bands - GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)",
						"3G Bands - HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100",
						"4G Bands - LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 12(700), 13(700), 17(700), 20(800), 28(700), 38(2600), 40(2300), 41(2500), 66(1700/2100) - SM-A705YN/DS",
						"speed - HSPA, LTE-A"
					],
					battery: ["Non-removable Li-Po 4500 mAh battery", "Power bank/Reverse charging"]
				}
			},
			images: [
				{
					fields: {
						imageUrl: Huawei_image_1
					}
				},
				{
					fields: {
						imageUrl: Huawei_image_2
					}
				},
				{
					fields: {
						imageUrl: Huawei_image_3
					}
				}
			]
		}
	}
];

export default SHOP_DATA;
