import Button from 'UI/Button/Button'
import React from 'react'

interface Props {
    chat: string
}

function ChatButton({ chat }: Props) {
    return (
        <Button type="link" color="mini">
            {chat}
        </Button>
    )
}

export default ChatButton