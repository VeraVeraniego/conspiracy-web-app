import { useState } from 'react'
import styled from 'styled-components'
import { useUser } from '../../context/User'
import { Logo } from '../../assets/Logo'
import backImage from './loginback.png'
import { theme } from '../../theme/globalStyle'
import axios from 'axios'
import {
  StyledHelper,
  StyledInput,
  StyledLabel,
  SubmitButton,
  SubmitWrapper,
} from '../../common/styled'

export interface LoginRequest {
  username: string
  password: string
}

interface LoginResponse {
  fullName: string
  id: string
}

interface AuthProps {
  children: React.ReactElement
}

export const Auth = ({ children }: AuthProps) => {
  const { userLogged, login } = useUser()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [error, setError] = useState(false)

  const loginRequest = async (data: LoginRequest) => {
    const response = await axios.post<LoginResponse>(
      `https://fda5-190-237-34-153.ngrok.io/login`,
      { username: data.username, password: data.password }
    )

    login({ userID: response.data.id, username: response.data.fullName })
  }

  const onLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      loginRequest({
        username: userEmail,
        password: userPassword,
      })
    } catch (error) {
      setError(true)
    }
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
