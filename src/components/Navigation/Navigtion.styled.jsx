import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const Li = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #5b65f5;
  color: #5b65f5;
  text-decoration: none;

  &.active {
    background-color: #5b65f5;
    color: white;
  }
`;
