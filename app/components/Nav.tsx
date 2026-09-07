import { NavLink } from "react-router";

const NAV_LINKS = [
  {
    link: "/",
    text: "Životopis",
  },
  {
    link: "/porfolio",
    text: "Porfolio",
  },
];

export default function Nav() {
  return (
    <nav className="w-fit flex flex-row gap-x-6 gap-y-2 bg-blush/60 py-2 px-4 rounded-lg print:hidden">
      {NAV_LINKS.map((l) => (
        <NavLink
          key={l.link}
          to={l.link}
          className={({ isActive, isPending }) =>
            [
              "text-sm sm:text-base",
              isActive
                ? "font-bold text-burnt-peach"
                : "text-navy hover:underline",
              isPending && "opacity-50",
            ].join(" ")
          }
        >
          {l.text}
        </NavLink>
      ))}
    </nav>
  );
}
