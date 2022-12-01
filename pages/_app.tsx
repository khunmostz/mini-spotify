import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { SpotifyProps } from 'model/Typings';



export const SpotifyContext = React.createContext<any>(null!);


export default function App({ Component, pageProps }: AppProps) {

  const Spotify: SpotifyProps[] = [
    {
      id: 1,
      title: 'podcast 01',
      categories: 'พอดแคสต์',
      list: [
        {
          listTitle: 'title 1',
          listDesc: 'desc 1',
        }
      ]
    },
    {
      id: 2,
      title: 'แดนส์',
      categories: 'แดนส์',
      list: [
        {
          listTitle: 'title 2',
          listDesc: 'desc 2',
        }
      ]
    }
  ]


  return (
    <SpotifyContext.Provider value={Spotify}>
      <Component {...pageProps} />
    </SpotifyContext.Provider>
  )
}
