import ContentBlock from "~/components/ContentBlock";
import Text from "~/components/Text";
import H1 from "~/components/typography/H1";
import H5 from "~/components/typography/H5";

export default function Introduction() {
  return (
    <ContentBlock
      innterClass="space-y-2"
      outerClass="order-first sm:col-span-2"
    >
      <H1>{import.meta.env.VITE_FULL_NAME}</H1>
      <H5 color={"coral"}>Web developer & Tech lead</H5>
      <Text className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan
        tincidunt massa, vitae cursus odio egestas ac. Ut venenatis purus vitae
        congue tempus. Vestibulum at dictum eros. Cras sodales interdum urna,
        vel lacinia leo maximus eu. Aenean a odio mollis lectus aliquet laoreet
        vel et justo. Vivamus nec blandit nunc. Nunc a diam euismod, posuere
        neque vel, vehicula purus.
      </Text>
    </ContentBlock>
  );
}
