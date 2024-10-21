import React from "react";
import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const name = "BasedJack";
  const description = "Play BasedJack, a Blackjack game on Farcaster Frames!";
  const ogImage = `${process.env.NEXT_PUBLIC_URL}/api/getGameData`;

  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: "Play",
        action: "post",
        target: `${process.env.NEXT_PUBLIC_URL}/api/startGame`,
      },
      {
        label: "Stats",
        action: "post",
        target: `${process.env.NEXT_PUBLIC_URL}/api/userStats`,
      },
      {
        label: "Cast Game",
        action: "link",
        target: `https://warpcast.com/~/compose?text=${encodeURIComponent("🎰🔥 Check out BasedJack, a Blackjack game on Farcaster Frames! #basedjack #blackjack 🃏✨")}&embeds[]=${encodeURIComponent(process.env.NEXT_PUBLIC_URL || '')}`,
      },
      {
        label: "Rules",
        action: "post",
        target: `${process.env.NEXT_PUBLIC_URL}/api/rules`,
      },
    ],
    image: ogImage,
    post_url: `${process.env.NEXT_PUBLIC_URL}/api/startGame`,
  });

  return {
    title: name,
    description: description,
    openGraph: {
      title: name,
      description: description,
      images: [ogImage],
    },
    other: {
      ...frameMetadata,
      "fc:frame": "vNext",
      "fc:frame:image": ogImage,
      "fc:frame:image:aspect_ratio": "1.91:1",
      "fc:frame:post_url": `${process.env.NEXT_PUBLIC_URL}/api/startGame`,
    },
  };
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to BasedJack!</h1>
      <p>Cast this frame on Farcaster to start playing.</p>
    </div>
  );
}
