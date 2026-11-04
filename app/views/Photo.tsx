import ContentBlock from "~/components/ContentBlock";

export default function Photo() {
  return (
    <ContentBlock>
      <img
        src="photo.jpg"
        alt={import.meta.env.VITE_FULL_NAME}

        width={472}
        height={529}
        className="rounded-xl"
      />
    </ContentBlock>
  );
}
