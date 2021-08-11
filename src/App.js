import React, {useState,useEffect} from "react";
import { RecoilRoot,useRecoilState,useRecoilValue } from "recoil";
import countState from "./atom";

function Count2() {
  const count = useRecoilValue(countState);
  return (
    <p>{count}</p>
  )
}

function Count() {
  const [count, setCount] = useRecoilState(countState);

  const handleClick = () => {
    setCount(count + 1);
  }
    return (
      <div>
        <button onClick={handleClick}>증가</button>
        <p>{count}</p>
      </div>
    )
}

function Main() {
  return (
    <>
    <Count />
    <Count2 />
    <Count2 />
    </>
  )
}

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

export default App;