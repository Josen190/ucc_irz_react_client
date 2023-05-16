import Image from 'Helpers/Image'
import Chat from '../../Helper/Chat'
import Button from 'UI/Button/Button'
import React from 'react'
import Avatar from 'Components/Avatar/Avatar'
import "./ChatButton.scss"

interface Props {
    chat: Chat
    select: React.Dispatch<React.SetStateAction<Chat | null>>
}

function ChatButton({ chat, select }: Props) {
    return (
        <Button type="link" color="mini" href={`chat/${chat.id}`} onClick={() => select(chat)}>
            <div className="chat-button">
                <Avatar type='mini' image={chat.recipient.image ?? new Image()}></Avatar>
                <div className="info">
                    <span>{chat.recipient.getFullName()}</span>
                    <div className="last-message">
                        <p>{chat.lastMessage?.text}</p>
                        <span>{chat.unreadedCount}</span>
                    </div>
                </div>
            </div>
        </Button>
    )
}

export default ChatButton