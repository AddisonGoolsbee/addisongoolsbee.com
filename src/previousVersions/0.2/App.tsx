
import { FakeChangelog } from "../../components/FakeChangelog";
import { useCanonical } from "../../utils/canonical";

const App = () => {
  useCanonical();

  return (
    <>
      <FakeChangelog />
      <p class="text-4xl text-black text-center py-20 bg-white h-[100vh]">
        Hey there, how's it going? I'm currently in the process of migrating my
        website to Solid.js, come check back soon for more updates! You can
        reach me at addisongoolsbee@gmail.com
      </p>
      ;
    </>
  );
};

export default App;
