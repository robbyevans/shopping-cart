import React from "react";
import { useShoppingCart } from "modules/shoppingCart/context/ShoppingCartContext";
import { CartItem } from "modules/shoppingCart/view/components/CartItem/CartItem";
import storeItems from "modules/shoppingCart/data/items.json";
import { formatCurrency } from "modules/shoppingCart/utilities/FormatCurrency";
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";
export const CheckoutPage: React.FC = () => {
  const { cartItems } = useShoppingCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <S.CheckoutContainer>
      <S.BackButton onClick={() => navigate("/store")}>
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
          {/* Add your billing and payment form here */}
          <p>Billing and payment form goes here.</p>
        </S.BillingSection>
      </S.CheckoutContent>
    </S.CheckoutContainer>
  );
};

export default CheckoutPage;
