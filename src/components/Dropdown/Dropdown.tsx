import { LegacyRef, ReactNode } from "react";
import styled from "styled-components";

interface IDropdownProps {
  name?: string;
  children?: ReactNode;
  refHook: LegacyRef<HTMLSelectElement> | undefined;
}

const StyledSelect = styled.select`
  border-radius: 1000px;
  border: 1.5px solid ${({ theme }) => theme.colors.secondary};
  padding: 0 8px;
  font-size: ${({ theme }) => theme.fontSize.paragraph3};
  max-width: 70%;
  height: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.paragraph3Sm};
  }
`;

export default function Dropdown({
  name,
  refHook,
  children,
}: Readonly<IDropdownProps>) {
  return (
    <StyledSelect ref={refHook} name={name} id={name}>
      <option value=""></option>
      {children}
    </StyledSelect>
  );
}
