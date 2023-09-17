import { useState } from 'react';
import {
  CarDetails,
  CarImage,
  CarInfo,
  CarTitle,
  CardContainer,
  LearnMoreBtn,
  RentalPrice,
  TitleWrapper,
} from './CarsListItem.styled';
import { Modal } from 'components/Modal/Modal';

export const CarsListItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const {
    img,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    model,
    id,
    accessories,
  } = data;
  const [city, country] = address.split(', ').slice(1);

  const detailsRow1 = [city, country, rentalCompany, type]
    .filter(Boolean)
    .join(' | ');
  const detailsRow2 = [make, id, accessories[1]].filter(Boolean).join(' | ');

  return (
    <>
      <CardContainer>
        <CarImage src={img} alt={`${make} ${model}`} />
        <TitleWrapper>
          <CarTitle>
            {make} {model}, {year}
          </CarTitle>
          <RentalPrice>${rentalPrice}</RentalPrice>
        </TitleWrapper>
        <CarDetails>
          <CarInfo>{detailsRow1}</CarInfo>
          <CarInfo>{detailsRow2}</CarInfo>
        </CarDetails>
        <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
      </CardContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={data} />
    </>
  );
};
