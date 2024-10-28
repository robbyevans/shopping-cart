import styled from "styled-components";
import { Link } from "react-router-dom";
import { STATIC_COLORS } from "modules/view/foundations";

interface OffcanvasProps {
  $isOpen: boolean;
}

export const Overlay = styled.div<OffcanvasProps>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const OffcanvasContainer = styled.div<OffcanvasProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

export const OffcanvasHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
`;

export const OffcanvasTitle = styled.h5`
  margin: 0;
`;

export const CloseButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const OffcanvasBody = styled.div`
  padding: 1rem;
  overflow-y: auto;
  height: calc(100% - 56px);
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Total = styled.div`
  margin-top: 1rem;
  text-align: right;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const CheckoutButton = styled(Link)`
  background-color: ${STATIC_COLORS.base.primary};
  color: ${STATIC_COLORS.base.white};
  display: block;
  padding: 0.75rem;
  text-decoration: none;
  text-align: center;
  border-radius: 0.25rem;
  margin: 10px 0 50px 0;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: ${STATIC_COLORS.base.secondary};
  }
`;
