import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { themeChange } from "theme-change";

const cardClasses = "card bg-base-100 shadow-md border-accent border";

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    themeChange(false);

    const interval = setInterval(() => {
      const date = new Date();
      setDateTime(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="max-w-[1920px] mx-auto">
      <Navbar />
      {/* Content Section */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1500px] mx-auto min-h-[80vh]">
        {/* Date and Time Card */}
        <div className={cardClasses}>
          <div className="card-body">
            <h2 className="card-title text-2xl font-normal">Date and Time</h2>
            <p className="text-4xl">{dateTime.toLocaleString()}</p>
          </div>
        </div>

        {/* Temperature Card */}
        <div className={cardClasses}>
          <div className="card-body">
            <h2 className="card-title font-normal text-2xl">Temperature</h2>
            <p className="text-4xl">-- °C</p>
          </div>
        </div>

        {/* Specific Humidity Card */}
        <div className={cardClasses}>
          <div className="card-body">
            <h2 className="card-title font-normal text-2xl">
              Specific Humidity
            </h2>
            <p className="text-4xl">-- g/kg</p>
          </div>
        </div>

        {/* Irradiance Card */}
        <div className={cardClasses}>
          <div className="card-body">
            <h2 className="card-title font-normal text-2xl">Irradiance</h2>
            <p className="text-4xl">-- W/m²</p>
          </div>
        </div>

        {/* WBGT Card */}
        <div className={cardClasses}>
          <div className="card-body">
            <h2 className="card-title font-normal text-2xl">WBGT</h2>
            <p className="text-4xl">-- °C</p>
          </div>
        </div>

        {/* Thermal Stress Level Card */}
        <div className={cardClasses}>
          <div className="card-body">
            <h2 className="card-title font-normal text-2xl">
              Thermal Stress Level
            </h2>
            <p className="text-4xl">--</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t text-center py-8">
        <div>© 2024 SmartWear. All rights reserved.</div>
      </footer>
    </main>
  );
}

export default App;
