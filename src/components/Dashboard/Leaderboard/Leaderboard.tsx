import React from 'react'
import styled from 'styled-components'
import { SubmitButton, SubmitWrapper, Wrapper } from '../../../common/styled'
import { theme } from '../../../theme/globalStyle'
import profileImage from '../../../assets/images/profile1.png'
import profileImage2 from '../../../assets/images/profile2.png'
import profileImage3 from '../../../assets/images/profile3.png'
import { CardUserInfoPicture } from '../Events/Events'

interface UserLeaderboard {
  name: string
  points: number
}
const mockedLeaderboard: UserLeaderboard[] = [
  { name: 'Luisa', points: 150 },
  { name: 'Gonzalo', points: 137 },
  { name: 'Brayan', points: 130 },
  { name: 'Carlos', points: 96 },
  { name: 'Franco', points: 92 },
  { name: 'Duilmarc', points: 80 },
  { name: 'Gerardo', points: 74 },
  { name: 'Kevin', points: 69 },
  { name: 'Alonso', points: 42 },
]

export const Leaderboard = () => {
  function printLeaders(userArray: UserLeaderboard[]) {
    const top3Users = userArray.slice(0, 3)
    return (
      <>
        <FirstPlace>
          <Points top>{top3Users[1].points} pt</Points>
          <CardUserInfoPicture size={64}>
            <img src={profileImage2} />
          </CardUserInfoPicture>
          <Name top>{top3Users[1].name}</Name>
          <Position top>2</Position>
          <Podium />
        </FirstPlace>
        <FirstPlace>
          <Points top>{top3Users[0].points} pt</Points>
          <CardUserInfoPicture size={80}>
            <img src={profileImage} />
          </CardUserInfoPicture>
          <Name top>{top3Users[0].name}</Name>
          <Position top>1</Position>
          <Podium />
        </FirstPlace>
        <FirstPlace>
          <Points top>{top3Users[2].points} pt</Points>
          <CardUserInfoPicture size={56}>
            <img src={profileImage3} />
          </CardUserInfoPicture>
          <Name top>{top3Users[2].name}</Name>
          <Position top>3</Position>
          <Podium />
        </FirstPlace>
      </>
    )
  }

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
      <ScoreBoardWrapper>{printLeaders(mockedLeaderboard)}</ScoreBoardWrapper>
      {/* from 4 to 6 */}

      {mockedLeaderboard
        .slice(3, mockedLeaderboard.length)
        .map((user: UserLeaderboard, index) => (
          <ClasificationRow key={user.name + index}>
            <Position>{index + 4}</Position>
            <CardUserInfoPicture>
              <img src={profileImage} />
            </CardUserInfoPicture>
            <Name>{user.name}</Name>
            <Points>{user.points} pt</Points>
          </ClasificationRow>
        ))}
    </AsideWrapper>
  )
}

const FirstPlace = styled.div`
  width: 30%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
  /* background-color: #fffa; */
  z-index: 5;
  gap: 8px;
`
const ClasificationRow = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  height: 64px;
  background-color: #262626;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 15;
  gap: 24px;
`
const Position = styled.h1<{ top?: boolean }>`
  color: ${(props) =>
    props.top ? theme.palette.primary.zero : theme.palette.text.gray};
  z-index: 15;
`
const Name = styled.h5<{ top?: boolean }>`
  color: ${(props) =>
    props.top ? theme.palette.primary.zero : theme.palette.text.gray};
  z-index: 15;
`
const Points = styled.h2<{ top?: boolean }>`
  color: ${(props) =>
    props.top ? theme.palette.primary.zero : theme.palette.text.gray};
  margin-left: ${(props) => (props.top ? 0 : 'auto')};
  z-index: 15;
`

const Podium = styled.div`
  width: 96px;
  height: 112px;
  margin-top: 50px;
  background: linear-gradient(180deg, #161616 0%, rgba(22, 22, 22, 0.3) 100%);
  border-bottom: none;
  top: 50px;
  margin-top: 55px;
  position: absolute;
  z-index: 10;
  &::before {
    border-bottom: 35px solid #161616;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    content: '';
    position: absolute;
    top: -34px;
  }
`
const ScoreBoardWrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
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
  overflow: scroll;
  padding: 16px 32px 16px 32px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
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
