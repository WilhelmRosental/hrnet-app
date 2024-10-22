import Navigation from "../Navigation";
import { HeaderWrapper, Title } from "./Header.styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>HRnet</Title>
      <Navigation />
    </HeaderWrapper>
  );
}
