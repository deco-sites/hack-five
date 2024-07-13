import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  rights: string;
  image: ImageWidget;
}

export default function Footer({ rights, image }: Props) {
  return (
    <div class="flex items-center justify-between bg-success px-8 py-6 text-white">
      <p>{rights}</p>

      <Image src={image} alt={image} width={80} height={20} />
    </div>
  );
}
