import Image from "apps/website/components/Image.tsx";
import { PurpleBadge, OrangeBadge } from "./Badge.tsx";
import { Pet } from "site/loaders/getPets.ts";

interface Props {
  handleClick: any;
  pet?: Pet;
}

const PetCard = ({
  pet,
  handleClick,
}: Props) => (
  <div 
    onClick={handleClick}
    class="cursor-pointer flex max-w-[350px] w-full mb-2 space-y-3.5 flex-col w-full p-5 rounded-lg border-2 shadow-[-4px_4px_0px_rgba(0,0,0)] border-black"
  >
    <Image
      class="w-full"
      preload={true}
      src={pet.imageSrc}
      width={100}
      height={100}
    />
    <p class="text-2xl font-bold">{pet.name}</p>
    <div class="flex space-x-2">
      <PurpleBadge>{pet.location}</PurpleBadge>
      <OrangeBadge>{pet.age}</OrangeBadge>
    </div>
  </div>
);

export default PetCard;
