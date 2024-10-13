import Navigation from "../Navigation";
import styled from "styled-components";

export default function Header() {
  const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 16px 0;
    gap: 32px;
  `;

  const Title = styled.h1`
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.title};
    font-family: ${({ theme }) => theme.fontFamily.title};
    font-weight: 900;
    background: ${({ theme }) => theme.colors.gradient};
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSize.titleSm};
    }
  `;
  return (
    <HeaderWrapper>
      <Title>HRnet</Title>
      <Navigation />
    </HeaderWrapper>
  );
}
