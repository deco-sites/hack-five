import Icon from "../components/ui/Icon.tsx";
import { Pet } from "site/loaders/getPets.ts";
import PetsCarouselContainer from "site/components/ui/PetsCarouselContainer.tsx";
import PetModal from "site/components/ui/PetModal.tsx";

interface Props {
  title?: string;
  pets?: Pet[] | null;
  pet?: Pet;
  isOpen?: boolean;
}

export default function PetsCarousel({
  title = "Nossos queridos",
  pets,
  pet,
  isOpen = false,
}: Props) {
  return (
    <div id="target" class="group overflow-hidden flex flex-col items-center py-12 gap-8">
      <PetModal pet={pet} isOpen={isOpen} />
      <h1 class="text-center font-bold text-4xl">{title}</h1>
      <PetsCarouselContainer pets={pets ?? []} />
      <div class="flex gap-3 items-center">
        <a
          id="more_pets"
          href="/pets"
          class="rounded-lg font-bold text-lg btn btn-primary"
        >
          Ver todos os pets
        </a>
      </div>
      <Icon
        class="hidden md:block absolute right-0"
        id="white-cat-outline"
        height={50}
        width={50}
      />
    </div>
  );
}
