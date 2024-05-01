import { put, del, list } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';
// import { BLOB_READ_WRITE_TOKEN } from '../../../../../../.env'

const token = process.env.BLOB_READ_WRITE_TOKEN;

export async function DELETE(request: Request){
  const json = await request.json()
  await del(json.url);
  return NextResponse.json({})
}

// TODO: update to handle images only
export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename') || "";

  if(filename && request.body){
    const blob = await put(filename, request.body, {
      access: 'public',
    });
    return NextResponse.json(blob);
  } else {
    return NextResponse.json({ message: "No file found" })
  }
}

export async function GET (request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url')
  const res = await fetch(url!)
  const blob = await res.blob()
  const headers = new Headers()
  headers.set('Content-Type', 'image/*')
  return new NextResponse(blob, { status: 200, statusText: 'OK', headers })
}
