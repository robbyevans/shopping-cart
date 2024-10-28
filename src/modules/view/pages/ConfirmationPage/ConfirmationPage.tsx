// src/modules/shoppingCart/view/pages/ConfirmationPage/ConfirmationPage.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";

export const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.ConfirmationContainer>
      <h2>Thank You for Your Purchase!</h2>
      <p>Your order has been successfully placed.</p>
      <S.HomeButton onClick={() => navigate("/catalog")}>
        Back to Catalog
      </S.HomeButton>
    </S.ConfirmationContainer>
  );
};

export default ConfirmationPage;
