import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { STATIC_COLORS } from "modules/shoppingCart/view/foundations";

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  margin-bottom: 1rem;
  z-index: 1000;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkItem = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  margin-right: 1rem;
  padding: 0.5rem;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid ${STATIC_COLORS.base.primary};
  }
  &:hover {
    color: ${STATIC_COLORS.base.primaryHover};
  }
`;

export const CartButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  background: none;
  border: 1px solid ${STATIC_COLORS.base.primary};
  border-radius: 50%;
  color: ${STATIC_COLORS.base.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CartIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid red;
  color: red;
  fill: red;
  path {
    fill: blue;
  }
`;

export const CartBadge = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(25%, 25%);
  background-color: #dc3545;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;
