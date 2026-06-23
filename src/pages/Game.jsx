import { useState } from "react";

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

  const playGame = (choice) => {
    const random =
      choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setComputerChoice(random);

    if (choice.name === random.name) {
      setResult("🤝 It's a Draw!");
      return;
    }

    if (
      (choice.name === "Rock" && random.name === "Scissors") ||
      (choice.name === "Paper" && random.name === "Rock") ||
      (choice.name === "Scissors" && random.name === "Paper")
    ) {
      setResult("🎉 You Win!");
      setUserScore((prev) => prev + 1);
    } else {
      setResult("😢 Computer Wins!");
      setComputerScore((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult("");
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-center mb-6">
          ✊ Rock Paper Scissors ✂️
        </h1>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {choices.map((item) => (
            <button
              key={item.name}
              onClick={() => playGame(item)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-5 transition text-xl font-semibold"
            >
              <div className="text-5xl">{item.emoji}</div>
              <div>{item.name}</div>
            </button>
          ))}
        </div>

        {(userChoice || computerChoice) && (
          <div className="text-center space-y-4">

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-gray-100 rounded-xl p-4">
                <h2 className="font-bold mb-2">You</h2>
                <div className="text-6xl">{userChoice?.emoji}</div>
                <p>{userChoice?.name}</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <h2 className="font-bold mb-2">Computer</h2>
                <div className="text-6xl">{computerChoice?.emoji}</div>
                <p>{computerChoice?.name}</p>
              </div>

            </div>

            <h2 className="text-2xl font-bold text-purple-700">
              {result}
            </h2>

            <div className="flex justify-center gap-10 text-xl font-bold">
              <p>🙋 You: {userScore}</p>
              <p>💻 Computer: {computerScore}</p>
            </div>

            <button
              onClick={resetGame}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl"
            >
              Reset Game
            </button>

          </div>
        )}
      </div>
    </div>
  );
}