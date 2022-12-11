import netlifyCmsContent from "../assets/netlify-cms-content.json";
import { Contact } from "../components/Contact";

type Contacts = typeof netlifyCmsContent.contacts;
type Contact = Contacts[number];

const getFilterContactsFunction = (filter: string) => (contact: Contact) =>
	Object.entries(contact).some(
		([, value]) =>
			value && (value as string).toLowerCase().includes(filter.toLowerCase())
	);

const sortContacts = (sourceContact: Contact, targetContact: Contact) => {
	const sourceLastName = sourceContact.lastName.toLowerCase();
	const targetLastName = targetContact.lastName.toLowerCase();

	if (sourceLastName < targetLastName) {
		return -1;
	}

	if (sourceLastName > targetLastName) {
		return 1;
	}

	return 0;
};

const mapContacts = (contact: typeof netlifyCmsContent.contacts[number]) => (
	<Contact {...contact} />
);

export const getAlphabeticallyFilteredContacts = (filter: string) => {
	const hasFilter = !!filter;
	if (!hasFilter) {
		return netlifyCmsContent.contacts.map(mapContacts);
	}

	return netlifyCmsContent.contacts
		.filter(getFilterContactsFunction(filter))
		.sort(sortContacts)
		.map(mapContacts);
};
