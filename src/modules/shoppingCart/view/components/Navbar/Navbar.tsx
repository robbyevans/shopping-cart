import React from "react";
import { useShoppingCart } from "modules/shoppingCart/context/ShoppingCartContext";
import * as S from "./Styles";
import { TiShoppingCart } from "react-icons/ti";

export const Navbar: React.FC = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <S.NavbarContainer>
      <S.NavLinksContainer>
        <S.NavLinks>
          <S.NavLinkItem to="/store">Store</S.NavLinkItem>
          <S.NavLinkItem to="/checkout">checkout</S.NavLinkItem>
          <S.NavLinkItem to="/Settings">Settings</S.NavLinkItem>
        </S.NavLinks>
        {cartQuantity > 0 && (
          <S.CartButton onClick={openCart}>
            <TiShoppingCart size={24} />
            <S.CartBadge>{cartQuantity}</S.CartBadge>
          </S.CartButton>
        )}
      </S.NavLinksContainer>
    </S.NavbarContainer>
  );
};
