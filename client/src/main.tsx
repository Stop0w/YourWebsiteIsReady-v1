import { createRoot } from "react-dom/client";
import CleanGolfApp from "./clean-golf";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(<CleanGolfApp />);
