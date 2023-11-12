"use client";

import { useState } from "react";
import "katex/dist/katex.min.css";
import { evaluate } from "mathjs";
import { InlineMath } from "react-katex";

export default function Home() {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        // Evaluate the formula and set the result
        const evaluatedResult = evaluate(formula.replace(/x/g, "*"));
        setResult(evaluatedResult.toString());
      } catch (error) {
        // Handle errors (like invalid expressions) here
        setResult("Error");
      }
    } else {
      setFormula((prev) => prev + value.toString());
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-10">
      <div className="bg-gray-800 text-white p-5 rounded-t-md">
        {/* Display Area for LaTeX Formula */}
        <div className="text-right text-2xl mb-4">
          <InlineMath math={formula} />
        </div>
        {/* Display result */}
        <div className="text-right text-3xl">{result}</div>
      </div>
      <div className="bg-gray-700 grid grid-cols-4 gap-2 p-5 rounded-b-md">
        {/* Number and Operation Buttons */}
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", 0, "/", "(", ")", "="].map(
          (item: any) => (
            <button
              key={item}
              className={`bg-gray-600 text-white py-2 rounded text-2xl focus:outline-none ${
                activeButton === item ? "bg-gray-500" : ""
              }`}
              onMouseDown={() => {
                handleButtonClick(item);
                setActiveButton(item);
              }}
              onMouseUp={() => setActiveButton(null)}
              onMouseLeave={() => setActiveButton(null)}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
}
