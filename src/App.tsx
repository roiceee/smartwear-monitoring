import { DataSnapshot, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Navbar from "./components/Navbar";
import { database } from "./firebase";

const cardClasses = "card bg-base-100 shadow-md border-accent border";

const getStressLevel = (
  wbgt: number
):
  | "No Heat"
  | "Low Heat"
  | "Moderate Heat"
  | "High Heat"
  | "Severe Heat"
  | "Critical Risk" => {
  if (wbgt < 18) {
    return "No Heat";
  } else if (wbgt == 18) {
    return "Low Heat";
  } else if (wbgt < 23) {
    return "Moderate Heat";
  } else if (wbgt < 28) {
    return "High Heat";
  } else if (wbgt < 30) {
    return "Severe Heat";
  } else {
    return "Critical Risk";
  }
};

function App() {
  const [dateTime, setDateTime] = useState(new Date());
  const [data, setData] = useState<{
    temperature: number;
    humidity: number;
    wbgt: number;
    irradiance: number;
    stressLevel: string;
  }>({
    temperature: 0,
    humidity: 0,
    wbgt: 0,
    irradiance: 0,
    stressLevel: "",
  });

  useEffect(() => {
    themeChange(false);

    const interval = setInterval(() => {
      const date = new Date();
      setDateTime(date);
    }, 1000);

    const tempRef = ref(database, "temperature");
    onValue(tempRef, (snapshot: DataSnapshot) => {
      const data = snapshot.val();
      setData((prev) => {
        return { ...prev, temperature: data };
      });
    });

    const humidityRef = ref(database, "humidity");
    onValue(humidityRef, (snapshot: DataSnapshot) => {
      const data = snapshot.val();
      setData((prev) => {
        return { ...prev, humidity: data };
      });
    });

    const wbgtRef = ref(database, "wbgt");
    onValue(wbgtRef, (snapshot: DataSnapshot) => {
      const data = snapshot.val();

      setData((prev) => {
        return { ...prev, wbgt: data, stressLevel: getStressLevel(data) };
      });
    });

    const irradianceRef = ref(database, "irradiance");
    onValue(irradianceRef, (snapshot: DataSnapshot) => {
      const data = snapshot.val();
      setData((prev) => {
        return { ...prev, irradiance: data };
      });
    });

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
            <p className="text-4xl">{data.temperature}</p>
          </div>
        </div>

        {/* Specific Humidity Card */}
        <div className={cardClasses}>
          <div className="card-body">
            <h2 className="card-title font-normal text-2xl">
              Specific Humidity
            </h2>
            <p className="text-4xl">{data.humidity}</p>
          </div>
        </div>

        {/* Irradiance Card */}
        <div className={cardClasses}>
          <div className="card-body">
            <h2 className="card-title font-normal text-2xl">Irradiance</h2>
            <p className="text-4xl">{data.irradiance}</p>
          </div>
        </div>

        {/* WBGT Card */}
        <div className={cardClasses}>
          <div className="card-body">
            <h2 className="card-title font-normal text-2xl">WBGT</h2>
            <p className="text-4xl">{data.wbgt}</p>
          </div>
        </div>

        {/* Thermal Stress Level Card */}
        <div className={cardClasses}>
          <div className="card-body">
            <h2 className="card-title font-normal text-2xl">
              Thermal Stress Level
            </h2>
            <p
              className={`text-4xl ${
                data.stressLevel === "Critical Risk"
                  ? "text-red-500"
                  : data.stressLevel === "Severe Heat"
                  ? "text-red-500"
                  : data.stressLevel === "High Heat"
                  ? "text-yellow-500"
                  : data.stressLevel === "Moderate Heat"
                  ? "text-green-500"
                  : "text-blue-500"
              }
            `}
            >
              {data.stressLevel}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t text-center py-8">
        <div>© 2024 HeatStress. All rights reserved.</div>
      </footer>
    </main>
  );
}

export default App;
