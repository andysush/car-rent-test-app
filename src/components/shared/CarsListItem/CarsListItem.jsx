import { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

import {
  AiFill,
  CarDetails,
  CarImage,
  CarInfo,
  CarTitle,
  CardContainer,
  FavBtn,
  ImgWrap,
  LearnMoreBtn,
  RentalPrice,
  Span,
  TitleWrapper,
} from './CarsListItem.styled';
import { Modal } from 'components/Modal/Modal';

export const CarsListItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritesFromLocalStorage =
      JSON.parse(localStorage.getItem('favorites')) || [];

    const isCurrentlyFavorite = favoritesFromLocalStorage.some(
      favorite => favorite.id === data.id
    );

    setIsFavorite(isCurrentlyFavorite);
  }, [data.id]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleFavorite = () => {
    const favoritesFromLocalStorage =
      JSON.parse(localStorage.getItem('favorites')) || [];

    const isFavorite = favoritesFromLocalStorage.some(
      favorite => favorite.id === data.id
    );

    if (isFavorite) {
      const updatedFavorites = favoritesFromLocalStorage.filter(
        favorite => favorite.id !== data.id
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favoritesFromLocalStorage, data];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <CardContainer>
        <ImgWrap>
          <FavBtn onClick={toggleFavorite}>
            {isFavorite ? <AiFill /> : <AiOutlineHeart />}
          </FavBtn>
          <CarImage src={data.img} alt={`${data.make} ${data.model}`} />
        </ImgWrap>
        <TitleWrapper>
          <CarTitle>
            {data.make} <Span>{data.model}</Span>, {data.year}
          </CarTitle>
          <RentalPrice>${data.rentalPrice}</RentalPrice>
        </TitleWrapper>
        <CarDetails>
          <CarInfo>{data.detailsRow1}</CarInfo>
          <CarInfo>{data.detailsRow2}</CarInfo>
        </CarDetails>
        <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
      </CardContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={data} />
    </>
  );
};
