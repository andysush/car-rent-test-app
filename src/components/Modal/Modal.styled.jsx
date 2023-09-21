import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  background-color: #f3f3f2;
  width: 640px;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
  padding: 40px;
  box-sizing: border-box;
`;

export const ClsBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: #333;
  padding: 0;

  :hover,
  :focus {
    color: #3470ff;
  }
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
  justify-content: start;
  align-items: center;
`;
export const CarTitle = styled.h2`
  font-size: 22px;
  line-height: calc(30 / 22);
  font-weight: 500;
  margin: 10px 0;
`;
export const CarDetails = styled.div`
  width: 385px;
  margin-bottom: 14px;
`;

export const CarInfo = styled.p`
  font-size: 16px;
  line-height: calc(22 / 16);
  color: rgba(18, 20, 23, 0.5);
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: calc(24 / 18);
  color: rgba(18, 20, 23, 1);
  margin-bottom: 24px;
`;
export const Wrapper = styled.div`
  width: 460px;
  margin-bottom: 24px;
`;
export const Title = styled.h3`
  font-size: 18px;
  line-height: calc(24 / 18);
  color: rgba(18, 20, 23, 1);
  font-weight: 500;
  margin-bottom: 8px;
`;

export const RentalList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RentalItems = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
  font-size: 12px;
  line-height: calc(18 / 12);
  letter-spacing: -0.24px;
`;

export const RentBtn = styled.a`
  display: flex;
  width: 185px;
  height: 44px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 12px;
  background: #3470ff;
  border-color: transparent;
  margin-top: auto;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: #0b44cd;
  }
`;

export const Span = styled.span`
  color: #3470ff;
`;
