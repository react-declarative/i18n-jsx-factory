import "./i18n";

import { createRoot } from "react-dom/client";

const wrappedApp = (
  <span>
    lorem ipsum
  </span>
);

const container = document.getElementById("root")!;

const root = createRoot(container);

root.render(wrappedApp);
