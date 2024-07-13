import PetCard from "../components/ui/PetCard.tsx";
import InfiniteHorizontalScroller from "../islands/InfiniteHorizontalScroller.tsx";
import Icon from "../components/ui/Icon.tsx";
import { Pet } from "site/loaders/getPets.ts";
import PetModal from "../islands/PetModal.tsx";

interface Props {
  title?: string;
  pets?: Pet[] | null;
}

export default function PetsCarousel({
  title = "Nossos queridos",
  pets,
}: Props) {
  return (
    <div class="group overflow-hidden flex flex-col py-12 gap-8">
      <PetModal pet={pets[0]} />
      <h1 class="text-center font-bold text-4xl">{title}</h1>
      <InfiniteHorizontalScroller
        children={pets?.map(({ name, imageSrc }) => (
          <PetCard key={name} name={name} imageUrl={imageSrc} />
        ))}
      />
      <Icon
        class="hidden md:block absolute right-0"
        id="white-cat-outline"
        height={50}
        width={50}
      />
    </div>
  );
}
