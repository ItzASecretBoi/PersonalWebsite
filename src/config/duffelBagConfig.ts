import type { DuffelBagConfig } from "../types/duffelBagConfig.ts";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * Duffel Bag page (/duffel-bag/): the devices and compass sections on one page.
 * While enabled, /devices/ and /compass/ redirect here. Section headings still
 * come from devicesConfig and compassConfig; their data lives in
 * src/data/devices.ts and src/data/compass.ts.
 */
export const duffelBagConfig: DuffelBagConfig = withUserConfig("duffelBag", {
	enable: true,
	title: "Duffel Bag",
	description: "Everything I carry around: the gear I use and the sites I keep coming back to.",
});
