import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Main from 'pages/MainPage';
import CarsPage from 'pages/CarsPage';
import FavoritesPage from 'pages/FavoritesPage';
import { Logo } from './Logo/Logo';

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <header>
          <Logo />
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<CarsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </header>
      </>
    </BrowserRouter>
  );
};
