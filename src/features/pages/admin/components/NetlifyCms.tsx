import { NETLIFY_CMS_CONFIG } from "@/features/pages/admin";
import dynamic from "next/dynamic";

export const NetlifyCms = dynamic(
	async () => {
		const { default: cms } = await import("netlify-cms-app");
		cms.init({ config: NETLIFY_CMS_CONFIG });

		return () => null;
	},
	{ ssr: false }
);
