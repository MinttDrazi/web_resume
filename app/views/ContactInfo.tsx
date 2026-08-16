import ContactInfoRow from "~/components/ContactInfoRow";
import ContentBlock from "~/components/ContentBlock";
import { CONTACT_INFO } from "~/constants/contacts";

export default function ContactInfo() {
  return (
    <ContentBlock
      title="Kontakty"
      outerClass="order-1 lg:order-none"
      innterClass="grid grid-cols-[auto_1fr] gap-x-10 gap-y-2"
    >
      {CONTACT_INFO.map((contact) => (
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
