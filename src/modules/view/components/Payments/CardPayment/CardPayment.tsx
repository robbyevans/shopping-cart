// CardPayment.tsx

import React, { useState } from "react";
import * as S from "./Styles";

interface CardPaymentProps {
  amount: number;
  onSubmit: (info: CardPaymentInfo) => void;
}

interface CardPaymentInfo {
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export const CardPayment: React.FC<CardPaymentProps> = ({
  amount,
  onSubmit,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = () => {
    // Basic validation
    if (!cardNumber || !expiry || !cvc) {
      setValidationError("Please fill in all card details.");
      return;
    }
    setValidationError(null);
    onSubmit({ cardNumber, expiry, cvc });
  };

  return (
    <S.CardPaymentContainer>
      <S.FormGroup>
        <label htmlFor="cardNumber">Card Number</label>
        <S.Input
          id="cardNumber"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
        />
      </S.FormGroup>
      <S.FormGroup>
        <label htmlFor="expiry">Expiry Date</label>
        <S.Input
          id="expiry"
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          placeholder="MM/YY"
        />
      </S.FormGroup>
      <S.FormGroup>
        <label htmlFor="cvc">CVC</label>
        <S.Input
          id="cvc"
          type="text"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          placeholder="123"
        />
      </S.FormGroup>
      {validationError && <S.ErrorMessage>{validationError}</S.ErrorMessage>}
      <S.PayButton onClick={handleSubmit}>
        Pay {formatCurrency(amount)}
      </S.PayButton>
    </S.CardPaymentContainer>
  );
};

// Utility function to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KES",
  }).format(amount);
};
