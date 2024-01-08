import Image from 'next/image'

export default function Home() {
  return (
    <main>
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
        <h1>Hi, i'M João Vitor</h1>
        <h2>Hacker</h2>
      </div>
      <div className="experience">
        <h3>Experience</h3>
        <p>1 year working in the area of information security at the company CODATA through the AYTY research laboratory at UFPB</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
          <span>EN - Basic</span>
          <span>PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <span></span>
        </div>
      </div>
    </main>
  )
}
