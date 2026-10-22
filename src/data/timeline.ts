/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	//{
	//	title: "Shirone Theme M3E Major Architecture Upgrade",
	//	date: "2026.08",
	//	category: "milestone",
	//	subtitle: "Open Source Project",
	//	description:
	//		"Refactored the entire blog theme into a Material 3 Expressive atomic component system with token-driven styling, complete keyboard navigation, and full accessibility compliance.",
	//	highlights: [
	//		"Implemented dynamic HCT palette calculation and state layer tokens",
	//		"Added multi-page capabilities: Timeline, Skills, Projects, and Protected Albums",
	//		"Zero-error strict type-checking and automated visual regression locks",
	//	],
	//	tags: ["Astro", "Svelte 5", "M3E", "Tailwind 4"],
	//	links: [
	//		{
	//			label: "GitHub Repository",
	//			url: "https://github.com/LyraVoid/Shirone",
	//			icon: "fa7-brands:github",
	//		},
	//	],
	//	icon: "material-symbols:rocket-launch-rounded",
	//	featured: true,
	//},
//
	//{
	//	title: "Senior Frontend Engineer",
	//	date: "2025.03 – Present",
	//	category: "career",
	//	subtitle: "Technology Lab",
	//	location: "Tokyo, Japan",
	//	description:
	//		"Leading frontend architecture, web performance optimization, and interactive design system development for modern web platforms.",
	//	highlights: [
	//		"Spearheaded design system unification across web products",
	//		"Reduced core bundle load times by 40% using modern SSR and asset pipelines",
	//	],
	//	tags: ["TypeScript", "Architecture", "Performance", "Design System"],
	//	icon: "material-symbols:work-rounded",
	//	featured: true,
	//},
//
	//{
	//	title: "Full-Stack Web Application Launch",
	//	date: "2024.11",
	//	category: "project",
	//	subtitle: "Independent Creation",
	//	description:
	//		"Designed and built an end-to-end creative workflow application with real-time collaboration and cloud synchronization.",
	//	highlights: [
	//		"Designed intuitive fluid canvas interface with low-latency interaction",
	//		"Built serverless backend APIs with edge caching and relational persistence",
	//	],
	//	tags: ["Svelte", "Node.js", "PostgreSQL", "Cloudflare"],
	//	icon: "material-symbols:deployed-code-outline-rounded",
	//},

	{
		title: "Taught a summer class on Unreal Engine 5 basics.",
		date: "2026.07",
		category: "project",
		subtitle: "My first GameDev related job.",
		location: "Lafayette, Louisiana",
		description:
			"I was picked out from my peers as a good fit to teach a summer program for possible students looking to visit AIE for programming!",
		highlights: [
			"Tutored Unreal Engine UI & layout.",
			"Went over basics such as int's, bool's, enums, etc.",
			"Taught students how to make basic zombies mini game.",
			"Kept students paying attention & engaged.",
			"Was offered to do it again next year!",
		],
		tags: ["Unreal Engine", "Programming", "Career"],
		icon: "material-symbols:school-outline-rounded",
	},

	{
		title: "Accepted into the Academy Of Interactive Entertainment.",
		date: "2025.08",
		category: "project",
		subtitle: "",
		location: "Lafayette, Louisiana",
		description:
			"I got accepted & started academically pursuing a degree for game programming at AIE!",
		highlights: [
			"Made bare c++ terminal games.",
			"Studied Unreal Engine 5 c++ & blueprint.",
			"Was assigned lead programmer role in our minor production assessment!",
			"Made 3D c++ graphic renderers.",
		],
		tags: ["Unreal Engine", "Programming", "Career"],
		icon: "material-symbols:school-outline-rounded",
	},

	{
		title: "Started using godot engine.",
		date: "2025.05",
		category: "project",
		subtitle: "",
		//location: "Hangzhou, China",
		description:
			"This was the engine that really peaked my interest & started my journey in game development.",
		highlights: [
			"Made pseudo 3D player controller.",
			"Experimented with state machines.",
			"Made other various hobby projects. ",
		],
		tags: ["Godot Engine", "Programming", "Hobby"],
		icon: "simple-icons:godotengine",
	},

	{
		title: "Began tinkering with Minecraft servers & plugins.",
		date: "2024~",
		category: "life",
		subtitle: 'My first "game development" experience.',
		description:
			"",
		highlights: 
		[
			"Started working on my very own Minecraft server.",
			"Recognized by plugin developer LoneDev by helping people out in my free time.",
			"Got hired as a support representative for the plugin Minecraft plugin ItemsAdder.",
		],
		tags: ["Minecraft", "Support Representative"],
		icon: "material-symbols:edit-note-rounded",
	},
	
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
