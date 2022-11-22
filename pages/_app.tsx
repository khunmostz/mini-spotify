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
      categories: 'Podcast',
      list: [
        {
          listTitle: 'title 1',
          listDesc: 'desc 1',
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
