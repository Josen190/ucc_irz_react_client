import Event from 'Helpers/Event';
import Button from 'UI/Button/Button'
import React, { useEffect, useState } from 'react'

import "./openEvent.scss"
import Content from 'UI/Content/Content';

import { useAppSelector } from 'Hooks';
import { ConstSupport } from 'Constatnts/role';
import getEventId from '../../Fetch/getEventId';
import deleteEventId from '../../Fetch/deleteEventId';
import UserVisitingCard from 'Components/UserVisitingCard/UserVisitingCard';
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import {notifyError} from "../../../../Components/Notifications/Notifications";



function OpenEvent() {
    const { eventId } = useParams<{ eventId: string }>();
    if (!eventId) return <></>

    const role = useAppSelector(s => s.authorization.user?.roles)

    const [_event, setEvent] = useState<Event | null>(null);
    const [formEvent, setFormEvent] = useState(<></>);
    const navigate = useNavigate();

    useEffect(() => {
        getEventId(eventId).then((event) => {
            setEvent(event);
        }).catch(() => {
            notifyError("Не удалось загрузить событие")
            navigate("/calendar");
        })
    }, [])

    useEffect(() => {
        if (!_event){
            setFormEvent(<h3>Загрузка события...</h3>)
            return;
        }

        const isMyEvent = _event.creator.isAuntification()
            || ((role ? role.includes(ConstSupport.Id) && (_event.isPublic ?? false) : false));

        setFormEvent(
            <>
                <div className='row'>
                    <p>{_event.title}</p>
                    <span>{_event.start.DatetoStr("dd-months-yyyy hh:mm") + " - "}</span>
                    <span>{" " + _event.end.DatetoStr("hh:mm")}</span>
                </div>

                {_event.listeners && _event.listeners.length > 0 &&
                    <div>
                        <h5>Участники</h5>
                        {_event.listeners.map(user => <UserVisitingCard key={user.id} user={user}></UserVisitingCard>)}
                    </div>
                }

                <div>
                    {_event.cabinetName && <p>Кабинет: {_event.cabinetName}</p>}
                    {_event.description && <Content id={_event.id} text={_event.description}></Content>}
                </div>
                <div>
                    {isMyEvent && <Button type='button' onClick={deleteEvent}>Удалить</Button>}
                </div>
            </>
        )

    }, [_event])

    const deleteEvent = () => {
        deleteEventId(eventId).then(() => {
            navigate("/calendar");
        })
    }





    return (
        <div className='modal' onClick={() => navigate("/calendar")}>
            <div className='tile window' onClick={(e) => {
                e.stopPropagation();
            }}>
                {formEvent}
            </div>
        </div>
    )
}

export default OpenEvent