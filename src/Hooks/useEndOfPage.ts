import { useEffect, useState } from "react";
import { useScroll } from "react-ui-animate";

function useScrollEndOfPage(setIsEndOfPage: React.Dispatch<React.SetStateAction<boolean>>, componentRef?: React.RefObject<HTMLElement>) {
  const fullHeight = componentRef?.current?.scrollHeight || document.documentElement.scrollHeight;
  const windowHeight = Number(componentRef?.current?.style.height) || window.innerHeight;

  useScroll(({ scrollY }) => {
    const scrolledToBottom = Math.ceil(scrollY + windowHeight / 2) >= fullHeight;
    if (scrolledToBottom) {
      setIsEndOfPage(scrolledToBottom);
    }
  });
}

export default function useEndOfPage(callback: () => void, componentRef?: React.RefObject<HTMLElement>, isEnd = false) {
  const [isEndOfPage, setIsEndOfPage] = useState(false);

  useScrollEndOfPage(setIsEndOfPage, componentRef);

  useEffect(() => {
    if (!isEnd && isEndOfPage) {
      callback();
    }
  }, [isEndOfPage, isEnd]);

}
