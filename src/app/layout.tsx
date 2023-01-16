import "../styles/global.css";

import { FC, ReactNode } from "react";

import AppProvider from "@/provider";

type Props = { children: ReactNode };

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="ja">
    <head />
    <body>
      <AppProvider>{children}</AppProvider>
    </body>
  </html>
);
export default RootLayout;
