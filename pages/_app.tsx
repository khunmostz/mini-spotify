import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { SpotifyProps } from "model/Typings";

export const SpotifyContext = React.createContext<any | SpotifyProps>(null!);

export default function App({ Component, pageProps }: AppProps) {

  var currentDate = new Date()
  var day = currentDate.getDate()
  var month = currentDate.getMonth() + 1
  var year = currentDate.getFullYear()

  const initailValue: SpotifyProps[] = [
    {
      id: 1,
      title: 'The Ghost Radio',
      little: 'The Ghost Radio',
      categories: 'พอดแคสต์',
      image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
      list: [
        {
          id: '1',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },
        {
          id: '2',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },
        {
          id: '3',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },
        {
          id: '4',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },
        {
          id: '5',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },
        {
          id: '6',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },
        {
          id: '7',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },
        {
          id: '8',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },
        {
          id: '9',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },
        {
          id: '10',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },
        {
          id: '11',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        }, {
          id: '12',
          track: 'มาราธอน ขนหัวลุก - คุณเอ็ม',
          album: 'รวมตอน',
          datetime: `${day}/${month}/${year}`,
          image: 'https://pbs.twimg.com/profile_images/1287674700861075456/Vui6MxQ5_400x400.jpg',
          time: '2 ชั่วโมง 10 นาที',
        },

      ]
    },
  ]


  return (
    <SpotifyContext.Provider value={initailValue}>
      <Component {...pageProps} />
    </SpotifyContext.Provider>
  );
}
