/**
 * 技能页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/skillsConfig.ts 控制。
 */
import type { SkillItem } from "@/types/skillsConfig";

//beginner: { value: 1, key: I18nKey.skillLevelBeginner },
//intermediate: { value: 2, key: I18nKey.skillLevelIntermediate },
//advanced: { value: 3, key: I18nKey.skillLevelAdvanced },
//expert: { value: 4, key: I18nKey.skillLevelExpert },

export const skillsData: SkillItem[] = [

	{
		name: "Godot",
		description: "My primary engine of choice! I love the open source nature of godot, and it's what kicked off my programming addiction initially. When I was a beginner, I spent months working on a psuedo-3D character, but more recently I've been working on a complex & modular inventory system in godot that I've codenamed 'Fragment'. I also have a handful of various small projects, that never made it out of my hard drive.",
		icon: "simple-icons:godotengine",
		category: "backend",
		level: "advanced",
	},

	
	{
		name: "Unreal Engine",
		description: "I studied UE5 exclusively during my 2 year course at AIE, I'm much more confident in my blueprint skills compared to my UE5 C++, but I can do a good bit of both regardless. Unfortunately though, the newer versions of UE6 will be using Verse going forward, so I might have a bit to catch up on in a few years.",
		icon: "simple-icons:unrealengine",
		category: "backend",
		level: "advanced",
	},

	{
		name: "FL Studio",
		description: "FL studio is one of the two daw's that I've ever used, and over time as a hobbyist, I've gotten pretty decent at it! I still am not very good mixing, but man sometimes, I can make a KILLER composition.",
		icon: "local:flstudio",
		category: "frontend",
		level: "intermediate",
	},
	
	{
		name: "C++",
		description: "Throughout my two year course at AIE, I've studied C++. We worked on making console applications & UE5 gameplay systems using C++.",
		icon: "simple-icons:cplusplus",
		category: "backend",
		level: "intermediate",
	},

	{
		name: "Astro",
		description: "This website is built on Astro! But, it's a built mostly from the Shirone repository on github, so huge shoutout to them! ",
		icon: "simple-icons:astro",
		category: "frontend",
		level: "beginner",
	},


	{
		name: "Python",
		description: "I've done some basic scripting in python, I once made a TTS bot hooked into a completely locally hosted LLM once for fun & all in python! It's syntax comes to me pretty naturally since it's simular to godot, but I'm not the best at it.",
		icon: "simple-icons:python",
		category: "backend",
		level: "beginner",
	},

	{
		name: "Java",
		description: "Collaborated on a simple Minecraft mod, I'm familiar with the syntax a little, I've but never worked on anything serious in it. ",
		icon: "simple-icons:openjdk",
		category: "backend",
		level: "beginner",
	},

	{
		name: "C#",
		description: "I'm already pretty familiar with the syntax since I've been using c++ for awhile which is very simular. But truthfully, I haven't done a whole bunch in c# yet, although I do plan on practicing it some. Most of my experience comes from making silly things in S&box.",
		icon: "simple-icons:csharp",
		category: "backend",
		level: "beginner",
	},

];

/** 获取所有技能数据列表 */
export function getSkillsList(): SkillItem[] {
	return skillsData;
}
