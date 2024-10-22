import { LegacyRef, ReactNode } from "react";
import { StyledSelect } from "./Dropdown.styles";

interface IDropdownProps {
  name?: string;
  children?: ReactNode;
  refHook: LegacyRef<HTMLSelectElement> | undefined;
}

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
