import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./pages/Home"));
const temp = lazy(() => import("./pages/temp"));
const v1_0 = lazy(() => import("./previousVersions/1.0/App"));
const v0_2 = lazy(() => import("./previousVersions/0.2/App"));
const v0_1 = lazy(() => import("./previousVersions/0.1/App"));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/party" component={temp} />
        <Route path="/v1_0" component={v1_0} />
        <Route path="/v0_2" component={v0_2} />
        <Route path="/v0_1" component={v0_1} />
      </Routes>
    </>
  );
}
