import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #0d6efd;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const CheckoutContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartSection = styled.div`
  flex: 0 0 30%;
  max-width: 30%;

  @media (max-width: 768px) {
    flex: 1;
    max-width: 100%;
  }
`;

export const BillingSection = styled.div`
  flex: 0 0 70%;
  max-width: 70%;

  @media (max-width: 768px) {
    flex: 1;
    max-width: 100%;
  }
`;

export const Divider = styled.div`
  width: 1px;
  background-color: grey;

  @media (max-width: 768px) {
    width: 100%;
    height: 1px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
`;

export const EmptyCart = styled.p`
  font-size: 1rem;
`;

export const Total = styled.div`
  margin-top: 1rem;
  text-align: right;
  font-weight: bold;
  font-size: 1.25rem;
`;
