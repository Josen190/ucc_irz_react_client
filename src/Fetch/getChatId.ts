async function getChatId(participantId: string) {
    return await fetch.get(url_get_chats_by_participant, { params: {
            participantId
        }}).then(response => response.data as string);
}