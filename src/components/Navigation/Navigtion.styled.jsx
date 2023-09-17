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
  border: 1px solid #3470ff;
  color: #3470ff;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: #3470ff;
    color: white;
  }
`;
