import type { ImageWidget } from "apps/admin/widgets.ts";
import { VideoWidget } from "apps/admin/widgets.ts";

export interface Props {
  background: ImageWidget;
  video: VideoWidget;
}
  
export default function Video({ video, background }: Props) {
  return (
    <div class="flex items-center justify-center bg-contain bg-no-repeat bg-center h-screen bg-[#636FFF]" style={{ backgroundImage: `url(${background})` }}>
        <div class="flex rotate-[-1deg] pt-32 size-8/12 justify-center">
          <video class="h-full" controls>
            <source src={video}></source>
          </video>
        </div>
    </div>
);
}