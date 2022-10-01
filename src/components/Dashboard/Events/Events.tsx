import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme/globalStyle'
import { Plus } from './Plus'
import { MenuDots } from './MenuDots'
import profileImage from '../../../assets/images/profile1.png'
import profileImage2 from '../../../assets/images/profile2.png'
import profileImage3 from '../../../assets/images/profile3.png'
import axios from 'axios'
import { useUser } from '../../../context/User'
import { useChannel } from '../../../context/Channel'
import { useNavigate } from 'react-router-dom'

type Event = {
  id: string
  name: string
  date: Date
  createdAt: Date
  updatedAt: Date
  plannerId: string
  channel: string
}

export const Events = () => {
  const [activeMenu, setActiveMenu] = useState<'myEvents' | 'comming' | 'past'>(
    'myEvents'
  )

  const [events, setEvents] = useState<Event[] | []>([])

  const { userLogged } = useUser()
  const { channel } = useChannel()

  const navigate = useNavigate()

  const myEventsRequest = async (userId: string) => {
    const response = await axios.get<Event[]>(
      `http://127.0.0.1:8080/my-events?userId=${userId}`
    )
    const filteredEvents = response.data.filter(
      (item) => item.channel === channel
    )
    setEvents(filteredEvents)
  }

  function addWeeks(numOfWeeks: number, date = new Date()) {
    date.setDate(date.getDate() + numOfWeeks * 7)

    return date
  }

  const comingEventsRequest = async () => {
    const response = await axios.get<Event[]>(`http://127.0.0.1:8080/list`, {
      params: { startDate: new Date(), endDate: addWeeks(2), channel: channel },
    })
    console.log(response.data)
    setEvents(response.data)
  }

  const joinEvent = async (eventId: string) => {
    const response = await axios.post<Event>(`http://127.0.0.1:8080/attend`, {
      eventId,
      userId: userLogged,
    })
  }

  useEffect(() => {
    if (activeMenu === 'myEvents' && userLogged) {
      myEventsRequest(userLogged.userID)
    }
    if (activeMenu === 'comming' && userLogged) {
      comingEventsRequest()
    }
  }, [activeMenu, channel])

  return (
    <EventsWrapper>
      <EventsNavbarWrapper>
        <EventsNavbarList>
          <EventsNavbarElement
            onClick={() => setActiveMenu('myEvents')}
            isActive={activeMenu === 'myEvents'}
          >
            <h2>My Events</h2>
          </EventsNavbarElement>
          <EventsNavbarElement
            onClick={() => setActiveMenu('comming')}
            isActive={activeMenu === 'comming'}
          >
            <h2>Coming Events</h2>
          </EventsNavbarElement>
          <EventsNavbarElement isActive={activeMenu === 'past'}>
            <h2>Past Events</h2>
          </EventsNavbarElement>
        </EventsNavbarList>
        <EventsNewEventButton
          type="button"
          onClick={() => navigate('/createEvent')}
        >
          <Plus />
          <h4>New Event</h4>
        </EventsNewEventButton>
      </EventsNavbarWrapper>
      <EventsListWrapper>
        {events.map((event, index) => (
          <EventCard key={index}>
            <EventCardUserInfo>
              <CardUserInfoPoints>
                +{event.plannerId === userLogged?.userID ? '5' : '1'}pt
              </CardUserInfoPoints>
              <CardUserInfoPicture>
                <img src={profileImage} />
              </CardUserInfoPicture>
              <CardUserEventInfo>
                <h3>
                  {event.name} •
                  <CardUserEventHour>
                    {new Date(event.date).toLocaleDateString()} -
                    {new Date(event.date).toLocaleTimeString()}
                  </CardUserEventHour>
                </h3>
                <h5>Luisa</h5>
              </CardUserEventInfo>
            </EventCardUserInfo>
            <EventCardAssitants>
              <EventCardAssitantsWrapper>
                <EventCardAssitantPhoto>
                  <img src={profileImage2} />
                </EventCardAssitantPhoto>
                <EventCardAssitantPhoto>
                  <img src={profileImage3} />
                </EventCardAssitantPhoto>
                <EventCardAssitantPhoto>
                  <img src={profileImage} />
                </EventCardAssitantPhoto>
                <EventCardAssistantsNumber>+2</EventCardAssistantsNumber>
              </EventCardAssitantsWrapper>
              {activeMenu === 'comming' ? (
                <EventCardAssistantJoinButton
                  disabled={event.plannerId === userLogged?.userID}
                  onClick={() => console.log('exec')}
                  joined={event.plannerId === userLogged?.userID}
                >
                  <h4>
                    {event.plannerId === userLogged?.userID ? 'Joined' : 'Join'}
                  </h4>
                </EventCardAssistantJoinButton>
              ) : (
                <MenuDots />
              )}
            </EventCardAssitants>
          </EventCard>
        ))}
      </EventsListWrapper>
    </EventsWrapper>
  )
}

const EventsWrapper = styled.div`
  width: 100%;
  padding: 24px 40px;
  height: 100%;
`

const EventsNavbarWrapper = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const EventsNavbarList = styled.ul`
  display: flex;
  justify-items: flex-start;
  align-items: center;
`

interface EventsNavbarElementProps {
  isActive: boolean
}
const EventsNavbarElement = styled.li<EventsNavbarElementProps>`
  width: 200px;
  padding: 24px 0px;
  display: block;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  color: ${theme.palette.text.grayPlusOne};
  ${(props) =>
    props.isActive
      ? `border-bottom: 1px solid ${theme.palette.primary.zero}; color: ${theme.palette.primary.zero};`
      : ''}

  &:hover {
    border-bottom: 1px solid ${theme.palette.primary.zero};
    color: ${theme.palette.primary.zero};
    cursor: pointer;
  }
`

const EventsNewEventButton = styled.button`
  border: 2px solid ${theme.palette.primary.zero};
  background-color: transparent;
  border-radius: 12px;
  padding: 12px 32px;
  color: ${theme.palette.primary.zero};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    cursor: pointer;
    border-color: ${theme.palette.primary.plus1};
    color: ${theme.palette.primary.plus1};
  }
`

const EventsListWrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const EventCard = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 16px;
  padding: 16px 32px;
  background-color: ${theme.palette.black.minus4};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const EventCardUserInfo = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
`

const CardUserInfoPoints = styled.h2`
  color: ${theme.palette.gray.zero};
`

export const CardUserInfoPicture = styled.div<{ size?: number }>`
  width: ${(props) => (props.size ? props.size : 40)}px;
  height: ${(props) => (props.size ? props.size : 40)}px;
  border-radius: 50%;
  border: 2px solid ${theme.palette.gray.zero};
  overflow: hidden;
  z-index: 15;

  & img {
    width: 100%;
    height: 100%;
  }
`

const CardUserEventInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${theme.palette.text.white};
`

const CardUserEventHour = styled.span`
  color: ${theme.palette.gray.zero};
`

const EventCardAssitants = styled.div`
  display: flex;
  gap: 32px;
  justify-items: flex-end;
  align-items: center;
`

const EventCardAssitantsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  color: ${theme.palette.text.white};
`

const EventCardAssistantsNumber = styled.h4`
  padding-left: 24px;
`

const EventCardAssitantPhoto = styled.div`
  margin-right: -24px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
  }
`

const EventCardAssistantJoinButton = styled.button<{ joined: boolean }>`
  padding: 12px 32px;
  background-color: ${theme.palette.primary.zero};
  color: ${theme.palette.text.white};
  border-radius: 12px;
  border: none;
  outline: none;

  &:hover {
    background-color: ${theme.palette.primary.plus1};
    cursor: pointer;
  }

  ${(props) =>
    props.joined &&
    `
		 background-color: ${theme.palette.success.zero};
	`}
`
