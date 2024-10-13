"use client";
import Form from "@/components/Form";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: ${({ theme }) =>
    theme.fontSize.paragraph}; /* Utilisation de la taille de police du thème */
  font-weight: 500;
  margin: 0;
`;

export default function Home() {
  return (
    <>
      <H2>Create Employee</H2>
      <Form />
    </>
  );
}
