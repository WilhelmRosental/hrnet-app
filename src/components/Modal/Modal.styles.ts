import styled from "styled-components";

export const ModalWrapper = styled.div<{ $active: boolean }>`
    display: ${({ $active }) => ($active ? "flex" : "none")};
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    height: 80%;
    width: 50%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.surfaceContainer};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const ModalText = styled.p`
    font-size: 32px;
    font-family: ${({ theme }) => theme.fontFamily.title};
    font-weight: 700;
    font-style: italic;
    background: ${({ theme }) => theme.colors.gradient};
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ModalButton = styled.button`
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 100px;
    width: 30%;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
    font-size: 16px;
    font-weight: 700;
    transition: all 200ms ease-in-out;

    &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
    }
`;