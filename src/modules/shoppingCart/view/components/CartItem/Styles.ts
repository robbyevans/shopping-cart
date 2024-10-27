import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ItemImage = styled.img`
  width: 125px;
  height: 75px;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  flex-grow: 1;
  margin-right: auto;
`;

export const ItemName = styled.div`
  font-weight: bold;
`;

export const ItemQuantity = styled.span`
  color: #6c757d;
  font-size: 0.65rem;
`;

export const ItemPrice = styled.div`
  color: #6c757d;
  font-size: 0.75rem;
`;

export const TotalPrice = styled.div`
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #dc3545;
  font-size: 1.25rem;
  cursor: pointer;
`;
