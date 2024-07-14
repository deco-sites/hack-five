import { VideoWidget } from "apps/admin/widgets.ts";

export interface Props {
  video: VideoWidget;
}
  
export default function Video({ video }: Props) {
  return (
    <div class="flex items-center justify-center bg-contain bg-no-repeat bg-center h-screen bg-[#636FFF]">
        <div class="flex w-full max-w-[700px] rotate-[-1deg] justify-center bg-black rounded-xl"> 
          <div class="flex w-full max-w-[700px] justify-center pb-3 pl-3">
            <video class="w-full h-full rounded-xl border border-black" controls>
              <source src={video}></source>
            </video>
          </div>
        </div>
    </div>
  );
}