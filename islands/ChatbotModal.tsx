import Modal from './Modal.tsx';
import Icon from "site/components/ui/Icon.tsx";
import { useState } from 'preact/hooks';

interface Props {
    isOpen: boolean;
    setIsOpen: any;
}

const ChatbotButton = ({ handleClick }: { handleClick: any }) => (
    <button
        onClick={handleClick}
        class="bg-[#FFA23B] text-[#FFA23B] rounded-btn p-2 shadow-xl border-2 transition-all ease-in-out duration-500 border-transparent hover:border-black"
        aria-label="Abrir ChatBot"
    >
        <Icon id="ia" size={40} />
    </button>
);


const CHAT_HISTORY = [
    { by: 'chatbot', message: 'Olá, sou o bot do UPets que vai lhe ajudar no processo de encontrar o pet perfeito para ser seu novo amigo!' },
    { by: 'me', message: 'Oi! Eu queria adotar um gato doido doido.' },
    { by: 'chatbot', message: 'Rapaz, pois eu tenho uma ótima indicação: Neninho.' },
    { by: 'me', message: 'Um bicho feio desses, parece um rato...' },
    { by: 'chatbot', message: 'Não diga isso, ele é muito sensível.\n\nVai querer ou não?' },
];

const ChatbotModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [chatHistory, setChatHistory] = useState(CHAT_HISTORY);

    const [text, setText] = useState('');

    return (
        <>
            <ChatbotButton handleClick={() => setIsOpen(true)} />
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div class="fixed right-8 bottom-20 bg-white self-center overflow-hidden rounded-md shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-[#636FFF] text-white text-center p-4">
                        <h1 class="text-bold text-2xl">
                            ChatBot UPets
                        </h1>
                        <button aria-label="Fechar modal" class="text-white absolute top-4 right-3 outline-none focus:outline-none" onClick={() => setIsOpen(false)}>
                            <Icon id="x" size={40} />
                        </button>
                    </div>
                    <div class="flex flex-col p-6 gap-4">
                        <div class="h-[20rem] flex flex-col gap-2 overflow-y-scroll">
                            {chatHistory.map(({ by, message }) => by === 'chatbot' ? 
                            <div class="bg-[#ebecff] p-2 w-full grid grid-cols-[40px_1fr] flex-col gap-2 items-center">
                                <Icon id="ia" size={40} />
                                <span>
                                    {message}
                                </span>
                            </div>
                            : 
                            <div class="bg-[#fff3e5] p-2 w-full grid grid-cols-[1fr_40px] flex-col gap-2 items-center">
                                <span>
                                    {message}
                                </span>
                                <Icon id="user" size={40} />
                            </div>
                        )}
                        </div>
                        <div class="h-[4rem] border p-2 focus-within:outline">
                            <textarea value={text} onChange={(e) => setText(e.target.value)} class="h-full w-full focus:outline-none resize-none" />
                        </div>
                        <div class="flex flex-col items-end w-full">
                            <button class="bg-[#636FFF] text-white font-bold px-6 py-2" onClick={
                                () => { 
                                    if (text.trim().length === 0) return;

                                    setChatHistory([...chatHistory, { by: 'me', message: text }]);
                                    setText('');
                                }
                            }>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ChatbotModal;
