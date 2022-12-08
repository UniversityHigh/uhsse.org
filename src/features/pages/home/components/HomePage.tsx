import { Head } from "@/lib/nextjs";
import type { NextPage } from "next";

const name = "Home";
const description = "Home of all things UHSSE.";

export const HomePage: NextPage = () => (
	<>
		<Head page={name} description={description} />
	</>
);
