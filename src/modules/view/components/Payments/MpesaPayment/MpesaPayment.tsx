import React, { useState } from "react";
import * as S from "./Styles";

interface MpesaPaymentProps {
  amount: number;
  onPaymentSuccess: () => void;
  onPaymentFailure: () => void;
}

export const MpesaPayment: React.FC<MpesaPaymentProps> = ({
  amount,
  onPaymentSuccess,
  onPaymentFailure,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMpesaPayment = async () => {
    setLoading(true);
    setError(null);
    try {
      // Placeholder for actual Mpesa payment processing logic
      // Replace this with integration to Mpesa API
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      // Simulate payment success
      const paymentSuccess = true; // Change based on actual response

      if (paymentSuccess) {
        onPaymentSuccess();
      } else {
        throw new Error("Mpesa payment failed.");
      }
    } catch (err: any) {
      console.log("err", err);
      setError(err.message || "An unexpected error occurred.");
      onPaymentFailure();
    } finally {
      setLoading(false);
    }
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
          placeholder="07XXXXXXXX"
        />
      </S.FormGroup>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      <S.PayButton onClick={handleMpesaPayment} disabled={loading}>
        {loading ? "Processing..." : `Pay ${formatCurrency(amount)} via Mpesa`}
      </S.PayButton>
    </S.MpesaPaymentContainer>
  );
};

// Utility function to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
