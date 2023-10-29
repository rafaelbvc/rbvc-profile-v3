import { useState, useEffect } from "react";

const useLoading = (
  initialProgress: number = 0,
  incrementInterval: number = 1000
) => {
  const [percentComplete, setPercentComplete] =
    useState<number>(initialProgress);

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      if (percentComplete < 100) {
        setPercentComplete((prevPercent) => prevPercent + 1);
      } else {
        clearInterval(interval);
      }
    }, incrementInterval);

    return () => {
      clearInterval(interval);
    };
  }, [percentComplete, incrementInterval]);

  return percentComplete;
};

export default useLoading;
