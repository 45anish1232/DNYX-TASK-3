import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="px-12 py-8 rounded-2xl border border-blue-500 shadow-lg shadow-blue-500/50">
        <h1 className="text-7xl font-mono text-blue-400 tracking-widest">
          {formatTime(time)}
        </h1>
      </div>
    </div>
  );
}

export default App;
