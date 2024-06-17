import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer } from "@react-three/a11y";
import Experience from "@components/Experience";
import { Leva } from "leva";
import { Perf } from "r3f-perf";

const DEBUG = window.location.hash === "#debug";

function App() {
  return (
    <>
      <Leva oneLineLabels collapsed hidden={!DEBUG} />

      <div className="absolute left-0 top-0 h-svh w-full select-none p-0">
        <Canvas>
          <Experience />
          {DEBUG && <Perf position={"top-left"} />}
        </Canvas>
        <A11yAnnouncer />
      </div>
    </>
  );
}

export default App;
