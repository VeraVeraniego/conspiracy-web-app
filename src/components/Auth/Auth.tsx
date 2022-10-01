import { useState } from 'react'
import styled from 'styled-components'
import { useUser } from '../../context/User'
import { Logo } from '../../assets/Logo'
import backImage from './loginback.png'
import { theme } from '../../theme/globalStyle'
import axios from 'axios'

interface AuthProps {
  children: React.ReactElement
}

export const Auth = ({ children }: AuthProps) => {
  const { userLogged, login } = useUser()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const onLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login({ userID: '01aft', username: 'Jhon' })
  }

  if (userLogged) {
    return children
  }

  return (
    <AuthWrapper>
      <ImageWrapper />
      <LoginCardWrapper>
        <LoginCard method="POST" onSubmit={onLoginSubmit}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <StyledLabel>
            <StyledHelper>User</StyledHelper>
            <StyledInput
              type="email"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
              placeholder="huginn@ravn.co"
            />
          </StyledLabel>
          <StyledLabel>
            <StyledHelper>Password</StyledHelper>
            <StyledInput
              type="password"
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
              placeholder="write your password here"
            />
          </StyledLabel>
          <SubmitWrapper>
            <SubmitButton type="submit">
              <h4>Log in</h4>
            </SubmitButton>
          </SubmitWrapper>
        </LoginCard>
      </LoginCardWrapper>
    </AuthWrapper>
  )
}

const AuthWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImageWrapper = styled.div`
  flex: 1;
  height: 100vh;
  background-image: url(${backImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const LoginCardWrapper = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginCard = styled.form`
  width: 70%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`

const LogoWrapper = styled.div`
  width: 330px;
`

const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const StyledHelper = styled.h4`
  color: ${theme.palette.text.gray};
`

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  background-color: ${theme.palette.black.minus4};
  color: ${theme.palette.text.gray};
  border: none;
  outline: none;

  &::placeholder {
    color: ${theme.palette.text.grayPlusOne};
  }

  &:hover,
  &:focus {
  }
`

const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const SubmitButton = styled.button`
  background-color: ${theme.palette.primary.zero};
  border-radius: 12px;
  color: ${theme.palette.text.white};
  padding: 12px 32px;
  outline: none;
  border: none;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.palette.primary.plus1};
  }
`
