import { usePathname } from "next/navigation";
import { Nav, StyledLink } from "./Navigation.styles";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <Nav>
      <StyledLink href="/" $isActive={pathname === "/"}>
        Homepage
      </StyledLink>
      <StyledLink href="/employees" $isActive={pathname === "/employees"}>
        Current Employees
      </StyledLink>
    </Nav>
  );
}
