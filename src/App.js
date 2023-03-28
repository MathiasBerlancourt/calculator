import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result + e.target.value);
  };
  const clearDisplay = () => {
    setResult("");
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div class="flex flex-col justify-center items-center">
      <div class="bg-gray-100 p-8 rounded-md shadow-lg">
        <h1 class=" flex justify-center text-2xl font-bold mb-4">➕➗✖️🟰</h1>
        <div className=" mx-auto h-80  flex-col flex justify-center items-center ">
          <div className="px-1">
            <div className="border-graay bg-gray-light h-12 text-xl flex justify-start rounded items-center w-52 px-2 ">
              {result === "" ? 0 : result}
            </div>
          </div>
          <div className="flex">
            <div className="grid grid-cols-3">
              <input
                type="button"
                value={"9"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"8"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"7"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"6"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"5"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"4"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"3"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"2"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"1"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"0"}
                className="col-span-2 text-gray-dark border border-gray hover:border-2 h-10 w-20 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"."}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={handleClick}
              />
            </div>
            <div className="">
              <input
                type="button"
                value={"+"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-orange flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"-"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-orange flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"*"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-orange flex justify-center items-center rounded"
                onClick={handleClick}
              />
              <input
                type="button"
                value={"/"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-orange flex justify-center items-center rounded"
                onClick={handleClick}
              />
            </div>
            <div>
              <input
                type="button"
                value={"%"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-orange flex justify-center items-center rounded"
                onClick={handleClick}
              />

              <input
                type="button"
                value={"DEL"}
                className=" text-gray-dark border border-gray hover:border-2 h-10 w-10 bg-gray-light flex justify-center items-center rounded"
                onClick={clearDisplay}
              />
              <input
                className=" text-gray-dark border border-gray hover:border-2 h-20 w-10 bg-green flex justify-center items-center rounded"
                type="button"
                value={"="}
                onClick={calculate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
