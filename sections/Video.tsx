import type { ImageWidget } from "apps/admin/widgets.ts";
import { VideoWidget } from "apps/admin/widgets.ts";

export interface Props {
  background: ImageWidget;
  video: VideoWidget;
}
  
export default function Video({ video, background }: Props) {
  return (
    <div class="flex justify-center bg-contain bg-no-repeat bg-center h-screen" style={{ backgroundImage: `url(${background})` }}>
        <video class="w-full max-w-64" controls>
          <source src={video}></source>
        </video>
    </div>
);
}