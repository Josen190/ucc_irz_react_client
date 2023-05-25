
export default function useEndOfPage(callback: () => void, componentRef?: React.RefObject<HTMLElement>, isEnd = false, revers = false) {
  const [fullHeight, setFullHeight]
      = useState(componentRef?.current?.scrollHeight || document.documentElement.scrollHeight)
  const windowHeight = Number(componentRef?.current?.style.height) || window.innerHeight;

  useScroll(({ scrollY }) => {
    let scrolledToBottom: boolean;
    if (revers){
      scrolledToBottom = scrollY <= windowHeight;
    }else{
      scrolledToBottom = Math.ceil(scrollY) >= fullHeight;
    }

    // const scrolledToBottom = revers ? scrollY <= windowHeight : Math.ceil(scrollY + windowHeight / 2) >= fullHeight;
    if (!isEnd && scrolledToBottom) {
      callback();
      setFullHeight(componentRef?.current?.scrollHeight || document.documentElement.scrollHeight);

    }
  });

}
