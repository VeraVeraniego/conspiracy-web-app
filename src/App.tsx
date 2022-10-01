import AppRouter from './AppRouter'
import styled from 'styled-components'
import { UserProvider } from './context/User'
import { ChannelProvider } from './context/Channel'
import { ScoreProvider } from './context/Score'
import { Auth } from './components/Auth/Auth'
import { GlobalStyle } from './theme/globalStyle'
import { theme } from './theme/globalStyle'

const App = () => {
  return (
    <MainWrapper className="App">
      <GlobalStyle />
      <UserProvider>
        <ChannelProvider>
          <ScoreProvider>
            <Auth>
              <AppRouter />
            </Auth>
          </ScoreProvider>
        </ChannelProvider>
      </UserProvider>
    </MainWrapper>
  )
}

export default App

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.palette.black.minus1};
`
