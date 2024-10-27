// ProductCard.tsx

import React, { useState } from "react";
import { useShoppingCart } from "modules/shoppingCart/context/ShoppingCartContext";
import { formatCurrency } from "modules/shoppingCart/utilities/FormatCurrency";
import * as S from "./Styles";

type TProductCardProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
};

export const ProductCard: React.FC<TProductCardProps> = ({
  id,
  name,
  price,
  imgUrl,
  description,
}) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <S.Card>
        <S.CardImage src={imgUrl} alt={name} />
        <S.CardBody>
          <S.CardTitle>
            <S.ItemName>{name}</S.ItemName>
            <S.ItemPrice>{formatCurrency(price)}</S.ItemPrice>
          </S.CardTitle>
          {/* Description Section */}
          <S.DescriptionContainer>
            <S.ProductDescription>{description}</S.ProductDescription>
            <S.MoreButton onClick={() => setIsModalOpen(true)}>
              ...more
            </S.MoreButton>
          </S.DescriptionContainer>
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
              </S.QuantityControls>
            )}
          </S.CardFooter>
        </S.CardBody>
      </S.Card>
      {/* Modal */}
      {isModalOpen && (
        <S.ModalOverlay onClick={() => setIsModalOpen(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseModalButton onClick={() => setIsModalOpen(false)}>
              &times;
            </S.CloseModalButton>
            <S.ModalImage src={imgUrl} alt={name} />
            <S.ModalDescription>{description}</S.ModalDescription>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
};
