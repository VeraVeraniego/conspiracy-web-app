import React from 'react'
import styled from 'styled-components'
import { SubmitButton, SubmitWrapper, Wrapper } from '../../../common/styled'
import { theme } from '../../../theme/globalStyle'

export const Leaderboard = () => {
  return (
    <AsideWrapper>
      <Row1>
        <Title>Teammate Leaderboard</Title>
        <MoreButton>See all</MoreButton>
      </Row1>
      <ButtonWrapper>
        <SortButton>Today</SortButton>
        <SortButton>Week</SortButton>
        <SortButton>Month</SortButton>
      </ButtonWrapper>
      <ScoreBoardWrapper>
        <Test></Test>
      </ScoreBoardWrapper>
    </AsideWrapper>
  )
}
const Test = styled.div`
  width: 96px;
  height: 112px;
  margin-top: 50px;
  background: linear-gradient(180deg, #161616 0%, rgba(22, 22, 22, 0.3) 100%);
  border-bottom: none;
  margin-left: 20px;
  margin-top: 55px;
  position: relative;
  &::before {
    border-bottom: 35px solid #161616;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    content: '';
    position: absolute;
    top: -34px;
  }
`
const ScoreBoardWrapper = styled.div``
const Row1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

const MoreButton = styled.h4`
  color: ${theme.palette.primary.zero};
`
const Title = styled.h4`
  color: ${theme.palette.text.white};
`

const AsideWrapper = styled(Wrapper)`
  padding: 16px 32px 16px 32px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${theme.palette.black.minus3};
`
const ButtonWrapper = styled(SubmitWrapper)`
  background-color: #4a4a4a;
  align-items: center;
  justify-content: center;
  width: min-content;
  border-radius: 20px;
`

const SortButton = styled(SubmitButton)`
  border-radius: 20px;
  background-color: #4a4a4a;
  &:hover {
    background-color: ${theme.palette.primary.zero};
  }
`
