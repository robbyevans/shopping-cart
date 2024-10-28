import React, { useState } from "react";
import * as S from "./Styles";

interface CardPaymentProps {
  amount: number;
  onPaymentSuccess: () => void;
  onPaymentFailure: () => void;
}

export const CardPayment: React.FC<CardPaymentProps> = ({
  amount,
  onPaymentSuccess,
  onPaymentFailure,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCardPayment = async () => {
    setLoading(true);
    setError(null);
    try {
      // Placeholder for actual card payment processing logic
      // Replace this with integration to your payment gateway (e.g., Stripe)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      // Simulate payment success
      const paymentSuccess = true; // Change based on actual response

      if (paymentSuccess) {
        onPaymentSuccess();
      } else {
        throw new Error("Card payment failed.");
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
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      <S.PayButton onClick={handleCardPayment} disabled={loading}>
        {loading ? "Processing..." : `Pay ${formatCurrency(amount)}`}
      </S.PayButton>
    </S.CardPaymentContainer>
  );
};

// Utility function to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
