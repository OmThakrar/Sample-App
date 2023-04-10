import React from "react";
import { useEffect} from "react";

const Timer = () => {
  const parsedDeadline = 1678053638000;
  const [time, setTime] = React.useState(parsedDeadline - Date.now());


  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );
    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className="font-['Montserrat'] bg-gradient-to-r from-blue-300 via-blue-500 to-blue-900 p-1">
      {
        time / DAY > 0 ?
        <>
          <div className="grid grid-cols-4 bg-black md:p-3">
            {
              Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
              }).map(([label, value]) => (
                <div key={label} className="col-span-1">
                  <div className="mx-auto">
                    <p className="md:px-12 px-1 text-xl md:text-3xl my-2 text-white">{`${Math.floor(value)}`.padStart(2, "0")}</p>
                    <span className="md:px-14 px-1 text-base md:text-xl text-white">{label}</span>
                  </div>
                </div>
                
              ))
            }
            </div>
            <div className="font-['Montserrat'] my-1 text-center text-white font-medium text-2xl">Time to plan out your Date</div>
          
          </>
          
          : <div className="text-xl text-white text-center"> Inspect the data, and it will confess anything. </div>
      }
    </div>

  );
};

export default Timer;
