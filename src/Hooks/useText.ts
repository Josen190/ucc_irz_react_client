import { useState } from "react";

function useText(value?: string) {
    return useState<string | undefined>(value);
}
export default useText;