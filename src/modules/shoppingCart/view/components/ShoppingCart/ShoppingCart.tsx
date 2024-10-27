import React from "react";
import { useShoppingCart } from "modules/shoppingCart/context/ShoppingCartContext";
import { formatCurrency } from "modules/shoppingCart/utilities/FormatCurrency";
import { CartItem } from "modules/shoppingCart/view/components/CartItem/CartItem";
import storeItems from "modules/shoppingCart/data/items.json";
import * as S from "./Styles";

type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();

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
            <S.Total>
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </S.Total>
          </S.ItemsContainer>
        </S.OffcanvasBody>
      </S.OffcanvasContainer>
    </>
  );
};
