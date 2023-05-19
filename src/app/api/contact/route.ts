import { NextApiRequest } from "next"

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request: NextApiRequest) {
  console.log(request.body)
  return new Response(request.body)
}
