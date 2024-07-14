import type { ImageWidget } from "apps/admin/widgets.ts";
import { VideoWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  title?: string;
  video: VideoWidget;
}
  
export default function Video({ title, video }: Props) {
  return (
    <div class="group relative flex flex-col gap-8 overflow-hidden items-center justify-center bg-contain bg-no-repeat bg-center py-16 px-4 bg-secondary">
        <div class="flex items-center">
          <p class="font-bold text-4xl text-white">{title}</p>
        </div>

        <div class="flex w-full max-w-[700px] rotate-[-1deg] justify-center bg-black rounded-xl"> 
          <div class="flex w-full max-w-[700px] justify-center pb-3 pl-3">
            <video class="w-full h-full rounded-xl border border-black" controls>
              <source src={video}></source>
            </video>
          </div>
        </div>

        <Icon
        class="hidden md:block absolute rotate-180 translate-y-[16px] group-hover:translate-y-0 bottom-0 left-0 transition duration-300 ease-in-out"
        id="glasses-cat"
        height={40}
        width={116}
      />
    </div>
  );
}