import Modal from './Modal.tsx';
import { useState } from 'preact/hooks';
import { Pet } from "site/loaders/getPets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    pet: Pet
}

const PetModal = ({ pet }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const name = pet.name;
    const imageUrl = 'https://placehold.co/600x400';
    const location = 'Benvenuto';
    const akaList = ['Cafuringo', 'Motoneno'];

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                Abrir modal
            </button>
            
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div class="bg-white self-center relative overflow-hidden rounded-md shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-purple-900 text-white text-center p-4">
                        <h1 class="text-4xl">{name}</h1>
                    </div>
                    <div class="flex flex-col p-8 gap-6">
                        <Image class="w-full" src={imageUrl} />
                        <div class="flex gap-12">
                            <div>
                                <p class="font-bold">Também conhecido(a) por:</p>
                                {akaList.map(nm => <p>{nm}</p>)}
                            </div>
                            <div>
                                <p class="font-bold">Geralmente encontrado em:</p>
                                {location}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default PetModal;
