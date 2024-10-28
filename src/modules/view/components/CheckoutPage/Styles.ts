import styled from "styled-components";
import { STATIC_COLORS, deviceSize } from "modules/view/foundations";

export const CheckoutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${STATIC_COLORS.base.primary};
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
  @media (${deviceSize.md}) {
    flex-direction: column;
  }
`;

export const CartSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  border: 0.5px solid grey;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${STATIC_COLORS.base.black};
`;

export const EmptyCart = styled.p`
  color: ${STATIC_COLORS.base.secondary};
`;

export const Total = styled.div`
  font-weight: bold;
  margin-top: 1rem;
  text-align: right;
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media screen and (${deviceSize.mobileSmall}) {
    flex-direction: column;
  }
`;

export const PaymentMethodOption = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
  }

  label {
    cursor: pointer;
    color: ${STATIC_COLORS.base.black};
  }
`;

export const StatusMessage = styled.p`
  margin-top: 1rem;
  color: ${STATIC_COLORS.base.primary};
`;

export const ErrorMessage = styled.p`
  margin-top: 1rem;
  color: ${STATIC_COLORS.error["600"]};
`;

export const SuccessMessage = styled.p`
  margin-top: 1rem;
  color: ${STATIC_COLORS.base.green};
`;

// Additional styles for other components like CartItem can be added here
