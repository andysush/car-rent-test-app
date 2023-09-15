import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import Main from 'pages/MainPage';
import Cars from 'pages/CarsPage';
import Favorites from 'pages/FavoritesPage';

export const App = () => {
  return (
    <BrowserRouter>
      <>
        <header>
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<Cars />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </header>
      </>
    </BrowserRouter>
  );
};
