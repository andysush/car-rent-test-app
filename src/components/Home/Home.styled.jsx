import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 10px;
  }

  p {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-top: 10px;
    margin-left: 15px;
  }
`;

export const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const AnimatedIcon = styled.div`
  display: inline-block;
  animation: ${rotateAnimation} 2s linear infinite;
`;
