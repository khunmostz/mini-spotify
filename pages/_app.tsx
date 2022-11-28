import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { SpotifyProps } from "model/Typings";

export const SpotifyContext = React.createContext<any | SpotifyProps>(null!);

export default function App({ Component, pageProps }: AppProps) {
  const initailValue: SpotifyProps[] = [
    {
      id: 1,
      title: "podcast 01",
      categories: "Podcast",
      list: [
        {
          listTitle: "title 1",
          listDesc: "desc 1",
        },
      ],
    },
    {
      id: 2,
      title: "podcast 02",
      categories: "Podcast",
      list: [
        {
          listTitle: "title 2",
          listDesc: "desc 2",
        },
      ],
    },
  ];

  return (
    <SpotifyContext.Provider value={initailValue}>
      <Component {...pageProps} />
    </SpotifyContext.Provider>
  );
}
