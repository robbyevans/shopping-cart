// src/modules/shoppingCart/view/components/MpesaPayment/Styles.ts

import styled from "styled-components";
import { STATIC_COLORS } from "modules/view/foundations";

export const MpesaPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${STATIC_COLORS.base.whiteGray};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${STATIC_COLORS.base.primary};
    box-shadow: 0 0 0 2px rgba(13, 59, 35, 0.2);
  }
`;

export const PayButton = styled.button`
  padding: 0.75rem;
  background-color: #25d366; /* Mpesa green */
  color: ${STATIC_COLORS.base.white};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #1da851; /* Darker Mpesa green */
  }

  &:disabled {
    background-color: ${STATIC_COLORS.base.whiteGray};
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: ${STATIC_COLORS.error["600"]};
  margin-bottom: 1rem;
`;
