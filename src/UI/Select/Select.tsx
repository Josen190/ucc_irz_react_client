import React, { SetStateAction } from 'react'
import "./Select.scss";

type typeValue = number | string | boolean | undefined;

interface Props<T extends typeValue> {
    children: React.ReactElement<typeof Option> | React.ReactElement<typeof Option>[];
    setValue: React.Dispatch<SetStateAction<T>>;
}

function parser<T>(value: string): T {
    if (Number(value))
        return Number(value) as T;

    switch (value) {
        case 'undefined':
            return undefined as T;
        case 'true':
            return true as T;
        case 'false':
            return false as T;
        default:
            return value as T;
    }
}


function Select<T extends typeValue>({ children: optios, setValue }: Props<T>) {
    return (
        <select
            onChange={(e) => {
                setValue(parser<T>(e.target.value));
            }}
            className="select"
        >
            {optios}
        </select>
    )
}

export default Select