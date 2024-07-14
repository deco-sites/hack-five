import PetCard from "../components/ui/PetCard.tsx";
import InfiniteHorizontalScroller from "../islands/InfiniteHorizontalScroller.tsx";
import { Pet } from "site/loaders/getPets.ts";
import PetModal from "../islands/PetModal.tsx";
import { useState } from 'preact/hooks';

interface Props {
  pets?: Pet[] | null;
}

export default function PetsCarouselContainer({
  pets,
}: Props) {
  const [pet, setPet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  return (
    <>
      <PetModal pet={pet} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <InfiniteHorizontalScroller
        children={pets?.map((pet) => (
          <PetCard pet={pet} handleClick={() => {
            setPet(pet);
            setIsModalOpen(true);
          }} />
        ))}
      />
    </>
  );
}
