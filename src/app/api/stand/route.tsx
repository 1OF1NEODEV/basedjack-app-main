import { getFrameMessage } from "@coinbase/onchainkit/frame";

// Define FrameRequest type
type FrameRequest = {
  untrustedData: {
    fid: number;
    url: string;
    messageHash: string;
    timestamp: number;
    network: number;
    buttonIndex: number;
    inputText: string;
  };
  trustedData: {
    messageBytes: string;
  };
};

// Use FrameRequest in your code
export async function POST(req: Request) {
  const body: FrameRequest = await req.json();
  const { untrustedData, trustedData } = await getFrameMessage(body);
  // ... rest of your code
}
