import AppRouter from './AppRouter'
import styled from 'styled-components';

 const App = () => {
  return (
    <MainWrapper className="App">
      <AppRouter />
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
	width: 100%;
	min-height: 100hv;
`