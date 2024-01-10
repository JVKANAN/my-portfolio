import Image from 'next/image'

export function header() {
  return(
    <div className="header">
      
      <Image
      src="/vercel.svg"
      alt="Vecel Logo"
      width={100}
      height={24}
      priority
      />
    </div>
    <div>
      <h1>Hi, i'm João Vitor</h1>
      <h2>Hacker</h2>
    </div>
  )
}
