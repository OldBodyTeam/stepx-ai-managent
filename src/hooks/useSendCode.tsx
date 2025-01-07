import { useState, useEffect, useCallback } from "react";

const useSendCode = () => {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const startCountdown = useCallback(() => {
    setCountdown(60);
    setIsDisabled(true);
  }, []);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setIsDisabled(false);
      setCountdown(null);
    }
  }, [countdown]);

  return {
    countdown,
    isDisabled,
    startCountdown,
  };
};

export default useSendCode;
