import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: white;
  }
`;

export const toolbarStyle = {
  display: 'flex',
  columnGap: 3,
};
