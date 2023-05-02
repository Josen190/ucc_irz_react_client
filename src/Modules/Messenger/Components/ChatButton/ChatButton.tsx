import Image from 'Helpers/Image'
import Chat from '../../Helper/Chat'
import Button from 'UI/Button/Button'
import Img from 'UI/Img/Img'
import React from 'react'

interface Props {
    chat: Chat
    select: React.Dispatch<React.SetStateAction<Chat | null>>
}

function ChatButton({ chat, select }: Props) {
    return (
        <Button type="link" color="mini" href={`chat/${chat.id}`} onClick={() => select(chat)}>
            <Img image={chat.recipient.image ?? new Image()}></Img>
            <div>
                <span>{chat.recipient.getFullName()}</span>
                <div>
                    <p>{chat.lastMessage.text}</p>
                    <span>{chat.unreadedCount}</span>
                </div>
            </div>
        </Button>
    )
}

export default ChatButton