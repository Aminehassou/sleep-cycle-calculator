import { useState, useEffect } from "react";
import "./index.css";
import { FaRegClock, FaMoon } from "react-icons/fa"; // Import Font Awesome clock and moon icons

function App() {
  const [wakeUpTimes, setWakeUpTimes] = useState([]);

  useEffect(() => {
    fetch("/api/wake_up_times")
      .then((response) => response.json())
      .then((data) => setWakeUpTimes(data));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">
          Good times to wake up if you go to bed now:
        </h1>
        <ul className="space-y-4">
          {wakeUpTimes.map(({ time, cycles }, index) => (
            <li key={index} className="bg-gray-700 rounded px-4 py-2">
              <div className="flex items-center justify-between">
                <div>
                  <FaRegClock className="inline text-lg mr-2 text-yellow-300" />
                  {time}
                </div>
                <div className="flex items-center text-yellow-300">
                  <FaMoon className="mr-1" />
                  {cycles} {cycles > 1 ? "cycles" : "cycle"}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
