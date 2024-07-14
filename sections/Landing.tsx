import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
  image: ImageWidget;
}

export default function Section({ image }: Props) {
  return (
    <div class="flex justify-center pt-12 px-8 bg-primary">
      <Image class="w-full max-w-[700px] h-full max-h-[300px]" src={image} alt="Logo do UPets" />
    </div>
  );
}
