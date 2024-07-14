import PetCard from "./PetCard.tsx";
import { Pet } from "site/loaders/getPets.ts";
import { useSection } from "deco/hooks/useSection.ts";

interface Props {
  pets?: Pet[] | null;
  pet?: Pet;
  isOpen?: boolean;
}

export default function PetsCarouselContainer({
  pets,
}: Props) {
  return (
    <div>
      <div>
        <div class="flex gap-4 justify-start translateX-[150rem] animate-slide hover:[animation-play-state:paused]">
          {pets?.concat(pets)?.map((pet) => (
            <button
              hx-put={useSection({ props: { pet: pet, isOpen: true } })}
              hx-target="#target"
            >
              <PetCard pet={pet} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
