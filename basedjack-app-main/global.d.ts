import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react' {
  export = React;
  export as namespace React;
}

declare module 'next' {
  import { NextPage } from 'next';
  import { AppProps } from 'next/app';
  
  export { NextPage, AppProps };
  
  export interface Metadata {
    title?: string;
    description?: string;
    openGraph?: {
      title?: string;
      description?: string;
      images?: string[];
    };
    other?: {
      [key: string]: any;
    };
  }
}

declare module 'next/server' {
  export { NextRequest, NextResponse } from 'next/server'
}

declare module '@coinbase/onchainkit/frame' {
  export function getFrameMessage(req: any): any
  export function getFrameHtmlResponse(options: any): any
}

declare module 'mongodb' {
  export { MongoClient } from 'mongodb'
}
