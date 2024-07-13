import PetCard from '../components/ui/PetCard.tsx';
import InfiniteHorizontalScroller from '../islands/InfiniteHorizontalScroller.tsx';
import Icon from '../components/ui/Icon.tsx';

interface Props {
  title?: string;
}

// MOCKS

const gatos = [...Array(8).keys()].map(i => ({ nome: 'Neno', imageSrc: `cat${i + 1}.webp` }));
const cachorros = [...Array(8).keys()].map(i => ({ nome: 'Spike', imageSrc: `dog${i + 1}.webp` }));

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const animais = shuffleArray([...gatos, ...cachorros]);

export default function PetsCarousel({ title = "Nossos queridos" }: Props) {
  return (
    <div class="flex flex-col py-20 gap-20">
      <h1 class="text-center font-bold text-6xl">
        {title}
      </h1>
      <InfiniteHorizontalScroller children={animais.map(({ nome, imageSrc }) => <PetCard key={nome} name={nome} imageUrl={imageSrc} />)} />
      <Icon
        class="hidden md:block absolute right-0 translate-x-[0] group-hover:translate-x-[0] transition duration-300 ease-in-out"
        id="white-cat-outline"
        height={121}
        width={98}
      />
    </div>
  );
}
