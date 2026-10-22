import type { FriendsConfig } from "../types/friendsConfig.ts";
import { withUserConfig } from "../utils/config-overlay.ts";

export const friendsConfig: FriendsConfig = withUserConfig("friends", {
	enable: true,
	title: "$t:friends",
	description: "Link Exchange is welcome,  feel free to contact me if you'd like to be here.",
});
