import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from './shared/contexts/ThemeContext';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
