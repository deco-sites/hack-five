const LocationBadge = ({ text }: { text: string }) => (
    <span class="whitespace-nowrap inline-flex items-center rounded-3xl px-3.5 py-1.5 text-base font-bold text-[#9747FF] ring-2 ring-inset ring-[#9747FF]">
        {text}
    </span>
);

const AgeBadge = ({ text }: { text: string }) => (
    <span class="whitespace-nowrap inline-flex items-center rounded-3xl px-3.5 py-1.5 text-base font-bold text-[#FFA23B] ring-2 ring-inset ring-[#FFA23B]">
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
}

const PetCard = ({ name = 'Neninho', imageUrl = 'https://placehold.co/300x400', location = 'Benvenuto', age = '2 years' }: Props) => (
    <div class="flex w-full ml-4 mb-2 space-y-3.5 flex-col w-full p-5 rounded-lg border-2 shadow-[-4px_4px_0px_rgba(0,0,0)] border-black">
        <image class="w-full" src={imageUrl} />
        <p class="text-3xl font-bold">
            {name}
        </p>
        <div class="flex space-x-2">
          <LocationBadge text={location} />
          <AgeBadge text={age} />
        </div>
    </div>
);

export default PetCard;
