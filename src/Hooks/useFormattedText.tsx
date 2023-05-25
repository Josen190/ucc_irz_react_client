
function useFormattedText(text: string) {
    const [formattedText, setFormattedText] = useState<JSX.Element[] | null>(
        null
    );

    useEffect(() => {
        const arrStr = text.split("\n");
        const arrP: JSX.Element[] = [];
        arrStr.forEach((element, index) => {
            if (element.length === 0 || element === "\r")
                arrP.push(<br key={index} />);
        else arrP.push(<p key={index}>{element}</p>);
        });
        setFormattedText(arrP.length > 0 ? arrP : null);
    }, [text]);


    return formattedText;
}

export default useFormattedText;