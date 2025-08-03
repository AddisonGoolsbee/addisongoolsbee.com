import { lazy } from "solid-js";

const Home = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
