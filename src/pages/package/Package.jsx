import { useState } from "react";
import Tittle from "./../../Components/Tittle/Tittle";

const Package = () => {
  const [copy, setCopy] = useState("copy");
  const commands = [
    {
      "packageName": "Express",
      "command": "npm install express",
    },
    {
      "packageName": "MongoDB",
      "command": "npm install mongodb",
    },

    {
      "packageName": "React router dom",
      "command": "npm install react-router-dom",
    },
  ];
  const copyHandler = (command) => {
    setCopy("copied");
    command.copy;
  };
  return (
    <div className="min-h-[70vh] max-w-[1600px] mx-auto mt-24">
      <Tittle text="Commands" />
      <h3 className="text-center text-3xl font-semibold text-stone-950 dark:text-stone-200">
        Some packages installation commands
      </h3>
      <div className="w-10/12 mx-auto flex flex-col gap-10 py-14">
        {commands.map((item, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <h4 className="text-xl font-bold text-gray-800 dark:text-stone-400">
              {item?.packageName} installation command :
            </h4>
            <code className="flex items-center justify-between text-red-400 text-lg font-medium bg-[#12121210] dark:bg-[#ffffff37] px-4 py-1 rounded-md select-text">
              <span>
                <span className="select-none mr-2">$</span>
                {item?.command}
              </span>
              <button
                onClick={() => copyHandler(item?.command)}
                className="text-gray-400 select-none"
              >
                Copy
              </button>
            </code>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;
