import styled from "styled-components";

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #fff;
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
  margin-bottom: 1rem;
`;

export const ItemName = styled.span`
  font-size: 1.5rem;
`;

export const ItemPrice = styled.span`
  margin-left: 0.5rem;
  color: #6c757d;
  font-size: 1.25rem;
`;

export const CardFooter = styled.div`
  margin-top: auto;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;

  &:hover {
    background-color: #0b5ed7;
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
  padding: 0.25rem 0.75rem;
  background-color: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: #0b5ed7;
  }
`;

export const QuantityText = styled.div`
  font-size: 1.25rem;
`;

export const RemoveButton = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background-color: #bb2d3b;
  }
`;
