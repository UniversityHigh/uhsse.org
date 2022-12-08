import { Head } from "@/lib/nextjs";
import type { NextPage } from "next";
import { NetlifyCms } from "./NetlifyCms";

const name = "Admin";
const description = "Content manager for UHSSE admins.";

export const AdminPage: NextPage = () => (
	<>
		<Head page={name} description={description} />

		<NetlifyCms />
	</>
);
