import { NextRequest } from 'next/server';

export default function About(req: NextRequest) {
  console.log(JSON.stringify(req.headers));
  return (
    <div>
      <h1>test</h1>
    </div>
  );
}
