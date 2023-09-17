import styled from '@emotion/styled';
import { AiFillHeart } from 'react-icons/ai';

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  box-sizing: border-box;
`;

export const ImgWrap = styled.div`
  position: relative;
  display: inline-block;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 14px;
`;

export const FavBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  outline: none;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CarTitle = styled.h2`
  font-size: 22px;
  line-height: calc(30 / 22);
  font-weight: 500;
  margin: 10px 0;
`;
export const RentalPrice = styled.p`
  font-size: 22px;
  line-height: calc(30 / 22);
  font-weight: 500;
`;

export const CarDetails = styled.div`
  margin-bottom: 28px;
`;

export const CarInfo = styled.p`
  font-size: 16px;
  line-height: calc(22 / 16);
  color: rgba(18, 20, 23, 0.5);
`;

export const LearnMoreBtn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 12px;
  background: #3470ff;
  border-color: transparent;
  margin: 0 auto;
  margin-top: auto;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: #0b44cd;
  }
`;

export const AiFill = styled(AiFillHeart)`
  color: #3470ff;
`;

export const Span = styled.span`
  color: #3470ff;
`;
