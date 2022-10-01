import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../theme/globalStyle'
import { Logo } from '../../assets/Logo'
import placeholderImage from '../../assets/images/profileplaceholder.png'
import { SelectDropdown } from './SelectDropdown'
import { useScore } from '../../context/Score'

export const Navbar = () => {
  const { score } = useScore()

  return (
    <NavbarGeneralContainer>
      <NavbarWrapper>
        <ProfileWrapper>
          <ProfileImage>
            <img src={placeholderImage} />
          </ProfileImage>
          <ProfileData>
            <ProfileName>Alonso Conde</ProfileName>
            <SelectDropdown />
          </ProfileData>
        </ProfileWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <ScoreWrapper>
          <Score>
            <h2>My Score: {score}pt</h2>
          </Score>
        </ScoreWrapper>
      </NavbarWrapper>
      <Outlet />
    </NavbarGeneralContainer>
  )
}

const NavbarGeneralContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const NavbarWrapper = styled.div`
  width: 100%;
  height: 96px;
  padding: 16px 40px;
  background-color: ${theme.palette.black.zero};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProfileWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`

const ProfileImage = styled.div`
  width: 48px;
  height: 48px;
  border: 2px solid ${theme.palette.gray.zero};
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
  }
`
const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${theme.palette.text.white};
  gap: 8px;
`

const ProfileName = styled.h4`
  font-weight: 300;
`

const LogoWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ScoreWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Score = styled.div`
  background-color: ${theme.palette.black.minus4};
  border-radius: 50px;
  padding: 16px 32px;
  font-weight: 700;
  color: ${theme.palette.primary.zero};
`
