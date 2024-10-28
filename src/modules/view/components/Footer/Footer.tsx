import React from "react";
import * as S from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer data-testid="Footer">
      <S.FooterContent>
        {/* ... (BrandSection and LinksSection as before) ... */}
        <S.SocialSection>
          <S.SectionTitle>Follow Us</S.SectionTitle>
          <S.SocialIcons>
            <S.SocialIcon
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </S.SocialIcon>
            <S.SocialIcon
              href="https://www.twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </S.SocialIcon>
            <S.SocialIcon
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </S.SocialIcon>
            <S.SocialIcon
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </S.SocialIcon>
          </S.SocialIcons>
        </S.SocialSection>
      </S.FooterContent>
      <S.FooterBottom>
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </S.FooterBottom>
    </S.FooterContainer>
  );
};
