import styled from "styled-components";

export const DateContainer = styled.div`
  display: none;
  width: fit-content;
  border: 1px solid grey;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 8px;
  font-size: ${({ theme }) => theme.fontSize.paragraph3};

  &.open {
    display: flex;
  }
`;

export const DateSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Select = styled.select`
  font-size: ${({ theme }) => theme.fontSize.paragraph3};
`;

export const SaveButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.paragraph3};
  padding: 2px 5px;
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  margin-left: 16px;

  &:hover {
    color: ${({ theme }) => theme.colors.surface};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;