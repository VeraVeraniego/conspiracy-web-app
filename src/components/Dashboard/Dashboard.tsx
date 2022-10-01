import React from 'react'
import styled from 'styled-components'
import { Events } from './Events/Events'
import { Leaderboard } from './Leaderboard/Leaderboard'

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <EventsWrapper>
        <Events />
      </EventsWrapper>
      <LeaderboardWrapper>
        <Leaderboard />
      </LeaderboardWrapper>
    </DashboardContainer>
  )
}

const DashboardContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
`

const EventsWrapper = styled.div`
  width: 75%;
`

const LeaderboardWrapper = styled.div`
  width: 25%;
`
