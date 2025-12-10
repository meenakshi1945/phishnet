export default function ReportCard({report}){
  if(report.error) return <pre>{report.error}</pre>;
  return (
    <div style={{marginTop:20, border:"1px solid #EEE", padding:16, borderRadius:8}}>
      <h3>Result — score: {report.final_score}</h3>
      <pre style={{whiteSpace:"pre-wrap"}}>{JSON.stringify(report.reasons, null, 2)}</pre>
    </div>
  )
}
