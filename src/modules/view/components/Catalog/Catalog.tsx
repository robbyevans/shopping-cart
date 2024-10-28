import React from "react";
import { ProductCard } from "modules/view/components/ProductCard/ProductCard";
import storeItems from "modules/data/items.json";
import { Header } from "modules/view/components/Header/Header";
import * as S from "./Styles";

export const Catalog: React.FC = () => {
  return (
    <>
      <Header />
      <S.CatalogWrapper data-testid="Store-wrapper">
        <S.Title>Store</S.Title>
        <S.ItemsGrid>
          {storeItems.map((item) => (
            <S.ItemColumn key={item.id}>
              <ProductCard {...item} />
            </S.ItemColumn>
          ))}
        </S.ItemsGrid>
      </S.CatalogWrapper>
    </>
  );
};
