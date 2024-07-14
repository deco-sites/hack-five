import { Pet } from "../../loaders/getPets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { OrangeBadge, PurpleBadge } from "./Badge.tsx";
import Modal from "./Modal.tsx";
import { useSection } from "deco/hooks/useSection.ts";

const PHONE_NUMBER = "(83) 4002-8922";

interface Props {
  pet?: Pet | null;
  isOpen: boolean;
}

const PetModal = ({ pet, isOpen }: Props) => {
  const phoneNumber = PHONE_NUMBER;

  return (
    <div id="pet-modal">
      <Modal isOpen={isOpen} id="target">
        <div class="bg-white self-center relative overflow-hidden rounded-md shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-purple-900 text-white text-center p-4">
            <h1 class="text-4xl">{`${pet?.name}, ${pet?.age}`}</h1>
            <button
              class="text-white absolute top-4 right-3 outline-none focus:outline-none"
              hx-put={useSection({ props: { isOpen: false } })}
              hx-target="#target"
            >
              <Icon id="x" size={40} />
            </button>
          </div>
          <div class="flex flex-col p-8 gap-6">
            <Image
              class="w-full"
              src={pet?.imageSrc || ""}
              height={100}
              width={100}
              preload={true}
            />
            <div class="flex gap-12">
              <div class="flex flex-col gap-2 items-center">
                <p class="font-bold">Também conhecido(a) por:</p>
                <div class="flex gap-1">
                  {pet?.akaList?.map((aka) => (
                    <OrangeBadge>{aka}</OrangeBadge>
                  ))}
                </div>
              </div>
              <div class="flex flex-col gap-2 items-center">
                <p class="font-bold">Geralmente encontrado em:</p>
                <PurpleBadge>{pet?.location}</PurpleBadge>
              </div>
            </div>
            <div class="flex flex-col gap-1 items-center">
              <p class="text-center font-bold text-black">
                Fale conosco para adoção
              </p>
              <OrangeBadge>
                <span class="flex gap-2">
                  <Icon id="phone" size={20} />
                  {phoneNumber}
                </span>
              </OrangeBadge>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PetModal;
