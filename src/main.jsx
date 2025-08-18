import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'normalize.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './store/store.js';


const theme = createTheme({
  typography: {
    fontFamily: "'Work Sans', sans-serif",
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);

