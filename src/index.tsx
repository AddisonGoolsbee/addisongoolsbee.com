/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";

import App from './App';
import Point2 from './previousVersions/0.2/App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
);

// render(
//   () => (
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/0.2" element={<Point2 />} />
//       </Routes>
//     </Router>
//   ),
//   document.getElementById("root")
// );

// render(() => <App />, root!);
