import styled from "styled-components";

export const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;

  /* Center the grid */
  justify-items: center;

  @media (max-width: 599px) {
    /* Mobile screens: 1 item per row */
    grid-template-columns: 1fr;
  }

  @media (min-width: 600px) and (max-width: 1023px) {
    /* Tablets and small desktops: 2 items per row */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    /* Large screens: 3 items per row */
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ItemColumn = styled.div`
  width: 100%;
`;
