import AppRouter from './AppRouter'
import styled from 'styled-components'
import { UserProvider } from './context/User'
import { Auth } from './components/Auth/Auth'

const App = () => {
  return (
    <MainWrapper className="App">
      <UserProvider>
        <Auth>
          <AppRouter />
        </Auth>
      </UserProvider>
    </MainWrapper>
  )
}

export default App

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #1c1c1c;
`
