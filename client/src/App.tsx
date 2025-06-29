import { Switch, Route } from "wouter";
import TemplatePreviewSimple from "@/pages/template-preview-simple";

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
      <h1>APP IS WORKING</h1>
      <Switch>
        <Route path="/:businessSlug/website-:templateNumber" component={TemplatePreviewSimple} />
        <Route path="/" component={() => <div style={{ padding: '20px', backgroundColor: 'lightgreen' }}><h1>HOME PAGE</h1></div>} />
        <Route component={() => <div style={{ padding: '20px', backgroundColor: 'pink' }}><h1>404 NOT FOUND</h1></div>} />
      </Switch>
    </div>
  );
}

export default App;
