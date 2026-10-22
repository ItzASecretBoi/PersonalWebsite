import type { TrackDescriptor } from "@/types/musicConfig";

/**
 * 侧栏音乐本地曲目数据源。
 * 遵循「零额外负担」原则：配置与数据解耦，此处专用于管理本地曲目列表。
 *
 * 添加曲目：在 musicTracks 中追加一项即可：
 * - id: 唯一标识
 * - title: 曲目标题
 * - artist: 艺术家（可选）
 * - cover: 封面图地址（可选；推荐相对 /src，亦支持 /public 或绝对 URL）
 * - source: 音频文件地址（相对 /public 或绝对 URL）
 * - duration: 曲目时长（秒，可选）
 */
export const musicTracks: readonly TrackDescriptor[] = [
	{
		id: "happydayz",
		title: "HappyDayz",
		artist: "ItzASecretBoi",
		cover: "assets/images/music/secret.webp",
		source: "/assets/music/url/HappyDayz__61dcaf5b.ogg",
		duration: 99,
	},
	{
		id: "hitori",
		title: "ひとり上手",
		artist: "Kaya",
		cover: "assets/images/music/hitori.webp",
		source: "/assets/music/url/hitori.mp3",
		duration: 253,
	},
	{
		id: "xryx",
		title: "眩耀夜行",
		artist: "スリーズブーケ",
		cover: "assets/images/music/xryx.webp",
		source: "/assets/music/url/xryx.mp3",
		duration: 245,
	},
	{
		id: "cl",
		title: "春雷の頃",
		artist: "22/7",
		cover: "assets/images/music/cl.webp",
		source: "/assets/music/url/cl.mp3",
		duration: 242,
	},
];
