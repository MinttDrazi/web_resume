import { NavLink } from "react-router";
import useI18n from "~/i18n/useI18n";

export default function Nav() {
  const { lang, t } = useI18n();

  const NAV_LINKS = [
    {
      link: `/${lang}`,
      text: t.nav.resume,
      end: true,
    },
    {
      link: `/${lang}/portfolio`,
      text: t.nav.portfolio,
    },
  ];

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
          end={l.end}
        >
          {l.text}
        </NavLink>
      ))}
    </nav>
  );
}
