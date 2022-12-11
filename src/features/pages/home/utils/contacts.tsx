import netlifyCmsContent from "../assets/netlify-cms-content.json";
import { Contact } from "../components/Contact";

type Contacts = typeof netlifyCmsContent.contacts;
type Contact = Contacts[number];

const getFilterContactsFunction = (filter: string) => (contact: Contact) =>
	Object.entries(contact).some(
		([, value]) =>
			value && (value as string).toLowerCase().includes(filter.toLowerCase())
	);

const sortContactsAlphabeticallyByLastName = (
	source: Contact,
	target: Contact
) => {
	const sourceLastName = source.lastName.toLowerCase();
	const targetLastName = target.lastName.toLowerCase();

	if (sourceLastName < targetLastName) {
		return -1;
	}

	if (sourceLastName > targetLastName) {
		return 1;
	}

	return 0;
};

const mapContactsToComponent = (contact: Contact) => <Contact {...contact} />;

export const getAlphabeticallyFilteredContactComponents = (filter: string) => {
	const hasFilter = !!filter;
	if (!hasFilter) {
		return netlifyCmsContent.contacts.map(mapContactsToComponent);
	}

	return netlifyCmsContent.contacts
		.filter(getFilterContactsFunction(filter))
		.sort(sortContactsAlphabeticallyByLastName)
		.map(mapContactsToComponent);
};
