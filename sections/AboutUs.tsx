import Icon from "site/components/ui/Icon.tsx";

interface Props {
  /**
   * @description The description of name.
   */
  title: string;
  /**
   * @format rich-text
   */
  text: string;
}

export default function Section({ title, text }: Props) {
  return (
    <div class="group overflow-hidden relative flex justify-center bg-warning">
      <div class="flex flex-col gap-4 max-w-[1400px] px-4 py-8">
        <h2 class="text-2xl text-center md:text-left font-bold">{title}</h2>
        <div
          class="text-justify"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
      </div>
      <Icon
        class="hidden md:block absolute translate-y-[-16px] group-hover:translate-y-0 top-0 right-0 transition duration-300 ease-in-out"
        id="glasses-cat"
        height={40}
        width={116}
      />
    </div>
  );
}
