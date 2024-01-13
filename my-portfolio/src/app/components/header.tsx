import Image from 'next/image';

export function Header() {
  return (
    <div className="header">
     
      <div>
        <h1>Hi, I'm João Vitor</h1>
        <h2>Hacker</h2>
      </div>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
