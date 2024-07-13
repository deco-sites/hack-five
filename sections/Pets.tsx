import PetCard from "../components/ui/PetCard.tsx";
import { Pet } from "site/loaders/getPets.ts";

export interface Props {
  title?: string;
  pets?: Pet[] | null;
}

export default function PetsList({ title, pets }: Props) {
    return (
        <div class="flex flex-col w-full gap-4 justify-center px-4 py-8 gap-8">
            <h1 class="font-bold text-center text-3xl">{title}</h1>
            <div class="max-w-[1400px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pets?.map(({ name, imageSrc }) => <PetCard key={name} showContact={true} name={name} imageUrl={imageSrc} />)}
            </div>
        </div>
    )

}

