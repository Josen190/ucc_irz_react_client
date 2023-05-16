import React, { useEffect } from "react";

function useDeleteNewsFromFeed(
  key: string | null,
  array: JSX.Element[],
  setArray: React.Dispatch<React.SetStateAction<JSX.Element[]>>
) {
  useEffect(() => {
    if (!key) return;
    
    setArray(array.filter((element) => {
      return element.key !== key;
    }));
  }, [key]);
}
export default useDeleteNewsFromFeed;

