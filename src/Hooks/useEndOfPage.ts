import { useEffect, useState } from "react";
import { useScroll } from "react-ui-animate";


function useScrollEndOfPage(setIsEndOfPage: React.Dispatch<React.SetStateAction<boolean>>) {
  const fullHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  useScroll(({ scrollY }) => {
    const scrolledToBottom = Math.ceil(scrollY + windowHeight) >= fullHeight;
    if (scrolledToBottom)
      setIsEndOfPage(scrolledToBottom);
  });
}
export default useScrollEndOfPage;

export function useEndOfPage(collbac: () => void) {
  const [IsEndOfPage, setIsEndOfPage] = useState(false);
  useScrollEndOfPage(setIsEndOfPage);
  useEffect(() => {
    if (IsEndOfPage) collbac();
  }, [IsEndOfPage])
  console.log();

}