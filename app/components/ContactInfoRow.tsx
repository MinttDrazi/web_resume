import Text from "./Text";
import OuterLink from "./typography/TextLink";

interface ContactInfoRowProps {
  title: string;
  text: string;
  link?: string;
}

export default function ContactInfoRow({
  title,
  text,
  link,
}: ContactInfoRowProps) {
  return (
    <>
      <Text>{title}</Text>
      {link ? <OuterLink link={link}>{text}</OuterLink> : <Text>{text}</Text>}
    </>
  );
}
