import React, { useState, useEffect } from "react";
import { RotateCcw, Trophy, User, Monitor, Sparkles } from "lucide-react";

const choices = [
  { name: "Rock", emoji: "🪨" },
  { name: "Paper", emoji: "📄" },
  { name: "Scissors", emoji: "✂️" },
];

export default function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  // States for delay animation
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingEmoji, setThinkingEmoji] = useState("❓");
  const [countdown, setCountdown] = useState(0);

  // Cycle emojis fast while computer is "thinking"
  useEffect(() => {
    let emojiInterval;
    if (isThinking) {
      emojiInterval = setInterval(() => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setThinkingEmoji(randomChoice.emoji);
      }, 120);
    }
    return () => clearInterval(emojiInterval);
  }, [isThinking]);

  // Countdown timer effect
  useEffect(() => {
    let timerInterval;
    if (isThinking && countdown > 0) {
      timerInterval = setInterval(() => {
        setCountdown((prev) => Math.max(prev - 1, 0));
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [isThinking, countdown]);

  const playGame = (choice) => {
    if (isThinking) return;

    setUserChoice(choice);
    setComputerChoice(null);
    setResult("");
    setIsThinking(true);
    setCountdown(3); // 3-second delay count

    // Pick final outcome
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    // Wait 3.5 seconds before revealing result
    setTimeout(() => {
      setComputerChoice(randomChoice);
      setIsThinking(false);

      if (choice.name === randomChoice.name) {
        setResult("🤝 It's a Draw!");
      } else if (
        (choice.name === "Rock" && randomChoice.name === "Scissors") ||
        (choice.name === "Paper" && randomChoice.name === "Rock") ||
        (choice.name === "Scissors" && randomChoice.name === "Paper")
      ) {
        setResult("🎉 You Win!");
        setUserScore((prev) => prev + 1);
      } else {
        setResult("😢 Computer Wins!");
        setComputerScore((prev) => prev + 1);
      }
    }, 3500);
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
    setUserScore(0);
    setComputerScore(0);
    setIsThinking(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center p-4 sm:p-6 font-sans text-[#2D2D2D] selection:bg-[#8C3E1A] selection:text-white">
      <div className="w-full max-w-2xl bg-white border border-[#F3E7DE] rounded-3xl sm:rounded-[2.5rem] shadow-2xl shadow-[#8C3E1A]/10 p-6 sm:p-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF9F5] border border-[#E6D9CF] text-xs font-semibold text-[#8C3E1A] mb-3">
            <Sparkles size={14} /> Classic Game Mode
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Rock Paper Scissors
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Choose your move and battle against the computer!
          </p>
        </div>

        {/* Score Board */}
        <div className="grid grid-cols-2 gap-4 mb-8 bg-[#FFF9F5] p-4 rounded-2xl border border-[#E6D9CF]">
          <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#F0E2D8] shadow-xs">
            <div className="p-2.5 bg-[#8C3E1A]/10 rounded-lg text-[#8C3E1A]">
              <User size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">You</p>
              <p className="text-2xl font-black text-[#1A1A1A]">{userScore}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#F0E2D8] shadow-xs">
            <div className="p-2.5 bg-[#8C3E1A]/10 rounded-lg text-[#8C3E1A]">
              <Monitor size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Computer</p>
              <p className="text-2xl font-black text-[#1A1A1A]">{computerScore}</p>
            </div>
          </div>
        </div>

        {/* Choice Buttons */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-3">
          Select Your Move
        </p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          {choices.map((item) => (
            <button
              key={item.name}
              disabled={isThinking}
              onClick={() => playGame(item)}
              className={`group flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                userChoice?.name === item.name
                  ? "bg-[#8C3E1A] text-white border-[#8C3E1A] shadow-lg shadow-[#8C3E1A]/20 scale-[1.02]"
                  : "bg-[#FFF9F5] hover:bg-[#FBEFE7] text-[#2D2D2D] border-[#E6D9CF] hover:border-[#8C3E1A]/40"
              } ${isThinking ? "opacity-60 cursor-not-allowed" : "active:scale-95"}`}
            >
              <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-200 mb-2">
                {item.emoji}
              </span>
              <span className="text-xs sm:text-sm font-bold">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Arena / Results Section */}
        {(userChoice || isThinking) && (
          <div className="mt-8 pt-8 border-t border-[#F3E7DE] space-y-6 animate-in fade-in duration-300">
            
            {/* Player Cards Comparison */}
            <div className="grid grid-cols-2 gap-4 text-center">
              {/* User Choice Card */}
              <div className="bg-[#FFF9F5] border border-[#E6D9CF] rounded-2xl p-4 sm:p-6 flex flex-col items-center">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Your Move
                </span>
                <div className="text-5xl sm:text-6xl my-2">{userChoice?.emoji}</div>
                <p className="font-bold text-[#1A1A1A] text-sm">{userChoice?.name}</p>
              </div>

              {/* Computer Choice Card */}
              <div className="bg-[#FFF9F5] border border-[#E6D9CF] rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Computer
                </span>

                {isThinking ? (
                  <div className="flex flex-col items-center my-2">
                    <div className="text-5xl sm:text-6xl animate-bounce">
                      {thinkingEmoji}
                    </div>
                    <span className="mt-2 text-xs font-semibold text-[#8C3E1A] bg-[#8C3E1A]/10 px-2.5 py-1 rounded-full animate-pulse">
                      Revealing in {countdown}s...
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="text-5xl sm:text-6xl my-2">
                      {computerChoice?.emoji}
                    </div>
                    <p className="font-bold text-[#1A1A1A] text-sm">
                      {computerChoice?.name}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Winner Announcement & Reset */}
            {!isThinking && result && (
              <div className="text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="inline-block px-6 py-2.5 bg-[#8C3E1A]/10 rounded-2xl border border-[#8C3E1A]/20">
                  <h2 className="text-xl sm:text-2xl font-black text-[#8C3E1A]">
                    {result}
                  </h2>
                </div>

                <div>
                  <button
                    onClick={resetGame}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs sm:text-sm rounded-xl transition duration-200 cursor-pointer active:scale-95"
                  >
                    <RotateCcw size={16} />
                    Reset Score
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}