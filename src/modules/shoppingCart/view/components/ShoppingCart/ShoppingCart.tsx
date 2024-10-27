import React from "react";
import { useShoppingCart } from "modules/shoppingCart/context/ShoppingCartContext";
import { formatCurrency } from "modules/shoppingCart/utilities/FormatCurrency";
import { CartItem } from "modules/shoppingCart/view/components/CartItem/CartItem";
import storeItems from "modules/shoppingCart/data/items.json";
import * as S from "./Styles";

// Remove the import of 'Link' as it's not used directly here
// import { Link } from 'react-router-dom';

type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <>
      <S.Overlay $isOpen={isOpen} onClick={closeCart} />
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
            <S.CheckoutButton to="/checkout" onClick={closeCart}>
              Checkout
            </S.CheckoutButton>
          </S.ItemsContainer>
        </S.OffcanvasBody>
      </S.OffcanvasContainer>
    </>
  );
};
