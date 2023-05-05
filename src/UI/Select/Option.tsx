import React from 'react'

interface Props {
    children: string;
    value: number | string | boolean | undefined;
}

function Option({ children: messge, value }: Props) {
    return (
        <option value={typeof value === 'undefined' ? 'undefined' : value as string}>{messge}</option>
    )
}

export default Option