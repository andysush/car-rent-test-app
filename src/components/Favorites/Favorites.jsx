import { GridContainer } from 'components/CarsList/CarsList.styled';
import { CarsListItem } from 'components/shared/CarsListItem/CarsListItem';
import { useEffect, useState } from 'react';

export const FavoriteList = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const getFavoriteCarsFromLocalStorage = () => {
      const favoritesFromLocalStorage =
        JSON.parse(localStorage.getItem('favorites')) || [];
      return favoritesFromLocalStorage;
    };

    setFavoriteCars(getFavoriteCarsFromLocalStorage());

    const handleStorageChange = e => {
      if (e.key === 'favorites') {
        setFavoriteCars(getFavoriteCarsFromLocalStorage());
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [favoriteCars]);

  return (
    <GridContainer>
      {favoriteCars.map(data => (
        <CarsListItem key={data.id} data={data} />
      ))}
    </GridContainer>
  );
};
