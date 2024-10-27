import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  height: 400px;
`;

export const Slide = styled.div<{ active: boolean }>`
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: opacity 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  cursor: pointer;
  user-select: none;
  transform: translateY(-50%);
  &:hover {
    color: #fff;
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  cursor: pointer;
  user-select: none;
  transform: translateY(-50%);
  &:hover {
    color: #fff;
  }
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const CaptionTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

export const CaptionPrice = styled.p`
  font-size: 1.5rem;
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Dot = styled.div<{ active: boolean }>`
  margin: 0 5px;
  cursor: pointer;
  height: 12px;
  width: 12px;
  background-color: ${(props) => (props.active ? "#fff" : "#888")};
  border-radius: 50%;
  transition: background-color 0.3s ease;
`;
