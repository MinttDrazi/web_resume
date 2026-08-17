import ContentBlock from "~/components/ContentBlock";
import Text from "~/components/Text";
import H1 from "~/components/typography/H1";
import H5 from "~/components/typography/H5";

export default function Introduction() {
  return (
    <ContentBlock
      innterClass="space-y-2 sm:space-y-3"
      outerClass="order-first sm:col-span-2"
    >
      <H1>{import.meta.env.VITE_FULL_NAME}</H1>
      <H5 color={"coral"}>Account manager & Operations manager</H5>
      <Text className="text-justify">
        Mám chuť neustále růst, vytvářet nové věci a učit se. Rychle se
        adaptuji, jsem samostatný a zvyklý pracovat v dynamickém prostředí – od
        natáčení pro Apple TV až po vedení projektů, týmů a agentury flowstate
        společně s jejím majitelem. Věnuji se i vlastní tvorbě v oblasti 3D
        tisku a práci s 3D softwarem. Hledám příležitost, kde mohu smysluplně
        přispívat, rozvíjet se a posouvat projekty, které mě baví.
      </Text>
    </ContentBlock>
  );
}
