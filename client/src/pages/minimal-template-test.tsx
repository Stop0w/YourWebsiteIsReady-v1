import { useParams } from "wouter";

export default function MinimalTemplateTest() {
  const params = useParams<{ businessSlug: string; templateNumber: string }>();
  
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightgreen', minHeight: '100vh' }}>
      <h1 style={{ color: 'darkgreen', fontSize: '32px' }}>GOLF TEMPLATE WORKING</h1>
      <p>Business: {params.businessSlug}</p>
      <p>Template: {params.templateNumber}</p>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'white', borderRadius: '5px' }}>
        <h2>Template {params.templateNumber} is now displaying correctly!</h2>
      </div>
    </div>
  );
}