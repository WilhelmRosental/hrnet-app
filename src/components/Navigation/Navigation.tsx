import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Navigation() {
  const pathname = usePathname();

  interface StyledLinkProps {
    isActive: boolean;
  }

  const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
  `;

  const StyledLink = styled(Link)<StyledLinkProps>`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    font-weight: 400;
    padding-bottom: 16px;
    border-bottom: 2px solid #f2f2f2;
    text-decoration: none;
    color: inherit;

    border-bottom: ${({ isActive, theme }) =>
      isActive ? `2px solid ${theme.colors.primary}` : "2px solid #f2f2f2"};
  `;

  return (
    <Nav>
      <StyledLink href="/" isActive={pathname === "/"}>
        Homepage
      </StyledLink>
      <StyledLink href="/employees" isActive={pathname === "/employees"}>
        Current Employees
      </StyledLink>
    </Nav>
  );
}
