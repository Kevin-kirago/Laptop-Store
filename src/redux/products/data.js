// backgrounds images
import Product_1 from "../../assets/images/bg-1.png";
import Product_2 from "../../assets/images/bg-2.jpg";
import Product_3 from "../../assets/images/bg-3.jpg";
import Product_4 from "../../assets/images/bg-4.jpg";
import Product_5 from "../../assets/images/bg-5.jpg";
import Product_6 from "../../assets/images/bg-5.jpg";

// products
import Oppo_image_1 from "../../assets/images/oppo-img-1.png";
import Oppo_image_2 from "../../assets/images/oppo-img-2.jpg";
import Oppo_image_3 from "../../assets/images/oppo-img-3.jpg";
import Oppo_image_4 from "../../assets/images/oppo-img-4.jpg";

import Huawei_image_1 from "../../assets/images/huawei-p30-1.jpg";
import Huawei_image_2 from "../../assets/images/huawei-p30-2.jpg";
import Huawei_image_3 from "../../assets/images/huawei-p30-3.jpg";
import Huawei_image_4 from "../../assets/images/huawei-p30-4.jpg";

import samsung_a70_1 from "../../assets/images/samsung-a70-1.jpg";
import samsung_a70_2 from "../../assets/images/samsung-a70-2.jpg";
import samsung_a70_3 from "../../assets/images/samsung-a70-3.jpg";
import samsung_a70_4 from "../../assets/images/samsung-a70-4.jpg";

import nokia_72_1 from "../../assets/images/nokia-72-1.jpg";
import nokia_72_2 from "../../assets/images/nokia-72-2.jpg";
import nokia_72_3 from "../../assets/images/nokia-72-3.jpg";
import nokia_72_4 from "../../assets/images/nokia-72-4.jpg";

import vivi_v15_1 from "../../assets/images/vivo-v15-1.jpg";
import vivi_v15_2 from "../../assets/images/vivo-v15-2.jpg";
import vivi_v15_3 from "../../assets/images/vivo-v15-3.jpg";
import vivi_v15_4 from "../../assets/images/vivo-v15-4.jpg";

import redmi_note8_1 from "../../assets/images/redmi-note8-1.jpg";
import redmi_note8_2 from "../../assets/images/redmi-note8-2.jpg";
import redmi_note8_3 from "../../assets/images/redmi-note8-3.jpg";
import redmi_note8_4 from "../../assets/images/redmi-note8-4.jpg";

const STORE_DATA = [
	{
		sys: {
			id: 0
		},
		fields: {
			name: "Oppo a5s 2020",
			price: "23000",
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
				},
				{
					fields: {
						imageUrl: Oppo_image_4
					}
				}
			]
		}
	},
	{
		sys: {
			id: 1
		},
		fields: {
			name: "Huawei P30 lite",
			price: "21000",
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
				},
				{
					fields: {
						imageUrl: Huawei_image_4
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
			name: "Samsung Galaxy A70",
			price: "30000",
			stars: 5,
			thumbnail: Product_3,
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
					memory: ["Card slot - microSDXC (dedicated slot)", "Internal - 128GB 6GB RAM, 128GB 8GB RAM UFS 2.0"],
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
					battery: ["Non-removable Li-Po 4500 mAh battery", "Fast charging 25W"]
				}
			},
			images: [
				{
					fields: {
						imageUrl: samsung_a70_1
					}
				},
				{
					fields: {
						imageUrl: samsung_a70_2
					}
				},
				{
					fields: {
						imageUrl: samsung_a70_3
					}
				},
				{
					fields: {
						imageUrl: samsung_a70_4
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
			name: "Nokia 7.2",
			price: "34000",
			stars: 4.5,
			thumbnail: Product_4,
			availability: true,
			detail: {
				description: ["Released 2019, September", "180g, 8.3mm thickness", "Android 9.0; Android One", "64GB/128GB storage, microSDXC"],
				extra: {
					launch: ["Announced- 2019, September", "Status - Available. Released 2019, September"],
					display: [
						"Resolution - 1080 x 2280 pixels, 19:9 ratio (~400 ppi density)",
						"Type - IPS LCD capacitive touchscreen, 16M colors",
						"Size - 6.3 inches, 99.1 cm2 (~82.4% screen-to-body ratio)"
					],
					memory: ["Card slot - microSDXC (dedicated slot)", "Internal - 64GB 4GB RAM, 64GB 6GB RAM, 128GB 6GB RAM eMMC 5.1"],
					main_camera: [
						"Quad - 48 MP(, f/1.8, (wide), 1/2.0', 0.8µm, PDAF), 8 MP(f/2.2, 12mm (ultrawide), 1/4.0', 1.12µm), 5 MP(f/2.4, (depth))",
						"Features - Zeiss optics, LED flash, panorama, HDR",
						"Video - 2160p@30fps, 1080p@30fps (gyro-EIS)"
					],
					selfie_camera: ["Single - 20 MP(f/2.0, (wide), 1/3', 0.9µm)", "Features -Zeiss optics, HDR", "Video - 1080p@30fps"],
					network: [
						"Technology - GSM / HSPA / LITE",
						"2G Bands - GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2",
						"3G Bands - HSDPA 850 / 900 / 2100 - ROW",
						"4G Bands - LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 12(700), 13(700), 17(700), 20(800), 28(700), 38(2600), 40(2300), 41(2500), 66(1700/2100) - SM-A705YN/DS",
						"speed - HSPA 42.2/5.76 Mbps, LTE-A (2CA) Cat6 300/50 Mbps or LTE Cat4 150/50 Mbps"
					],
					battery: ["Non-removable Li-Po 3500 mAh battery", "Standard charging 10W"]
				}
			},
			images: [
				{
					fields: {
						imageUrl: nokia_72_1
					}
				},
				{
					fields: {
						imageUrl: nokia_72_2
					}
				},
				{
					fields: {
						imageUrl: nokia_72_3
					}
				},
				{
					fields: {
						imageUrl: nokia_72_4
					}
				}
			]
		}
	},
	{
		sys: {
			id: 4
		},
		fields: {
			name: "vivo V15",
			price: "26000",
			stars: 4.0,
			thumbnail: Product_5,
			availability: true,
			detail: {
				description: ["Released 2019, March", "185g, 8.55mm thickness", "Android 9.0; Funtouch 9", "64GB/128GB storage, microSDXC"],
				extra: {
					launch: ["Announced- 2019, April", "Status - Available. Released 2019, March"],
					display: [
						"Resolution - 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
						"Type - IPS LCD capacitive touchscreen, 16M colors",
						"Size - 6.53 inches, 104.7 cm2 (~85.6% screen-to-body ratio)"
					],
					memory: ["Card slot - microSDXC (dedicated slot)", "Internal - 64GB 6GB RAM, 128GB 6GB RAM eMMC 5.1"],
					main_camera: [
						"Quad - 24 MP(f/1.8, 1/2.8', 1.12µm, Dual Pixel PDAF), 8 MP(f/2.2, 12mm (ultrawide), 1/4.0', 1.12µm), 5 MP(f/2.4, (depth))",
						"Features - LED flash, panorama, HDR",
						"Video - 2160p@30fps, 1080p@30fps (gyro-EIS)"
					],
					selfie_camera: ["Single - Motorized pop-up 32 MP, f/2.0, 26mm (wide), 1/2.8', 0.8µm", "Features - HDR", "Video - 1080p@30fps"],
					network: [
						"Technology - GSM / HSPA / LITE",
						"2G Bands - GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2",
						"3G Bands - HSDPA 850 / 900 / 2100",
						"4G Bands - LTE band 1(2100), 3(1800), 5(850), 7(2600), 8(900), 38(2600), 40(2300),",
						"speed - HSPA, LTE-A"
					],
					battery: ["Non-removable Li-Po 3500 mAh battery", "Standard charging 10W"]
				}
			},
			images: [
				{
					fields: {
						imageUrl: vivi_v15_1
					}
				},
				{
					fields: {
						imageUrl: vivi_v15_2
					}
				},
				{
					fields: {
						imageUrl: vivi_v15_3
					}
				},
				{
					fields: {
						imageUrl: vivi_v15_4
					}
				}
			]
		}
	},
	{
		sys: {
			id: 5
		},
		fields: {
			name: "Xiaomi Redmi Note 8",
			price: "20689",
			stars: 3.8,
			thumbnail: Product_6,
			availability: true,
			detail: {
				description: ["Released 2019, September", "190, 8.4mm thickness", "Android 9.0; MIUI 11", "32GB/64GB/128GB storage, microSDXC"],
				extra: {
					launch: ["Announced- 2019, August", "Status - Available. Released 2019, September"],
					display: [
						"Resolution - 1080 x 2340 pixels, 19.5:9 ratio (~409 ppi density)",
						"Type - IPS LCD capacitive touchscreen, 16M colors",
						"Size - 6.3 inches, 97.4 cm2 (~81.7% screen-to-body ratio)"
					],
					memory: [
						"Card slot - microSDXC (dedicated slot)",
						"Internal - 32GB 3GB RAM, 64GB 4GB RAM, 64GB 6GB RAM, 128GB 4GB RAM, 128GB 6GB RAM eMMC"
					],
					main_camera: [
						"Quad - 48 MP(f/1.8, 1/2.8', 1.12µm, Dual Pixel PDAF), 8 MP(f/2.2, 12mm (ultrawide), 1/4.0', 1.12µm), 2 MP(f/2.4, (depth))",
						"Features - LED flash, panorama, HDR",
						"Video - 2160p@30fps, 1080p@30fps (gyro-EIS)"
					],
					selfie_camera: ["Single - 13 MP (f/2.0, (wide), 1/3.1', 1.12µm)", "Features - HDR", "Video - 1080p@30fps"],
					network: [
						"Technology - GSM / HSPA / LITE",
						"2G Bands - GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2",
						"3G Bands - HSDPA 850 / 900 / 2100",
						"4G Bands - LTE band 1(2100), 3(1800), 5(850), 7(2600), 8(900), 38(2600), 40(2300),",
						"speed - HSPA, LTE-A"
					],
					battery: ["Non-removable Li-Po 4000 mAh battery", "Fast charging 18W"]
				}
			},
			images: [
				{
					fields: {
						imageUrl: redmi_note8_1
					}
				},
				{
					fields: {
						imageUrl: redmi_note8_2
					}
				},
				{
					fields: {
						imageUrl: redmi_note8_3
					}
				},
				{
					fields: {
						imageUrl: redmi_note8_4
					}
				}
			]
		}
	}
];

export default STORE_DATA;
