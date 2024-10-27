import React from "react";
import { StoreItem } from "modules/shoppingCart/view/components/StoreItem/StoreItem";
import storeItems from "modules/shoppingCart/data/items.json";
import { Header } from "modules/shoppingCart/view/components/Header/Header";
import * as S from "./Styles";

export const Store: React.FC = () => {
  return (
    <>
      <Header />
      <S.StoreWrapper data-testid="Store-wrapper">
        <S.Title>Store</S.Title>
        <S.ItemsGrid>
          {storeItems.map((item) => (
            <S.ItemColumn key={item.id}>
              <StoreItem {...item} />
            </S.ItemColumn>
          ))}
        </S.ItemsGrid>
      </S.StoreWrapper>
    </>
  );
};
