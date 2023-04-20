import { useEffect } from "react";

function useEndOfPage(setIsEndOfPage: React.Dispatch<React.SetStateAction<boolean>>) {
    useEffect(() => {
        function handleScroll() {
          const scrollTop = document.documentElement.scrollTop;
          const windowHeight = window.innerHeight;
          const fullHeight = document.documentElement.scrollHeight;
          const scrolledToBottom = Math.ceil(scrollTop + windowHeight) >= fullHeight;
          if (scrolledToBottom)
            setIsEndOfPage(scrolledToBottom);
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
}
export default useEndOfPage;