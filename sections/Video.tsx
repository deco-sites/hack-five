import type { ImageWidget } from "apps/admin/widgets.ts";
import { VideoWidget } from "apps/admin/widgets.ts";

export interface Props {
  title?: string;
  doodle: ImageWidget;
  video: VideoWidget;
}
  
export default function Video({ title, video, doodle }: Props) {
  return (
    <div class="flex flex-col items-center justify-center bg-contain bg-no-repeat bg-center h-screen bg-[#636FFF]">
        <div class="flex items-center flex-grow">
          <p class="font-bold text-4xl text-white">{title}</p>
        </div>
        

        <div class="flex w-full max-w-[700px] rotate-[-1deg] justify-center bg-black rounded-xl"> 
          <div class="flex w-full max-w-[700px] justify-center pb-3 pl-3">
            <video class="w-full h-full rounded-xl border border-black" controls>
              <source src={video}></source>
            </video>
          </div>
        </div>

        <div class="flex flex-grow w-full items-end">
          <img src={doodle} alt="kitten doodle" class="object-contain max-w-[300px]"/>
        </div>
    </div>
  );
}