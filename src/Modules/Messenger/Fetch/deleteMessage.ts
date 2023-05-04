import fetch from "Fetch/Fetch";

async function deleteMessage(messageId: string) {
    return fetch.sendHub('DeleteMessageAsync', { messageId })
}
export default deleteMessage;