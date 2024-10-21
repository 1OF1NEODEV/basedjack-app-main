import React from "react";
import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const name = "WavyJack";

  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: "Play",
        action: "post",
        target: `${process.env.NEXT_PUBLIC_URL}/api/startGame`,
      },
      {
        label: `Stats`,
        action: "post",
        target: `${process.env.NEXT_PUBLIC_URL}/api/userStats`,
      },
      {
        label: `Cast Game`,
        action: "link",
        target: `https://warpcast.com/~/compose?text=%F0%9F%8E%89%F0%9F%94%A5+Check+out+this+WavyJack+game%2C+a+classic+blackjack+game+on+Farcaster+Frames!+%23wavyjack+%23blackjack+%F0%9F%83%8F%E2%9C%A8&embeds%5B%5D=${encodeURIComponent(process.env.NEXT_PUBLIC_URL || '')}`,
      },
      {
        label: `Rules`,
        action: "post",
        target: `${process.env.NEXT_PUBLIC_URL}/api/rules`,
      },
    ],
    image: `${process.env.NEXT_PUBLIC_URL}/api/getGameData`,
  });

  return {
    title: name,
    description: "WavyJack game on Farcaster",
    openGraph: {
      title: name,
      description: "WavyJack game on Farcaster",
      images: [`${process.env.NEXT_PUBLIC_URL}/download.jpg`],
    },
    other: {
      ...frameMetadata,
      "fc:frame:image:aspect_ratio": "1.91:1",
    },
  };
}

export default function Page(): JSX.Element {
  return (
    <div>
      Paste this link on your warpcast and Cast it to play WavyJack!
    </div>
  );
}
