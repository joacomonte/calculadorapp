/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import "katex/dist/katex.min.css";
import { evaluate } from "mathjs";
import { InlineMath } from "react-katex";
import { ComputeEngine } from "@cortex-js/compute-engine";
import ButtonComponent from "./_compontents/ButtonComponent";

export default function Home() {
  const [input, setInput] = useState<any>("");
  const [latex, setLatex] = useState<any>("");
  const [result, setResult] = useState<any>("");
  const ce = new ComputeEngine();

  useEffect(() => {
    // Function to convert input to LaTeX
    const convertToLatex = (expression: string | null) => {
      const parsed = ce.parse(expression);
      if (parsed) {
        let output = ce.serialize(parsed, { canonical: false });
        if (output.includes("error")) {
          return expression;
        } else {
          return output;
        }
      }
    };

    setLatex(convertToLatex(input));
  }, [input]);

  const handleChange = (e: { target: { value: any } }) => {
    setInput(e.target.value);
  };

  const handleButtonClick = (character: string) => {
    if (character === "back") {
      setInput(input.slice(0, -1));
      return;
    }
    if (character === "AC") {
      setInput("");
      setResult("");
      return;
    }
    if (character === "=") {
      calculateResult();
      return;
    } else {
      setInput(input + character);
    }
  };

  const calculateResult = () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      setResult("Error in expression");
    }
  };

  return (
    <>
      <div className="max-w-[305px] mx-auto mt-10 bg-[#545454] p-2 rounded-lg">
        <label className="text-[#3b3b3b] font-bold p-2">CalculadorApp</label>
        <div className=" text-white p-2 mb-2 mt-1 rounded-md bg-[#222222]">
          <div className="text-right text-3xl mb-4 h-[43px] min-h-[43px] ">
            <InlineMath math={latex} />
          </div>
          <div className="text-gray-500 text-right h-[32px] min-h-[32px] text-2xl">
            {result}
          </div>
        </div>
        <div>
          <ButtonComponent onButtonClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
}

{
  /* <button className="button" type="button">
            <span className="button-inside light-gray">Shift</span>
          </button> */
}

{
  /* <input
        className="bg-gray-400"
        type="text"
        value={input}
        onChange={handleChange}
      /> */
}

{
  /* <div className="h-[1000px] w-[1000px]">
        <IntroAnimation></IntroAnimation>
      </div> */
}
