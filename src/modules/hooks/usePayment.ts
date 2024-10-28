// src/modules/shoppingCart/hooks/usePayment.ts

import { useState } from "react";

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
        // Extract card info
        const { cardNumber, expiry, cvc } = info as CardPaymentInfo;
        // Implement card payment logic here
        // For example, call the CardPayment component's payment handler
        // Here, we'll simulate the payment process
        await simulateCardPayment(cardNumber, expiry, cvc, amount);
      } else if (method === "mpesa") {
        // Extract Mpesa info
        const { phoneNumber } = info as MpesaPaymentInfo;
        // Implement Mpesa payment logic here
        // For example, call the MpesaPayment component's payment handler
        // Here, we'll simulate the payment process
        await simulateMpesaPayment(phoneNumber, amount);
      }

      // If payment is successful
      setIsPaymentSuccess(true);
    } catch (err: any) {
      setError(err.message || "Payment failed.");
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

// Simulate Card Payment API call
const simulateCardPayment = (
  cardNumber: string,
  expiry: string,
  cvc: string,
  amount: number
): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      // Simple validation simulation
      if (cardNumber && expiry && cvc && amount > 0) {
        resolve();
      } else {
        reject(new Error("Invalid card details or amount."));
      }
    }, 2000);
  });
};

// Simulate Mpesa Payment API call
const simulateMpesaPayment = (
  phoneNumber: string,
  amount: number
): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Simulate API delay
    setTimeout(() => {
      // Simple validation simulation
      const phoneRegex = /^07\d{8}$/;
      if (phoneRegex.test(phoneNumber) && amount > 0) {
        resolve();
      } else {
        reject(new Error("Invalid phone number or amount."));
      }
    }, 2000);
  });
};
