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

export default function useEndOfPage(collbac: () => void, isEnd = false) {
  const [IsEndOfPage, setIsEndOfPage] = useState(false);
  useScrollEndOfPage(setIsEndOfPage);
  useEffect(() => {
    if (!isEnd && IsEndOfPage) collbac();
  }, [IsEndOfPage])
  console.log();

}