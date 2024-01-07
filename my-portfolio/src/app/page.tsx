import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image
        src="/vercel.svg"
        alt="Vecel Logo"
        width={100}
        height={24}
        priority
        />
    </main>
  )
}
