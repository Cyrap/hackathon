import { put,del } from '@vercel/blob';
import { NextResponse } from 'next/server';


export async function DELETE(request: Request):Promise<NextResponse>  {
  const json = await request.json();
  await del(json.url)
  console.log({json})
  return NextResponse.json({});
}

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename') || "";

  // ⚠️ The below code is for App Router Route Handlers only
  if(filename && request.body){
  const blob = await put(filename, request.body, {
    access: 'public',
  });

  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: 'public',
  // })

  return NextResponse.json(blob);
}else{
  return NextResponse.json({message:"NO file name detected"})
}
}

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
