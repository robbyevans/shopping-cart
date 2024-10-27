import React from "react";
import { useShoppingCart } from "modules/shoppingCart/context/ShoppingCartContext";
import { formatCurrency } from "modules/shoppingCart/utilities/FormatCurrency";
import * as S from "./Styles";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem: React.FC<StoreItemProps> = ({
  id,
  name,
  price,
  imgUrl,
}) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <S.Card>
      <S.CardImage src={imgUrl} alt={name} />
      <S.CardBody>
        <S.CardTitle>
          <S.ItemName>{name}</S.ItemName>
          <S.ItemPrice>{formatCurrency(price)}</S.ItemPrice>
        </S.CardTitle>
        <S.CardFooter>
          {quantity === 0 ? (
            <S.AddToCartButton onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </S.AddToCartButton>
          ) : (
            <S.QuantityControls>
              <S.QuantityControlButtons>
                <S.QuantityButton onClick={() => decreaseCartQuantity(id)}>
                  -
                </S.QuantityButton>
                <S.QuantityText>
                  <span>{quantity}</span> in cart
                </S.QuantityText>
                <S.QuantityButton onClick={() => increaseCartQuantity(id)}>
                  +
                </S.QuantityButton>
              </S.QuantityControlButtons>
              <S.RemoveButton onClick={() => removeFromCart(id)}>
                Remove
              </S.RemoveButton>
            </S.QuantityControls>
          )}
        </S.CardFooter>
      </S.CardBody>
    </S.Card>
  );
};
