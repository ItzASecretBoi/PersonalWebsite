/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "pc",
		name: 'My PC',
		brand: "Custom Built.",
		category: "desk",
		status: "active",
		specs: "Ryzen 9 7950X 16-Core CPU / RTX 4070 / 32GB DDR5 / 3.8TB storage",
		description:
			"Primary workstation for development, design, and heavy rendering workloads.",
		icon: "material-symbols:laptop-mac-rounded",
		featured: true,
		year: "",
		link: "https://www.apple.com/macbook-pro/",
	},
	{
		id: "phone",
		name: "Galaxy S22",
		brand: "Samsung",
		category: "mobile",
		status: "active",
		specs: "Slate Black / 128GB",
		description:
			"It's my daily driver, it's a decent phone, nothing special.",
		icon: "material-symbols:phone-iphone",
		featured: true,
		year: "2022",
	},
	{
		id: "keyboard",
		name: "Wooting Two HE",
		brand: "Wooting",
		category: "peripheral",
		status: "active",
		specs: "",
		description:
			"I spent too much money on this keyboard.",
		icon: "material-symbols:keyboard-outline-rounded",
		year: "2025",
	},
	{
		id: "headset",
		name: "Maxwell",
		brand: "Audzee",
		category: "audio",
		status: "active",
		specs: "",
		description:
			"I've had em for a few years, their kinda heavy but a good & sturdy pair of headphones for sure!",
		icon: "material-symbols:headphones-rounded",
		year: "2018",
	},
	{
		id: "mouse",
		name: "Deathadder V4 Pro",
		brand: "Razer",
		category: "peripheral",
		status: "active",
		specs: "",
		description:
		"I spent too much money on this mouse.",
		icon: "material-symbols:mouse-rounded",
		year: "2025",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
