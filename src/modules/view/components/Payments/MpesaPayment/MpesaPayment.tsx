// MpesaPayment.tsx

import React, { useState } from "react";
import * as S from "./Styles";

interface MpesaPaymentProps {
  amount: number;
  onSubmit: (info: MpesaPaymentInfo) => void;
}

interface MpesaPaymentInfo {
  phoneNumber: string;
}

export const MpesaPayment: React.FC<MpesaPaymentProps> = ({
  amount,
  onSubmit,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = () => {
    const phoneRegex = /^2547\d{8}$/; // Kenyan phone number format
    if (!phoneRegex.test(phoneNumber)) {
      setValidationError(
        "Please enter a valid Kenyan phone number (2547XXXXXXXX)."
      );
      return;
    }
    setValidationError(null);
    onSubmit({ phoneNumber });
  };

  return (
    <S.MpesaPaymentContainer>
      <S.FormGroup>
        <label htmlFor="phoneNumber">Phone Number</label>
        <S.Input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="2547XXXXXXXX"
        />
      </S.FormGroup>
      {validationError && <S.ErrorMessage>{validationError}</S.ErrorMessage>}
      <S.PayButton onClick={handleSubmit}>
        Pay {formatCurrency(amount)} via Mpesa
      </S.PayButton>
    </S.MpesaPaymentContainer>
  );
};

// Utility function to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KES",
  }).format(amount);
};
