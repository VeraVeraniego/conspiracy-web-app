import { useState } from 'react'
import styled from 'styled-components'
import { useUser } from '../../context/User'
import { Logo } from '../../assets/Logo'
import backImage from './loginback.png'
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
            <StyledHelper>Email</StyledHelper>
            <StyledInput
              type="email"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
            />
          </StyledLabel>
          <StyledLabel>
            <StyledHelper>Password</StyledHelper>
            <StyledInput
              type="password"
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
            />
          </StyledLabel>
          <SubmitWrapper>
            <SubmitButton type="submit">Login</SubmitButton>
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

const StyledHelper = styled.h4``

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  -webkit-appearance: none;

  &:focus,
  &:hover {
    border: none;
    outline: none;
  }
`

const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const SubmitButton = styled.button`
  border: 1px solid black;
  padding: 8px 16px;
`
