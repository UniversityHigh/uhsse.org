import { Hero } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { ChakraProvider } from "@/lib/chakra-ui";
import type { NextPageWithLayout } from "@/lib/nextjs";
import { Head } from "@/lib/nextjs";
import { getAppLayout } from "@/utils/getAppLayout";
import { getGoogleDocsViewerEmbedUrl } from "@/utils/getGoogleDocsViewerEmbedUrl";
import { SimpleGrid } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import netlifyCmsContent from "../assets/netlify-cms-content.json";
import { getAlphabeticallyFilteredContacts } from "../utils/contacts";
import { BulletinBoard } from "./BulletinBoard";
import { Contacts } from "./Contacts";
import { Showcase, ShowcaseItem } from "./Showcase";
import { SpinnerIframe } from "./SpinnerIframe";

export const HomePage: NextPageWithLayout = () => {
	const hasBulletin = !!netlifyCmsContent.bulletin;

	return (
		<ChakraProvider>
			<Head
				page="Home"
				description="Unviersity High School of Science and Engineering"
			/>

			<Hero
				image={netlifyCmsContent.backgroundImage}
				heading={netlifyCmsContent.heading}
				subheading={netlifyCmsContent.subheading}
			/>

			<PageContainer>
				<SimpleGrid alignItems="center" columns={{ lg: 2 }} spacing={16}>
					<BulletinBoard
						tabs={[
							...(hasBulletin ? ["Bulletin"] : []),
							"Calendar",
							"Lunch Menu",
							"Contacts",
						]}
					>
						{hasBulletin && (
							<ReactMarkdown components={ChakraUIRenderer()} skipHtml>
								{netlifyCmsContent.bulletin}
							</ReactMarkdown>
						)}

						<SpinnerIframe src={netlifyCmsContent.calendarEmbedUrl} />

						<SpinnerIframe
							src={getGoogleDocsViewerEmbedUrl(
								netlifyCmsContent.lunchMenuFileUrl
							)}
						/>

						<Contacts>{getAlphabeticallyFilteredContacts}</Contacts>
					</BulletinBoard>

					<Showcase>
						{netlifyCmsContent.showcase.map((item) => (
							<ShowcaseItem key={item.heading} {...item} />
						))}
					</Showcase>
				</SimpleGrid>
			</PageContainer>
		</ChakraProvider>
	);
};

HomePage.getLayout = getAppLayout;
