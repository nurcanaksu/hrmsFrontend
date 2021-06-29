import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.js";

export default function Footer() {
  return (
    <div>
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>Use Of The Site</Heading>
              <FooterLink href="#">General Conditions</FooterLink>
              <FooterLink href="#">Sitemap</FooterLink>
            </Column>
            <Column>
              <Heading>Corporate</Heading>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
            </Column>
            <Column>
              <Heading>Help</Heading>
              <FooterLink href="#">I have a question</FooterLink>
              <FooterLink href="#">I have a suggestion</FooterLink>
              <FooterLink href="#">Frequently Asked Questions</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </div>
  );
}
