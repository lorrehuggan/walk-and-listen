import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Home from './Home/Home';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  box-sizing: border-box;
  padding: 0
}
body {
  height: 100vh;
  overflow: hidden;
  font-family: 'Arimo', sans-serif;
}
`;

const theme = {
  primaryColor: '#020202',
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
