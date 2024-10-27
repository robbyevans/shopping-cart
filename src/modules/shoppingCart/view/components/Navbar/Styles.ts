import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
    border-bottom: 2px solid #0d6efd;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const CartButton = styled.button`
  width: 3rem;
  height: 3rem;
  position: relative;
  background: none;
  border: 1px solid #0d6efd;
  border-radius: 50%;
  color: #0d6efd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(13, 110, 253, 0.1);
  }
`;

export const CartIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
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
