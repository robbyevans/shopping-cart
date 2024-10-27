import styled from "styled-components";
import { Link } from "react-router-dom";
import { STATIC_COLORS } from "modules/shoppingCart/view/foundations";

export const FooterContainer = styled.footer`
  background-color: ${STATIC_COLORS.base.primary};
  color: #fff;
  padding: 2rem 1rem 1rem;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BrandSection = styled.div`
  flex: 1 1 200px;
  margin-bottom: 1rem;
`;

export const BrandName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const BrandTagline = styled.p`
  font-size: 1rem;
`;

export const LinksSection = styled.div`
  flex: 1 1 150px;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

export const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialSection = styled.div`
  flex: 1 1 150px;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    color: #cce7ff;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.875rem;
`;
