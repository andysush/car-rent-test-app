import styled from '@emotion/styled';

export const CarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
`;

export const CardContainer = styled.li`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
  padding: 16px;
  box-sizing: border-box;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 14px;
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

export const CarDetails = styled.div``;

export const CarInfo = styled.p`
  font-size: 16px;
  line-height: calc(22 / 16);
  color: rgba(18, 20, 23, 0.5);
  padding-left: 30px;
  padding-right: 30px;
`;

export const LearnMoreBtn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 12px;
  background: #3470ff;
  border-color: transparent;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: #0b44cd;
  }
`;
