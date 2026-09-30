import { supportedLang } from "~/i18n";
import useI18n from "~/i18n/useI18n";
import { cn } from "~/utils/cn";
import { Fragment } from "react";

export default function LocaleSwitcher() {
  const { lang, t, setLang } = useI18n();

  return (
    <div className="flex items-center px-4 py-2 gap-1 rounded-lg bg-blush/60 print:hidden">
      {supportedLang.map((l, index) => (
        <Fragment key={l}>
          <button
            type="button"
            onClick={() => setLang(l)}
            aria-current={lang === l ? true : undefined}
            className={cn(
              "text-sm sm:text-base",
              lang === l
                ? "text-burnt-peach font-bold"
                : "text-navy/60 hover:text-navy cursor-pointer",
            )}
          >
            {t.locale[l]}
          </button>
          {index < supportedLang.length - 1 && (
            <span className="text-navy">|</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
