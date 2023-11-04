import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./pages/Home"));
// const Point2 = lazy(() => import("./previousVersions/0.2/App"));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/0-2" element={<div>This site was made with Solid</div>} />
        <Route
          path="/0-1"
          element={
            <div class="w-screen h-screen overflow-hidden bg-[#1F2125]">
              <img src="/public/images/initialWebsite.png" alt="Initial Website" class="md:object-cover object-contain md:w-full md:h-full w-full h-full object-center scale-200 md:scale-100" />
            </div>
          }
        />
      </Routes>
    </>
  );
}
