import Event from 'Helpers/Event';
import Button from 'UI/Button/Button'
import React, { SetStateAction, useEffect, useState } from 'react'
import { ParamsOpenEvent } from '../Month/Month';

import "./openEvent.scss"
import Content from 'Components/Content/Content';
import API from 'Fetch/Api';
import router from 'AppRouter';
import { useAppSelector } from 'Hooks';
import { ConstSupport } from 'Constatnts/role';

interface Props {
    event: Event;
    setActive: React.Dispatch<SetStateAction<ParamsOpenEvent>>
}



function OpenEvent({ event, setActive }: Props) {
    const role = useAppSelector(s => s.authorization.user?.roles)
    const [_event, setEvent] = useState(event);
    const isMyEvent = _event.creator.isAuntification() || (role ? role.includes(ConstSupport.Id) && (event.isPublic?? false) : false);


    useEffect(() => {
        API.getEventId(event.id).then((event) => {
            setEvent(event);
        }).catch(() => {
            setActive({
                isActive: false,
                event: null
            })
        })
    }, [])

    const deleteEvent = () => {
        API.deleteEventId(event.id).then(() => {
            setActive({
                isActive: false,
                event: null
            })
        })
    }

    return (
        <div className='modal' onClick={() => setActive({
            isActive: false,
            event: null
        })}>
            <div className='tile window' onClick={(e) => {
                e.stopPropagation();
            }}>
                <div className='row'>
                    <p>{_event.title}</p>
                    <span>{_event.start.DatetoStr("dd-months-yyyy hh:mm") + " - "}</span>
                    <span>{" " + _event.end.DatetoStr("hh:mm")}</span>
                </div>
                <div>

                </div>
                <div>
                    {_event.cabinet && <p>Кабинет: {_event.cabinet.name}</p>}
                    {_event.description && <Content id={_event.id} text={_event.description}></Content>}
                </div>
                <div>
                    {isMyEvent && <Button type='button' onClick={deleteEvent}>Удалить</Button>}
                </div>
            </div>
        </div>
    )
}

export default OpenEvent