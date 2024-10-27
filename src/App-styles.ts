import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the wrapper takes at least the full viewport height */
`;

export const ContentWrapper = styled.main`
  flex: 1; /* Allows the content to grow and fill available space */
  padding: 1rem; /* Optional: Adjust padding as needed */
`;
