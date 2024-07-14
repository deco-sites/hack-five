import { useSection } from "deco/hooks/useSection.ts";
import { Pet } from "site/loaders/getPets.ts";
import PetCard from "site/components/ui/PetCard.tsx";
import PetModal from "site/components/ui/PetModal.tsx";

export interface Props {
  title?: string;
  pets?: Pet[] | null;
  pet?: Pet;
  isOpen?: boolean;
}

export default function PetsList({ title, pets, pet, isOpen = false }: Props) {
  return (
    <div id="target" class="flex flex-col w-full gap-4 justify-center px-4 py-8 gap-8 items-center">
      <PetModal pet={pet} isOpen={isOpen} />
      <h1 class="font-bold text-center text-3xl">{title}</h1>
      <div class="max-w-[1400px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pets?.map((pet) => (
          <button
            hx-put={useSection({ props: { pet: pet, isOpen: true } })}
            hx-target="#target"
          >
            <PetCard pet={pet} />
          </button>
        ))}
      </div>
    </div>
  );
}
