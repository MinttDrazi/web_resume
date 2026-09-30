import ContentBlock from "~/components/ContentBlock";
import Text from "~/components/Text";
import H1 from "~/components/typography/H1";
import H5 from "~/components/typography/H5";
import useI18n from "~/i18n/useI18n";

export default function Introduction() {
  const { t } = useI18n();
  return (
    <ContentBlock innterClass="space-y-2">
      <H1>{import.meta.env.VITE_FULL_NAME}</H1>
      <H5 color={"coral"}>{t.intro.role}</H5>
      <Text className="text-justify">{t.intro.bio}</Text>
    </ContentBlock>
  );
}
