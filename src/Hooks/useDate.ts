import MyDate from "Helpers/MyDate";
import { useState } from "react";

function useDate(value?: MyDate) {
    return useState<MyDate | undefined>(value);
}
export default useDate;