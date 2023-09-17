import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import {
  CarDetails,
  CarImage,
  CarInfo,
  CarTitle,
  CardContainer,
  FavBtn,
  ImgWrap,
  LearnMoreBtn,
  RentalPrice,
  TitleWrapper,
} from './CarsListItem.styled';
import { Modal } from 'components/Modal/Modal';
// export const CarsListItem = ({ data, isFavorite, onToggleFavorite }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleFavorite = () => {
//     onToggleFavorite(!isFavorite);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const {
//     id,
//     img,
//     make,
//     year,
//     rentalPrice,
//     address,
//     rentalCompany,
//     type,
//     model,
//     accessories,
//   } = data;

//   const [city, country] = address.split(', ').slice(1);

//   const detailsRow1 = [city, country, rentalCompany, type]
//     .filter(Boolean)
//     .join(' | ');

//   const detailsRow2 = [make, id, accessories[1]].filter(Boolean).join(' | ');

//   return (
//     <>
//       <CardContainer>
//         <ImgWrap>
//           <FavBtn onClick={toggleFavorite}>
//             {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
//           </FavBtn>
//           <CarImage src={img} alt={`${make} ${model}`} />
//         </ImgWrap>
//         <TitleWrapper>
//           <CarTitle>
//             {make} {model}, {year}
//           </CarTitle>
//           <RentalPrice>${rentalPrice}</RentalPrice>
//         </TitleWrapper>
//         <CarDetails>
//           <CarInfo>{detailsRow1}</CarInfo>
//           <CarInfo>{detailsRow2}</CarInfo>
//         </CarDetails>
//         <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
//       </CardContainer>
//       <Modal isOpen={isModalOpen} onClose={closeModal} data={data} />
//     </>
//   );
// };
export const CarsListItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CardContainer>
        <ImgWrap>
          <FavBtn>
            {
              // isFavorite ? <AiFillHeart /> :
              <AiOutlineHeart />
            }
          </FavBtn>
          <CarImage src={data.img} alt={`${data.make} ${data.model}`} />
        </ImgWrap>
        <TitleWrapper>
          <CarTitle>
            {data.make} {data.model}, {data.year}
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
