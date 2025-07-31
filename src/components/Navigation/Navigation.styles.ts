import styled from "styled-components";
import Link from "next/link";

interface StyledLinkProps {
    $isActive: boolean;
}

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
`;

export const StyledLink = styled(Link) <StyledLinkProps>`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.paragraph2};
    font-weight: 400;
    padding-bottom: 16px;
    border-bottom: 2px solid #f2f2f2;
    text-decoration: none;
    color: inherit;

    border-bottom: ${({ $isActive, theme }) =>
        $isActive ? `2px solid ${theme.colors.primary}` : "2px solid #f2f2f2"};
`;