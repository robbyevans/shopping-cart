// src/modules/shoppingCart/view/pages/ConfirmationPage/Styles.ts

import styled from "styled-components";
import { STATIC_COLORS } from "modules/view/foundations";

export const ConfirmationContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const HomeButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: ${STATIC_COLORS.base.primary};
  color: ${STATIC_COLORS.base.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${STATIC_COLORS.base.primaryHover};
  }
`;
