import PetsCardDeck from "../islands/PetsCardDeck.tsx";
import { Pet } from "site/loaders/getPets.ts";

export interface Props {
  title?: string;
  pets?: Pet[] | null;
}

export default function PetsList({ title, pets }: Props) {
    return (
        <div class="flex flex-col w-full gap-4 justify-center px-4 py-8 gap-8 items-center">
            <h1 class="font-bold text-center text-3xl">{title}</h1>
            <PetsCardDeck pets={pets} />
        </div>
    )
}
