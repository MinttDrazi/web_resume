import ContactInfoRow from "~/components/ContactInfoRow";
import ContentBlock from "~/components/ContentBlock";
import { getContactInfo } from "~/constants/contacts";

import useI18n from "~/i18n/useI18n";

export default function Contact() {
  const { t } = useI18n();
  const contacts = getContactInfo(t);
  return (
    <ContentBlock
      title={t.sections.contacts}
      innterClass="grid grid-cols-[auto_1fr] gap-x-10 gap-y-2"
    >
      {contacts.map((contact) => (
        <ContactInfoRow
          key={contact.title}
          title={contact.title}
          text={contact.text}
          link={contact.link}
        />
      ))}
    </ContentBlock>
  );
}
