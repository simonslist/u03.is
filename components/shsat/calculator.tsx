import * as React from "react";
import { useState } from "react";
import Scores from "./scores"
const scaledArray = [
  0, 12, 30, 39, 54, 68, 79, 90, 100, 111, 118, 126, 135, 141, 147, 153, 158,
  163, 169, 173, 178, 183, 187, 191, 194, 197, 201, 204, 208, 212, 215, 219,
  222, 226, 229, 232, 236, 240, 243, 247, 250, 254, 257, 261, 265, 269, 274,
  278, 283, 290, 298, 305, 314, 323, 333, 342, 352, 360,
];

const slopeArray = [
  12, 30, 39, 54, 68, 79, 90, 100, 111, 118, 126, 135, 141, 147, 153, 158, 163,
  169, 173, 178, 183, 187, 191, 194, 197, 201, 204, 208, 212, 215, 219, 222,
  226, 229, 232, 236, 240, 243, 247, 250, 254, 257, 261, 265, 269, 274, 278,
  283, 290, 298, 305, 314, 323, 333, 342, 352, 360, 360,
];

const Calculator = ({ data, location }) => {
  var [rawEla, setRawEla] = useState(0);
  var [rawMath, setRawMath] = useState(0);
  var [scaledEla, setScaledEla] = useState("");
  var [scaledMath, setScaledMath] = useState("");
  var [elaSlope, setElaSlope] = useState(0);
  var [mathSlope, setMathSlope] = useState(0);
  var [result, setResult] = useState(0);

  const _handleSubmit = async (e) => {
    setScaledEla(scaledArray[rawEla]);
    setScaledMath(scaledArray[rawMath]);
    setElaSlope(slopeArray[rawEla] - scaledArray[rawEla]);
    setMathSlope(slopeArray[rawMath] - scaledArray[rawMath]);
    setResult(scaledArray[rawEla] + scaledArray[rawMath]);
    var nextEla = rawEla + 1;
  };

  return (
    <div>
      <form
        className="flex flex-col px-5 py-5 bg-slate-100 dark:bg-slate-800 rounded-xl m-3 border border-slate-600 drop-shadow-lg"
        onSubmit={(event) => {
          event.preventDefault();
          _handleSubmit(null);
        }}
      >
        <div className="flex flex-col">
          <label htmlFor="ela" className="font-bold">
            ELA: {scaledEla}
          </label>
          <input
            type="number"
            id="ela"
            name="ela"
            min="0"
            max="57"
            value={rawEla}
            onChange={(event) => setRawEla(event.currentTarget.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="math" className="font-bold mt-3">
            Math: {scaledMath}
          </label>

          <input
            type="number"
            id="math"
            name="math"
            min="0"
            max="57"
            value={rawMath}
            onChange={(event) => setRawMath(event.currentTarget.value)}
          />
          <div className="text-right"></div>
        </div>

        <button
          type="submit"
          className=" rounded border p-2 my-4 py-2 bg-blue-900 text-white/90"
        >
          Calculate
        </button>
        <div className="text-xl  py-3 text-center">
          Total scaled score: {result}
        </div>
        <section className="p-3 my-2 border-2 border-blue-800">
          <div>Next additional ELA = {elaSlope} points</div>
          <div>Next additional Math = {mathSlope} points</div>
        </section>
        <section className="p-3 my-2 border-2 border-blue-800">
          <div>Best Case Scenario = {elaSlope} points</div>
          <div>Worst Case Scenario = {mathSlope} points</div>
          <div>Average Scenario = {mathSlope} points</div>
        </section>
      </form>
      <Scores/>
    </div>
  );
  
};

export default Calculator;
