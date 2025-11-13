import { useEffect, useState } from "react";

const HintPopup = ({ hint }: { hint: string }) => {
  const [showHint, setShowHint] = useState<boolean>(false);

  useEffect(() => {
    if (!showHint) return;
    const timeoutPopup = setTimeout(() => {
      setShowHint(false);
    }, 5000);
    return () => {
      clearTimeout(timeoutPopup);
    };
  }, [showHint]);

  return (
    <div
      className="w-16 h-16 flex items-center justify-center fixed bottom-2 right-2 z-100 bg-red-400 rounded-full cursor-pointer select-none"
      onClick={() => setShowHint(!showHint)}
    >
      {showHint && (
        <div className="absolute min-w-[350px] h-auto bg-blue-600 transform -translate-x-[calc(50%+32px)] -translate-y-1/2 z-100 rounded-3xl py-3 px-5 flex items-center">
          {hint}
        </div>
      )}
      <span className="text-2xl z-500">💡</span>
    </div>
  );
};

export default HintPopup;
