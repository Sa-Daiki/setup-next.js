"use client";

import { CacheProvider } from "@emotion/react";
import { MantineProvider, useEmotionCache } from "@mantine/core";
import { useServerInsertedHTML } from "next/navigation";
import { FC, ReactNode } from "react";

type Props = { children: ReactNode };

const AppProvider: FC<Props> = ({ children }) => {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </CacheProvider>
  );
};

export default AppProvider;
