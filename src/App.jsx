import "./App.css";
import { Suspense } from "react";
import Bottles from "./components/bottles/Bottles";

function App() {
  return (
    <>
      <Suspense fallback={<h2>Waiting..........</h2>}>
        <Bottles></Bottles>
      </Suspense>
    </>
  );
}

export default App;
