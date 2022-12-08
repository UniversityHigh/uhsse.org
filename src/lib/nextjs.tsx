import netlifyCmsGlobals from "@/assets/netlify-cms-globals.json";
import { EmptyObject } from "@/types";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import BaseHead from "next/head";
import type { ReactElement, ReactNode } from "react";

export type AppPropsWithLayout = AppProps & {
	readonly Component: NextPageWithLayout;
};

export type NextPageGetLayout = (page: ReactElement) => ReactNode;

export type NextPageWithLayout<P = EmptyObject, IP = P> = NextPage<P, IP> & {
	getLayout?: NextPageGetLayout;
};

type HeadProps = {
	readonly page: string;
	readonly description: string;
	readonly titleSeparator?: string;
};

export const Head = ({
	page,
	description,
	titleSeparator = " | ",
}: HeadProps) => (
	<BaseHead>
		<meta content={description} name="description" />

		<title>{`${page}${titleSeparator}${netlifyCmsGlobals.title}`}</title>
	</BaseHead>
);
