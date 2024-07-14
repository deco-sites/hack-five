    import Modal from './Modal.tsx';
    import Icon from "site/components/ui/Icon.tsx";
    import { useState } from 'preact/hooks';
    import type { ChatResponse } from "../loaders/botApi.ts";
    import loader from "../loaders/botApi.ts";


    interface Props {
        isOpen: boolean;
        setIsOpen: any;
        ChatResponse?: ChatResponse;
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
    { by: 'Assistente UPets:', message: 'Assistente UPets: Olá! Tudo bem? Fico feliz em saber que está procurando um novo coleguinha para adotar. Posso te ajudar sobre as políticas do nosso site ou na escolha de um novo Pet. No que posso ajudar?' },
    ];

const ChatbotModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [chatHistory, setChatHistory] = useState(CHAT_HISTORY);

    const [text, setText] = useState('');

    const removePrefix = (message: string) => {
        const prefix = "Assistente UPets: ";
        if (message.startsWith(prefix)) {
            return message.slice(prefix.length);
        }
        return message;
    };

    const handleSendMessage = async () => {
        if (text.trim().length === 0) return;

        const newMessage = { by: 'Tutor:', message: text };
        setChatHistory([...chatHistory, newMessage]);
        
        setText('');
        const response = await loader({
            message: text,
            history: chatHistory.map(entry => `${entry.by}: ${entry.message}`),
        });

        const cleanedResponse = removePrefix(response.response);

        setChatHistory([...chatHistory, newMessage, { by: 'Assistente UPets', message: cleanedResponse }]);
    };

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
                            {chatHistory.map(({ by, message }) => by === 'Assistente UPets:' ? 
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
                            <button class="bg-[#636FFF] text-white font-bold px-6 py-2" onClick={handleSendMessage}>
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
