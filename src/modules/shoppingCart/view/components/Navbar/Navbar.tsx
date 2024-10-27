import React from "react";
import { useShoppingCart } from "modules/shoppingCart/context/ShoppingCartContext";
import * as S from "./Styles";

export const Navbar: React.FC = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <S.NavbarContainer>
      <S.NavLinksContainer>
        <S.NavLinks>
          <S.NavLinkItem to="/" end>
            Home
          </S.NavLinkItem>
          <S.NavLinkItem to="/store">Store</S.NavLinkItem>
          <S.NavLinkItem to="/about">About</S.NavLinkItem>
        </S.NavLinks>
        {cartQuantity > 0 && (
          <S.CartButton onClick={openCart}>
            <S.CartIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              {/* SVG Path */}
            </S.CartIcon>
            <S.CartBadge>{cartQuantity}</S.CartBadge>
          </S.CartButton>
        )}
      </S.NavLinksContainer>
    </S.NavbarContainer>
  );
};
