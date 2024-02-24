import React from "react";

const useOTPCountdown = (start = 120) => {
  const [countdownTime, setCountdownTime] = React.useState(start);

  React.useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdownTime((prevCountdownTime) => {
        const newCountdownTime = prevCountdownTime - 1;
        if (newCountdownTime < 0) {
          clearInterval(countdownInterval);
          return 0;
        }

        return newCountdownTime;
      });
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdownTime]);

  const formatCountdownTime = (countdownTime) => {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;

    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return { formatCountdownTime, countdownTime, setCountdownTime };
}

export default useOTPCountdown;
