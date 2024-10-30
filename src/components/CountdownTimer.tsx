
// import { timeUnits } from "@/data";
// import React from "react";

// const CountdownTimer = () => {
//   return (
//     <div className="flex gap-2 md:gap-4">
//       {timeUnits.map((unit, index) => (
//         <React.Fragment key={unit.label}>
//           <div className="text-center">
//             <div className="text-[10px] md:text-xs font-medium">{unit.label}</div>
//             <div className="text-xl md:text-[32px] font-bold">{unit.value}</div>
//           </div>
//           {index < timeUnits.length - 1 && (
//             <div className="text-xl md:text-3xl font-bold text-[#E07575] mt-2 ">:</div>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default CountdownTimer;


import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate = new Date('2025-01-01') }) => {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {

      // Calculate the difference in milliseconds between targetDate and the current date
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: String(timeLeft.hours).padStart(2, '0') },
    { label: "MINUTES", value: String(timeLeft.minutes).padStart(2, '0') },
    { label: "SECONDS", value: String(timeLeft.seconds).padStart(2, '0') }
  ];

  return (
    <div className="flex gap-2 md:gap-4">
      {timeUnits.map((unit, index) => (
        // React.Fragment lets me group elements without a wrapper node.
        <React.Fragment key={unit.label}>
          <div className="text-center">
            <div className="text-[10px] md:text-xs font-medium">{unit.label}</div>
            <div className="text-xl md:text-[32px] font-bold">{unit.value}</div>
          </div>
          {index < timeUnits.length - 1 && (
            <div className="text-xl md:text-3xl font-bold text-[#E07575] mt-2">:</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CountdownTimer;