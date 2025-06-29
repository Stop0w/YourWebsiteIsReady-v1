import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import SimpleApp from "./simple-app";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/:businessSlug/website-:templateNumber" component={SimpleApp} />
          <Route path="/:businessSlug" component={SimpleApp} />
          <Route path="/" component={SimpleApp} />
          <Route component={SimpleApp} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;