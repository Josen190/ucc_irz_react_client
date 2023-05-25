
function FormEditUserPosition() {
    const user = useOutletContext<User>()

    const navigation = useNavigate();

    const ref = useRef<HTMLDivElement>(null)
    const [SearchString, setSearchString] = useState<string>()
    const {positionJSX, userPositionJSX } = useEditUserPosition(ref, user, SearchString);

    return (
        <div className='modal z-index-20' onClick={() => navigation("../")}>
            <div ref={ref} className='tile' onClick={(e) => e.stopPropagation()}>
                <div>
                    {userPositionJSX}
                </div>
                <div>
                    <InputField type="text" onSetValue={setSearchString}></InputField>
                    {positionJSX}
                </div>

            </div>
        </div>
    );
}

export default FormEditUserPosition;