// Styles.ts

import styled from "styled-components";
import { STATIC_COLORS, STATIC_SHADOWS } from "modules/view/foundations";

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${STATIC_COLORS.base.whiteGray};
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: ${STATIC_COLORS.base.white};
  box-shadow: ${STATIC_SHADOWS.sm};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${STATIC_SHADOWS.md};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex-grow: 1;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

export const ItemName = styled.span`
  font-size: 1.25rem;
  color: ${STATIC_COLORS.base.black};
`;

export const ItemPrice = styled.span`
  margin-left: 0.5rem;
  color: ${STATIC_COLORS.base.secondary};
  font-size: 1rem;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
  color: ${STATIC_COLORS.base.black};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  color: ${STATIC_COLORS.base.primary};
  cursor: pointer;
  padding: 0;
  font-size: 0.875rem;

  &:hover {
    color: ${STATIC_COLORS.base.primaryHover};
    text-decoration: underline;
  }
`;

export const CardFooter = styled.div`
  margin-top: auto;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.375rem;
  background-color: ${STATIC_COLORS.base.primary};
  color: ${STATIC_COLORS.base.white};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${STATIC_COLORS.base.primaryHover};
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityControlButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const QuantityButton = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: ${STATIC_COLORS.base.primary};
  color: ${STATIC_COLORS.base.white};
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${STATIC_COLORS.base.primaryHover};
  }
`;

export const QuantityText = styled.div`
  font-size: 1rem;
  color: ${STATIC_COLORS.base.black};
`;

export const RemoveButton = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: ${STATIC_COLORS.base.red};
  color: ${STATIC_COLORS.base.white};
  border: none;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${STATIC_COLORS.base.lightRed};
  }
`;

/* Modal Styles */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Apply a translucent background */
  background-color: rgba(0, 0, 0, 0.6);
  /* Create the glossy effect */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); /* For Safari support */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${STATIC_COLORS.base.white};
  padding: 1rem;
  max-width: 500px;
  width: 90%;
  border-radius: 0.5rem;
  position: relative;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 450px; /* Maximum height for larger screens */
  margin-bottom: 10px;

  @media (max-width: 768px) {
    max-height: 300px; /* Adjust max-height for tablets */
  }

  @media (max-width: 480px) {
    max-height: 200px; /* Adjust max-height for mobile devices */
  }
`;

export const ModalDescription = styled.p`
  font-size: 1rem;
  color: ${STATIC_COLORS.base.black};
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: -2.5rem;
  right: -0.5rem;
  background: none;
  border: none;
  color: ${STATIC_COLORS.base.white};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${STATIC_COLORS.base.primaryHover};
  }
`;
