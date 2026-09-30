import { useLocation, useNavigate, useParams } from "react-router";
import type { SupportedLang } from "~/types";
import { DEFAULT_LANG, supportedLang } from ".";
import { translations, type Translations } from "./translations";

export default function useI18n() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const lang =
    supportedLang.find((lang) => lang === params.lang) || DEFAULT_LANG;
  const t: Translations = translations[lang];

  const setLang = (nextLang: SupportedLang) => {
    if (lang === nextLang) return;

    const segments = location.pathname.split("/").filter(Boolean);

    if (supportedLang.find((lang) => lang === segments[0])) {
      segments[0] = nextLang;
    } else {
      segments.unshift(nextLang);
    }

    const nextPath = `/${segments.join("/")}${location.search}${location.hash}`;
    navigate(nextPath);
  };

  return {
    lang,
    t,
    setLang,
  };
}
