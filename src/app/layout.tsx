"use client";

import StyledComponentsRegistry from "../lib/registry";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/globalStyles";
import styled from "styled-components";
import Header from "@/components/Header";

const Main = styled.main`
  height: 100%;
  max-width: 792px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.surface};
  margin: 16px 0;
  border-radius: 10px;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
              <GlobalStyles theme={theme} />
              <Main>
                <Header />
                {children}
              </Main>
            </ThemeProvider>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
