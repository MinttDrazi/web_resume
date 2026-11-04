import ContentBlock from "~/components/ContentBlock";

export default function Photo() {
  return (
    <ContentBlock>
      <img
        src="photo.jpg"
        alt="Martin Ditz"

        width={472}
        height={529}
        className="rounded-xl"
      />
    </ContentBlock>
  );
}
