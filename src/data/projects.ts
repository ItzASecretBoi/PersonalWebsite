/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "fragment",
		title: "Fragment",
		summary:
			"A modular, resource-based inventory system for Godot 4: build items from reusable fragments, with hotbars, equipment management and extendable UI.",
		category: "gamedev",
		phase: "building",
		technologies: ["Godot 4", "GDScript"],
		icon: "simple-icons:godotengine",
		cover: "/assets/projects/fragment.png",
		coverAlt: "Fragment, a Godot inventory system",
		featured: true,
		website:
			"https://itzasecretboi.itch.io/fragment?secret=Xk7UukdZUY3d61gzv7qiWt7H1Lk",
		year: "2026",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
