import React from "react";
import { useShoppingCart } from "modules/shoppingCart/context/ShoppingCartContext";
import storeItems from "modules/shoppingCart/data/items.json";
import { formatCurrency } from "modules/shoppingCart/utilities/FormatCurrency";
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
    <S.CartItemContainer>
      <S.ItemImage src={item.imgUrl} alt={item.name} />
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
    </S.CartItemContainer>
  );
};
