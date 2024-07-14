import Image from "apps/website/components/Image.tsx";
import { PurpleBadge, OrangeBadge } from "./Badge.tsx";
import { Pet } from "site/loaders/getPets.ts";

interface Props {
  pet?: Pet;
}

const PetCard = ({
  pet,
}: Props) => (
  <div 
    class="cursor-pointer flex max-w-[350px] w-full mb-2 space-y-3.5 flex-col w-full p-5 rounded-lg border-2 shadow-[-4px_4px_0px_rgba(0,0,0)] border-black hover:scale-105 transition duration-300 ease-in-out"
  >
    <Image
      class="w-full h-full min-w-[200px]"
      preload={true}
      loading={"eager"}
      src={pet?.imageSrc || ""}
      width={100}
      height={100}
    />
    <p class="text-2xl font-bold">{pet?.name}</p>
    <div class="flex space-x-2">
      <PurpleBadge>{pet?.location}</PurpleBadge>
      <OrangeBadge>{pet?.age}</OrangeBadge>
    </div>
  </div>
);

export default PetCard;
