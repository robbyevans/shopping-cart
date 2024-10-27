import React, { useState, useEffect } from "react";
import storeItems from "modules/shoppingCart/data/items.json";
import { formatCurrency } from "modules/shoppingCart/utilities/FormatCurrency";
import * as S from "./Styles";

export const Header: React.FC = () => {
  // Select featured items (e.g., items with a 'featured' property or first few items)
  const featuredItems = storeItems.slice(0, 5); // Adjust based on your data

  const [currentIndex, setCurrentIndex] = useState(0);
  const length = featuredItems.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  };

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  if (length <= 0) {
    return null;
  }

  return (
    <S.HeaderContainer>
      <S.Carousel>
        {featuredItems.map((item, index) => (
          <S.Slide key={item.id} active={index === currentIndex}>
            {index === currentIndex && (
              <>
                <S.Image src={item.imgUrl} alt={item.name} />
                <S.Caption>
                  <S.CaptionTitle>{item.name}</S.CaptionTitle>
                  <S.CaptionPrice>{formatCurrency(item.price)}</S.CaptionPrice>
                </S.Caption>
              </>
            )}
          </S.Slide>
        ))}
        <S.LeftArrow onClick={prevSlide}>&#10094;</S.LeftArrow>
        <S.RightArrow onClick={nextSlide}>&#10095;</S.RightArrow>
        <S.Dots>
          {featuredItems.map((_, index) => (
            <S.Dot
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </S.Dots>
      </S.Carousel>
    </S.HeaderContainer>
  );
};

// Don't forget to import the formatCurrency function
