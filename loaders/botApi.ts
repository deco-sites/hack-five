
export interface Props {
    message: string;
    history: string[];
  }
  
export interface ChatResponse {
    response: string;
}

const apiUrl = 'https://upets-bot-066075312411.herokuapp.com/chat';

async function loader(
    { message, history }: Props,
    _req: Request,
) {
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: message,
            history: history,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json() as ChatResponse;
    return { response: data.response };
}
  
export default loader;