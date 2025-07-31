import { LegacyRef, ReactNode } from "react";

interface IDropdownProps {
  name?: string;
  children?: ReactNode;
  refHook: LegacyRef<HTMLSelectElement> | undefined;
}

const selectStyle = {
  borderRadius: '1000px',
  border: '1.5px solid #666666',
  padding: '0 8px',
  fontSize: '14px',
  maxWidth: '70%',
  height: '32px'
};

export default function Dropdown({
  name,
  refHook,
  children,
}: Readonly<IDropdownProps>) {
  return (
    <select ref={refHook} name={name} id={name} style={selectStyle}>
      <option value=""></option>
      {children}
    </select>
  );
}
