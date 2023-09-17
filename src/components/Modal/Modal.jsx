import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  CarDetails,
  CarImage,
  CarInfo,
  CarTitle,
  ClsBtn,
  Description,
  ModalWindow,
  Overlay,
  RentBtn,
  RentalItems,
  RentalList,
  Title,
  TitleWrapper,
  Wrapper,
} from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ isOpen, onClose, data }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  const {
    img,
    make,
    year,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    mileage,
    rentalPrice,
    address,
    rentalCompany,
    type,
    model,
    id,
    accessories,
  } = data;
  const [city, country] = address.split(', ').slice(1);

  const detailsRow1 = [
    city,
    country,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
  ]
    .filter(Boolean)
    .join(' | ');
  const detailsRow2 = [
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ]
    .filter(Boolean)
    .join(' | ');
  const detailsRow3 = [...accessories].filter(Boolean).join(' | ');
  const detailsRow4 = [
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ]
    .filter(Boolean)
    .join(' | ');

  const conditionsArray = rentalConditions.split('\n');

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <ClsBtn type="button" onClick={onClose}>
          &times;
        </ClsBtn>
        <CarImage src={img} alt={`${make} ${model}`} />
        <TitleWrapper>
          <CarTitle>
            {make} {model}, {year}
          </CarTitle>
        </TitleWrapper>
        <CarDetails>
          <CarInfo>{detailsRow1}</CarInfo>
          <CarInfo>{detailsRow2}</CarInfo>
        </CarDetails>
        <Description>{description}</Description>
        <Wrapper>
          <Title>Accessories and functionalities:</Title>
          <CarInfo>{detailsRow3}</CarInfo>
          <CarInfo>{detailsRow4}</CarInfo>
        </Wrapper>
        <Wrapper>
          <Title>Rental Conditions: </Title>
          <RentalList>
            <RentalItems>{conditionsArray[0]}</RentalItems>
            <RentalItems>{conditionsArray[1]}</RentalItems>
            <RentalItems>{conditionsArray[2]}</RentalItems>
            <RentalItems>{`Mileage: ${mileage.toLocaleString(
              'en-IN'
            )}`}</RentalItems>
            <RentalItems>{`Price: ${rentalPrice}$`}</RentalItems>
          </RentalList>
        </Wrapper>
        <RentBtn href={`tel:${'+380730000000'}`}>Rental car</RentBtn>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
