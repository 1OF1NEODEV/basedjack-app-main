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
