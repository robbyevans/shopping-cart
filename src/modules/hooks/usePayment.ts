// src/modules/hooks/usePayment.ts

import { useState } from "react";
import axios from "axios";

// Define the types of payment methods
type PaymentMethod = "card" | "mpesa";

// Define the parameters required for each payment method
interface CardPaymentInfo {
  cardNumber: string;
  expiry: string;
  cvc: string;
}

interface MpesaPaymentInfo {
  phoneNumber: string;
}

type PaymentInfo = CardPaymentInfo | MpesaPaymentInfo;

// Define the return type of the hook
interface UsePaymentReturn {
  isPaymentSuccess: boolean | null;
  isLoading: boolean;
  error: string | null;
  triggerPayment: (
    method: PaymentMethod,
    info: PaymentInfo,
    amount: number
  ) => Promise<void>;
}

export const usePayment = (): UsePaymentReturn => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState<boolean | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const triggerPayment = async (
    method: PaymentMethod,
    info: PaymentInfo,
    amount: number
  ) => {
    setIsLoading(true);
    setError(null);
    setIsPaymentSuccess(null);

    try {
      if (method === "card") {
        // Implement actual card payment logic here
        // For example, integrate with Stripe or another payment gateway
        // For demonstration, we'll simulate the payment process
        await simulateCardPayment(info as CardPaymentInfo, amount);
      } else if (method === "mpesa") {
        // Implement Mpesa payment logic by calling the backend
        const { phoneNumber } = info as MpesaPaymentInfo;

        const response = await axios.post("http://localhost:5000/stkpush", {
          phoneNumber,
          amount,
          accountReference: "Order123", // Replace with actual account reference
          transactionDesc: "Payment for Order123", // Replace with actual description
        });

        // Corrected ResponseCode comparison
        if (response.data.ResponseCode !== "0") {
          throw new Error(
            response.data.errorMessage || "Mpesa payment failed."
          );
        }

        // Note: Actual payment confirmation comes via webhook.
        // Here, we're assuming success based on ResponseCode.
        setIsPaymentSuccess(true);
      }

      // If payment is successful
      setIsPaymentSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
      setIsPaymentSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isPaymentSuccess,
    isLoading,
    error,
    triggerPayment,
  };
};

// Simulate Card Payment API call (Replace with actual integration)
const simulateCardPayment = (
  cardInfo: CardPaymentInfo,
  amount: number
): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      // Simple validation simulation
      const { cardNumber, expiry, cvc } = cardInfo;
      if (cardNumber && expiry && cvc && amount > 0) {
        resolve();
      } else {
        reject(new Error("Invalid card details or amount."));
      }
    }, 2000);
  });
};
