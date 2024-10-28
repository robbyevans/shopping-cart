import React from "react";
import { useShoppingCart } from "modules/context/ShoppingCartContext";
import { formatCurrency } from "modules/utilities/FormatCurrency";
import { CartItem } from "modules/view/components/CartItem/CartItem";
import storeItems from "modules/data/items.json";
import * as S from "./Styles";

type ShoppingCartProps = {
  isOpen: boolean;
  isHideCheckoutButton?: boolean;
};

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isOpen,
  isHideCheckoutButton = false,
}) => {
  const { closeCart, cartItems } = useShoppingCart();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <>
      <S.Overlay
        $isOpen={isOpen}
        onClick={closeCart}
        data-testid="ShoppingCart"
      />
      <S.OffcanvasContainer $isOpen={isOpen}>
        <S.OffcanvasHeader>
          <S.OffcanvasTitle>Cart</S.OffcanvasTitle>
          <S.CloseButton onClick={closeCart}>&times;</S.CloseButton>
        </S.OffcanvasHeader>
        <S.OffcanvasBody>
          <S.ItemsContainer>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <S.Total>Total: {formatCurrency(totalPrice)}</S.Total>
            {!isHideCheckoutButton && (
              <S.CheckoutButton to="/checkout" onClick={closeCart}>
                Checkout
              </S.CheckoutButton>
            )}
          </S.ItemsContainer>
        </S.OffcanvasBody>
      </S.OffcanvasContainer>
    </>
  );
};
