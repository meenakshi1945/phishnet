import { useState } from "react";
import axios from "axios";
import ScanForm from "../components/ScanForm";
import ReportCard from "../components/ReportCard";

export default function Demo(){
  const [report, setReport] = useState(null);
  const onSubmit = async (payload) => {
    try {
      const res = await axios.post("http://localhost:8000/api/scan/page", payload);
      setReport(res.data);
    } catch (err) {
      setReport({ error: err.message });
    }
  };

  return (
    <main style={{maxWidth:1000, margin:"36px auto", fontFamily:"Inter, sans-serif"}}>
      <h2>Scan Demo</h2>
      <ScanForm onSubmit={onSubmit} />
      {report && <ReportCard report={report} />}
    </main>
  )
}
