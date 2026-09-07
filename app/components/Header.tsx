import { Link } from "react-router";
import Text from "./Text";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="mb-12 flex gap-10 w-full justify-between lg:justify-start">
      <Link to="/" className="flex items-center gap-0.5 print:hidden">
        <img src="/web_resume/icon.svg" className="size-6" />
        <Text size={"xl"} className="font-bold tracking-wider">
          MD
        </Text>
      </Link>
      <Nav />
    </header>
  );
}
