import { Head } from "@/lib/nextjs";
import type { NextPage } from "next";
import { NetlifyCms } from "./NetlifyCms";

export const AdminPage: NextPage = () => (
	<>
		<Head page="Admin" description="CMS dashboard for UHSSE admins" />

		<NetlifyCms />
	</>
);
