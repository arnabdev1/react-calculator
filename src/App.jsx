import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [inputValue, setInputValue] = useState("");

  const sin = () => {
    setInputValue(Math.sin(inputValue));
  };

  const cos = () => {
    setInputValue(Math.cos(inputValue));
  };

  const tan = () => {
    setInputValue(Math.tan(inputValue));
  };

  const pow = () => {
    setInputValue(Math.pow(inputValue, 2));
  };

  const sqrt = () => {
    setInputValue(Math.sqrt(inputValue));
  };

  const log = () => {
    setInputValue(Math.log(inputValue));
  };

  const pi = () => {
    setInputValue("3.14159265359");
  };

  const e = () => {
    setInputValue("2.71828182846");
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
  };

  const clearInput = () => {
    setInputValue("");
  };

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const evaluateExpression = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      setInputValue("Error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 3, ease: "easeIn" },
      }}
      className="container sm:w-[605px] sm:p-4 w-[290px] p-1"
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
          className="row"
        >
          <button id="ce" onClick={backspc}>
            DEL
          </button>
          <button onClick={sin}>sin</button>
          <button onClick={cos}>cos</button>
          <button onClick={tan}>tan</button>
          {/* <button onClick={() => handleButtonClick("log(")}>log</button> */}
          <button onClick={log}>log</button>
          <button className="" id="ac" onClick={clearInput}>
            CLEAR
          </button>
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
          <button onClick={() => handleButtonClick("3.14159265359")}>π</button>

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
          <button onClick={() => handleButtonClick("2.71828182846")}>e</button>
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
  );
}

export default App;
