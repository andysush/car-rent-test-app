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

export const CarsListItem = ({ data }) => {
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

  const detailsRow = [
    city,
    country,
    rentalCompany,
    type,
    make,
    id,
    accessories[1],
  ]
    .filter(Boolean)
    .join(' | ');

  return (
    <CardContainer>
      <CarImage src={img} alt={`${make} ${model}`} />
      <TitleWrapper>
        <CarTitle>
          {make} {model}, {year}
        </CarTitle>
        <RentalPrice>${rentalPrice}</RentalPrice>
      </TitleWrapper>
      <CarDetails>
        <CarInfo>{detailsRow}</CarInfo>
      </CarDetails>
      <LearnMoreBtn>Learn more</LearnMoreBtn>
    </CardContainer>
  );
};
