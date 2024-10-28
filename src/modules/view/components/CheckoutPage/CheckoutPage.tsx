// CheckoutPage.tsx

import React, { useState, useEffect } from "react";
import { useShoppingCart } from "modules/context/ShoppingCartContext";
import { CartItem } from "modules/view/components/CartItem/CartItem";
import storeItems from "modules/data/items.json";
import { formatCurrency } from "modules/utilities/FormatCurrency";
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";
import { CardPayment } from "modules/view/components/Payments/CardPayment/CardPayment";
import { MpesaPayment } from "modules/view/components/Payments/MpesaPayment/MpesaPayment";
import { usePayment } from "modules/hooks/usePayment";

export const CheckoutPage: React.FC = () => {
  const { cartItems } = useShoppingCart();
  const navigate = useNavigate();
  const { isPaymentSuccess, isLoading, error, triggerPayment } = usePayment();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "card" | "mpesa" | null
  >(null);

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const handlePaymentSuccess = () => {
    // Handle post-payment success actions
    alert("Payment Successful!");
    // Optionally, clear the cart or navigate to a confirmation page
    navigate("/confirmation");
  };

  const handlePaymentFailure = () => {
    // Handle post-payment failure actions
    alert("Payment Failed. Please try again.");
  };

  const handlePayment = async (method: "card" | "mpesa", info: any) => {
    await triggerPayment(method, info, totalPrice);
  };

  // Monitor payment success state
  useEffect(() => {
    if (isPaymentSuccess) {
      handlePaymentSuccess();
    } else if (isPaymentSuccess === false) {
      handlePaymentFailure();
    }
  }, [isPaymentSuccess]);

  return (
    <S.CheckoutContainer data-testid="CheckoutPage">
      <S.BackButton onClick={() => navigate("/catalog")}>
        ← Back to Catalog
      </S.BackButton>
      <S.CheckoutContent>
        <S.CartSection>
          <S.SectionTitle>Your Cart</S.SectionTitle>
          {cartItems.length === 0 ? (
            <S.EmptyCart>Your cart is empty.</S.EmptyCart>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <S.Total>Total: {formatCurrency(totalPrice)}</S.Total>
            </>
          )}
        </S.CartSection>
        <S.Divider />
        <S.BillingSection>
          <S.SectionTitle>Billing & Payment</S.SectionTitle>
          {/* Payment Method Selection */}
          <S.PaymentMethodContainer>
            <S.PaymentMethodOption>
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                onChange={() => setSelectedPaymentMethod("card")}
              />
              <label htmlFor="card">Card Payment</label>
            </S.PaymentMethodOption>
            <S.PaymentMethodOption>
              <input
                type="radio"
                id="mpesa"
                name="paymentMethod"
                value="mpesa"
                onChange={() => setSelectedPaymentMethod("mpesa")}
              />
              <label htmlFor="mpesa">Mpesa Payment</label>
            </S.PaymentMethodOption>
          </S.PaymentMethodContainer>

          {/* Render Payment Forms Based on Selection */}
          {selectedPaymentMethod === "card" && (
            <CardPayment
              amount={totalPrice}
              onSubmit={(info) => handlePayment("card", info)}
            />
          )}
          {selectedPaymentMethod === "mpesa" && (
            <MpesaPayment
              amount={totalPrice}
              onSubmit={(info) => handlePayment("mpesa", info)}
            />
          )}

          {/* Display Payment Status */}
          {isLoading && (
            <S.StatusMessage>Processing Payment...</S.StatusMessage>
          )}
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          {/* Removed isPaymentSuccess display as it's handled by useEffect */}
        </S.BillingSection>
      </S.CheckoutContent>
    </S.CheckoutContainer>
  );
};

export default CheckoutPage;
