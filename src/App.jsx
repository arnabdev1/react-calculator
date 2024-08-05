import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [insideValue, setInsideValue] = useState("");

  const sin = () => {
    setInputValue(inputValue+"sin(")
    setInsideValue(insideValue+"Math.sin(")
  };

  const cos = () => {
    setInputValue(inputValue + "cos(");
    setInsideValue(insideValue + "Math.cos(");
  };

  const tan = () => {
    setInputValue(inputValue + "tan(");
    setInsideValue(insideValue + "Math.tan(");
  };

  const pow = () => {
    setInputValue(inputValue + "^");
    setInsideValue(insideValue + "**");
  };

  const sqrt = () => {
    setInputValue(inputValue + "√(");
    setInsideValue(insideValue + "Math.sqrt(");
  };

  const log = () => {
    setInputValue(inputValue + "log(");
    setInsideValue(insideValue + "Math.log10(");
  };
  const pi = () => {
    setInputValue(inputValue + "π");
    setInsideValue(insideValue + "Math.PI");
  };


  const e = () => {
    setInputValue(inputValue + "e");
    setInsideValue(insideValue + "Math.E");
  };



  const fact = () => {
    let f = 1;
    const num = parseInt(inputValue);
    for (let i = 1; i <= num; i++) {
      f *= i;
    }
    setInputValue(f.toString());
  };

  const backspc = () => {
    setInputValue(inputValue.substr(0, inputValue.length - 1));
    setInsideValue(insideValue.substr(0, insideValue.length - 1));
  };

  const clearInput = () => {
    setInputValue("");
    setInsideValue("");
  };

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
    setInsideValue(insideValue + value)
  };

  const evaluateExpression = () => {
    try {
      setInputValue(eval(insideValue).toString());
      setInsideValue(eval(insideValue).toString());
    } catch (error) {
      setInputValue("Error");
      setInsideValue("");
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 3, ease: "easeIn" },
        }}
        className="container sm:w-[605px] sm:p-4 w-[95vw] p-2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="opacity-40 ml-2 text-[12px]"
        >
          Arnab's Calculator
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="display w-full h-[70px]"
        >
          <input
            className="w-full"
            id="screen"
            type="text"
            value={inputValue}
            readOnly
            placeholder="0"
          />
        </motion.div>
        <div className="btns">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.2, duration: 0.4, ease: "easeIn" },
            }}
            className="row flex sm:flex-row flex-col"
          >
            <div className="flex flex-row items-center justify-center">
              <button id="ce" onClick={backspc}>
                DEL
              </button>
              <button onClick={sin}>sin</button>
              <button onClick={cos}>cos</button>
            </div>
            <div className="flex flex-row items-center justify-center">
              <button onClick={tan}>tan</button>
              {/* <button onClick={() => handleButtonClick("log(")}>log</button> */}
              <button onClick={log}>log</button>
              <button className="" id="ac" onClick={clearInput}>
                AC
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className=" row flex flex-row"
          >
            <button onClick={fact}>
              {/* <button  onClick={() => handleButtonClick("!")}> */}
              x!
            </button>

            {/* <button onClick={pi}>π</button> */}
            <button onClick={pi}>π</button>

            {/* <div className="btn_num"> */}
            <button
              className="btn_num bg-[#cbd5e1] "
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>
            {/* </div> */}
            {/* <div className="btn_num"> */}
            <button
              className="btn_num bg-[#cbd5e1] "
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>
            {/* </div> */}
            {/* <div className="btn_num"> */}
            <button
              className="btn_num bg-[#cbd5e1] "
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
            {/* </div> */}
            <button onClick={() => handleButtonClick("/")} className="btn">
              ÷
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.6, duration: 0.4, ease: "easeIn" },
            }}
            className="row flex flex-row"
          >
            <button onClick={() => handleButtonClick("(")} className="btn">
              (
            </button>
            <button onClick={() => handleButtonClick(")")} className="btn">
              )
            </button>
            {/* <div className="btn_num"> */}
            <button
              className="btn_num bg-[#cbd5e1] "
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>
            {/* </div> */}
            {/* <div className="btn_num"> */}
            <button
              className="btn_num bg-[#cbd5e1] "
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>
            {/* </div> */}
            {/* <div className="btn_num"> */}
            <button
              className="btn_num bg-[#cbd5e1] "
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
            {/* </div> */}
            <button onClick={() => handleButtonClick("*")} className="btn">
              ×
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.8, duration: 0.4, ease: "easeIn" },
            }}
            className="row flex flex-row"
          >
            <button onClick={() => handleButtonClick("%")} className="btn">
              %
            </button>
            <button onClick={sqrt}>√</button>
            {/* <div className="btn_num"> */}
            <button
              className="btn_num bg-[#cbd5e1] "
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>
            {/* </div> */}
            {/* <div className="btn_num"> */}
            <button
              className="btn_num bg-[#cbd5e1] "
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>
            {/* </div> */}
            {/* <div className="btn_num"> */}
            <button
              className="btn_num bg-[#cbd5e1] "
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
            {/* </div> */}
            <button onClick={() => handleButtonClick("-")} className="btn">
              -
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 3.0, duration: 0.4, ease: "easeIn" },
            }}
            className="row flex flex-row"
          >
            {/* <button onClick={e}>e</button> */}
            <button onClick={e}>e</button>
            <button onClick={pow}>
              x{" "}
              <span
                className="text-[12px]"
                style={{ position: "relative", bottom: ".4em", right: ".1em" }}
              >
                2
              </span>
            </button>
            <button className="btn" onClick={() => handleButtonClick(".")}>
              .
            </button>
            {/* <div className="btn_num"> */}
            <button
              className="btn_num bg-[#cbd5e1] "
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>
            {/* </div> */}

            <button id="eval" onClick={evaluateExpression}>
              =
            </button>
            <button onClick={() => handleButtonClick("+")} className="btn">
              +
            </button>
          </motion.div>
        </div>
      </motion.div>
      <p className="developer text-center mt-2">
        Developed by{" "}
        <a
          href="https://arnabdev.netlify.app/"
          className="font-semibold text-[#ff3399]"
        >
          Arnab Dev
        </a>
      </p>
    </div>
  );
}

export default App;
