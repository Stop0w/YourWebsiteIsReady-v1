import { createRoot } from "react-dom/client";
import FixGolfApp from "./fix-golf-app";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(<FixGolfApp />);
