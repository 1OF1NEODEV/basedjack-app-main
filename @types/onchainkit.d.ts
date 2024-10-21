declare module '@coinbase/onchainkit/frame' {
  export function getFrameMessage(request: any): Promise<any>;
  export function getFrameHtmlResponse(options: any): string;
  
  export interface FrameRequest {
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
  }
  // Add other type declarations as needed
}
