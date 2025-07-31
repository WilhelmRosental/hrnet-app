import styled from "styled-components";

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 16px 8px;
`;

export const Fieldset = styled.fieldset`
    border: none;
    border-top: 1.5px solid ${({ theme }) => theme.colors.primary};
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 8px;

    legend {
      color: ${({ theme }) => theme.colors.primary};
      padding: 0 8px;
      font-size: ${({ theme }) => theme.fontSize.paragraph2};

      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: ${({ theme }) => theme.fontSize.paragraph2Sm};
      }
    }
`;

export const Label = styled.label`
    margin-left: 16px;
    text-decoration: underline ${({ theme }) => theme.colors.primary};
    font-style: italic;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.paragraph3};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSize.paragraph3Sm};
    }
`;

export const Input = styled.input`
    border-radius: 1000px;
    border: 1.5px solid ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.surface};
    padding: 0 8px;
    font-size: ${({ theme }) => theme.fontSize.paragraph3};
    max-width: 70%;
    height: 32px;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSize.paragraph3Sm};
    }
`;

export const Button = styled.button`
    margin-left: auto;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 100px;
    width: 30%;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
    font-weight: 400;
    transition: all 200ms ease-in-out;
    font-size: ${({ theme }) => theme.fontSize.paragraph3};

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSize.paragraph3Sm};
    }
`;

