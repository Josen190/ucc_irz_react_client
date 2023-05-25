
function useGetUserPosition(userId: string) {
    const [userPositionJSX, setUserPosition] = useState<JSX.Element[]>([]);


    useEffect(() => {
        getUserPosition(userId).then((pos) => {
            setUserPosition(pos.map(p =>
                (<RowUserPosition key={p.id} userPosition={p}/>)
        ))
        })
    }, [])



    return userPositionJSX;
}