import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

const LocationBadge = ({ text }: { text: string }) => (
  <span class="whitespace-nowrap inline-flex items-center rounded-3xl px-3.5 py-1.5 text-sm font-bold text-[#9747FF] ring-2 ring-inset ring-[#9747FF]">
    {text}
  </span>
);

const AgeBadge = ({ text }: { text: string }) => (
  <span class="whitespace-nowrap inline-flex items-center rounded-3xl px-3.5 py-1.5 text-sm font-bold text-[#FFA23B] ring-2 ring-inset ring-[#FFA23B]">
    {text}
  </span>
);

interface Props {
  name?: string;
  species?: string;
  breed?: string;
  sex?: string;
  size?: string;
  color?: string;
  age?: string;
  location?: string;
  imageUrl?: string;
  showContact?: boolean;
}

const PetCard = ({
  name = "Neninho",
  imageUrl = "https://placehold.co/300x400",
  location = "Benvenuto",
  age = "2 years",
  showContact = false,
}: Props) => (
  <div class="flex max-w-[350px] w-full mb-2 space-y-3.5 flex-col w-full p-5 rounded-lg border-2 shadow-[-4px_4px_0px_rgba(0,0,0)] border-black">
    <Image class="w-full" src={imageUrl} width={100} height={100} />
    <p class="text-2xl font-bold">{name}</p>
    <div class="flex space-x-2">
      <LocationBadge text={location} />
      <AgeBadge text={age} />
    </div>
    {showContact && (
      <div class="flex flex-col gap-1">
        <p class="text-center font-bold text-black">Fale conosco para adoção</p>
        <a class="flex items-center gap-2 w-full justify-center text-primary">
          <Icon id="phone" size={20} />
          <span>(83) 4002-8922</span>
        </a>
      </div>
    )}
  </div>
);

export default PetCard;
