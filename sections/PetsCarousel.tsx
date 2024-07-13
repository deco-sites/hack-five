import PetCard from '../components/ui/PetCard.tsx';
import InfiniteHorizontalScroller from '../islands/InfiniteHorizontalScroller.tsx';

interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function PetsCarousel({ name = "Capy" }: Props) {
  const nomes = ['Neninho 1', 'Neninho 2', 'Neninho 3', 'Neninho 4', 'Neninho 5', 'Neninho 6'];

  return (
    <InfiniteHorizontalScroller children={nomes.map(nome => <PetCard key={nome} name={nome} />)} />
  );
}
