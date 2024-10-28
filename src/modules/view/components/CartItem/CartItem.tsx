import React from "react";
import { useShoppingCart } from "modules/context/ShoppingCartContext";
import storeItems from "modules/data/items.json";
import { formatCurrency } from "modules/utilities/FormatCurrency";
import * as S from "./Styles";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (!item) return null;

  return (
    <S.CartItemContainer data-testid="CartItem">
      <S.ItemImage src={item.imgUrl} alt={item.name} />
      <S.ItemContentWrapper>
        <S.ItemDetails>
          <S.ItemName>
            {item.name}{" "}
            {quantity > 1 && <S.ItemQuantity>x{quantity}</S.ItemQuantity>}
          </S.ItemName>
          <S.ItemPrice>{formatCurrency(item.price)}</S.ItemPrice>
        </S.ItemDetails>
        <S.TotalPrice>{formatCurrency(item.price * quantity)}</S.TotalPrice>
        <S.RemoveButton onClick={() => removeFromCart(item.id)}>
          &times;
        </S.RemoveButton>
      </S.ItemContentWrapper>
    </S.CartItemContainer>
  );
};
