import { Link } from "react-router";
import Text from "./Text";
import Nav from "./Nav";
import LocaleSwitcher from "./LocaleSwitcher";
import useI18n from "~/i18n/useI18n";

export default function Header() {
  const { lang } = useI18n();
  return (
    <header className="mb-12 flex gap-10 w-full justify-between sm:justify-start">
      <Link
        to={`/${lang}`}
        className="hidden sm:flex items-center gap-0.5 print:hidden"
      >
        <img src="/web_resume/icon.svg" className="size-6" />
        <Text size={"xl"} className="font-bold tracking-wider">
          MD
        </Text>
      </Link>
      <Nav />
      <LocaleSwitcher />
    </header>
  );
}
