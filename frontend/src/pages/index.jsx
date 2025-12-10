import Link from 'next/link'
export default function Home(){
  return (
    <main style={{maxWidth:900, margin:"48px auto", fontFamily:"Inter, sans-serif"}}>
      <h1>PhishNet — Demo</h1>
      <p>Minimal client to send page HTML/JS for scanning.</p>
      <Link href="/demo">Open Scan Demo</Link>
    </main>
  )
}
