"use client";

import '../styles/globals.css';
import { Provider } from "react-redux";
import { store } from "@/store";

const AppContainer = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  backgroundColor: '#f5f5f5'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div style={AppContainer}>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
