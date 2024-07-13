import PetCard from "../components/ui/PetCard.tsx";
import InfiniteHorizontalScroller from "../islands/InfiniteHorizontalScroller.tsx";
import Icon from "../components/ui/Icon.tsx";
import { Pet } from "site/loaders/getPets.ts";

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
      <h1 class="text-center font-bold text-4xl">{title}</h1>
      <InfiniteHorizontalScroller
        children={pets?.map(({ name, imageSrc }) => (
          <PetCard key={name} name={name} imageUrl={imageSrc} />
        ))}
      />
      <Icon
        class="hidden md:block absolute right-0 translate-x-[20px] group-hover:translate-x-[0] transition duration-300 ease-in-out"
        id="white-cat-outline"
        height={50}
        width={50}
      />
    </div>
  );
}
