import ContentBlock from "~/components/ContentBlock";
import Text from "~/components/Text";
import H1 from "~/components/typography/H1";
import H5 from "~/components/typography/H5";

export default function Introduction() {
  return (
    <ContentBlock innterClass="space-y-2">
      <H1>{import.meta.env.VITE_FULL_NAME}</H1>
      <H5 color={"coral"}>Full-stack Developer & Tech lead</H5>
      <Text className="text-justify">
        Jsem fullstack developer se 6 lety zkušeností v IT. Soustředím se na
        kompletní vývoj moderních webů a webových aplikací. Baví mě jak
        implementace UI/UX, tak psaní backendu. Rád se učím nové věci a zkouším
        nové postupy a technologie. V současnosti dokončuji magisterské studium
        oboru Vývoj informačních systémů na VŠE.
      </Text>
    </ContentBlock>
  );
}
