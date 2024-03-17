import Routes from '@src/routes';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import React from 'react';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}

export default App;
