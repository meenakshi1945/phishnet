import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="card">
        <h2 style={{ margin: 0, marginBottom: 12, fontSize: 20 }}>
          Start Analysis
        </h2>

        <p style={{ color: "var(--text-light)", marginBottom: 22 }}>
          Submit webpage data for hybrid phishing risk evaluation.
        </p>

        <Link href="/demo">
          <button>Open Console</button>
        </Link>
      </div>
    </Layout>
  );
}


