


function FormEditInfoUser() {

    const user = useOutletContext<User>()
    const navigation = useNavigate();

    const [firstNamem, setFirstName] = useState(user.firstName);
    const [surname, setSurname] = useState(user.surname);
    const [patronymic, setPatronymic] = useState(user.patronymic);
    const [birthday, setBirthday] = useState(user.birthday);

    // const [atviveEditRole, setActiveEditRole] = useState(false);



    const save = () => {
        const fio = [firstNamem, surname];
        if (patronymic.length > 0) fio.push(patronymic);
        
        updateInfo(user.id, fio, birthday);
    }


    return (
        <div className='modal' onClick={() => navigation("../")}>
            <div className='tile' onClick={(e) => e.stopPropagation()}>
                <InputField type='text' placeholder='Фамилия' defaultValue={firstNamem} onSetValue={setFirstName}></InputField>
                <InputField type='text' placeholder='Имя' defaultValue={surname} onSetValue={setSurname}></InputField>
                <InputField type='text' placeholder='Отчество' defaultValue={patronymic} onSetValue={setPatronymic}></InputField>
                <InputField type='date' title='дата рождения' defaultValue={user.birthday.toString()} onSetValue={setBirthday} MyConstructor={MyDate} ></InputField>


                <Button type="button" onClick={save}>Сохранить</Button>
            </div>
        </div >
    )
}

export default FormEditInfoUser