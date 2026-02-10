import { useState } from "react";
import Logo from "./assets/logo.png";
import "./App.css";

// List of users

export default function App() {
  const [selectedUser, setSelectedUser] = useState("")
  const [quote, setQuote] = useState("")
  const [spinning, setSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [history, setHistory] = useState([])


  const USERS = [
  "Sojan", "Reeeja", "Abhilash", "Nandana", 
  "Arjun", "Nidhin", "Saif", "Razeem", "Renjith","Denil"
];

// Collection of random quotes (20+ quotes)
const QUOTES = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "You must be the change you wish to see in the world. - Mahatma Gandhi",
  "Spread love everywhere you go. - Mother Teresa",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "You become what you believe. - Oprah Winfrey",
  "Everything you've ever wanted is on the other side of fear. - George Addair",
  "Dream big and dare to fail. - Norman Vaughan",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "The mind is everything. What you think you become. - Buddha",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The secret of getting ahead is getting started. - Mark Twain",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "Whether you think you can or you think you can't, you're right. - Henry Ford",
  "The harder I work, the more luck I seem to have. - Thomas Jefferson"
];


  const spin = () => {
    if (!selectedUser) return alert("Select a user")
    setSpinning(true)
    setQuote("")
    setRotation(v => v + 2160)

    setTimeout(() => {
      const q = QUOTES[Math.floor(Math.random() * QUOTES.length)]
      setQuote(q)
      setHistory([{ user: selectedUser, quote: q }, ...history.slice(0, 4)])
      setSpinning(false)
    }, 1800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-600 text-white flex flex-col">
      
      {/* Header */}
      <div className="pt-6 pb-4 text-center">
        <img src={Logo} className="w-16 h-16 mx-auto mb-2" />
        <h1 className="text-2xl font-bold">Quote Wheel</h1>
        <p className="text-sm opacity-80">Spin • Inspire • Smile</p>
      </div>

      {/* Wheel */}
      <div className="flex justify-center py-6">
        <div
          className="relative w-56 h-56 rounded-full border-4 border-yellow-300"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning ? "transform 1.8s ease-out" : "none",
            background:
              "conic-gradient(#fbbf24,#f97316,#ef4444,#ec4899,#fbbf24)"
          }}
        >
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full" />
        </div>
        <div className="absolute mt-[-12px]">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-yellow-300" />
        </div>
      </div>

      {/* Quote */}
      {quote && (
        <div className="mx-4 bg-white text-black rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500 mb-1">{selectedUser}</p>
          <p className="text-lg font-semibold">"{quote}"</p>
        </div>
      )}

      {/* Users */}
      <div className="px-4 mt-6">
        <p className="text-sm mb-2 opacity-80">Select user</p>
        <div className="grid grid-cols-3 gap-2">
          {USERS.map(u => (
            <button
              key={u}
              onClick={() => setSelectedUser(u)}
              className={`py-2 rounded-lg text-sm font-medium ${
                selectedUser === u
                  ? "bg-yellow-400 text-black"
                  : "bg-white/20"
              }`}
            >
              {u}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto p-4">
        <button
          onClick={spin}
          disabled={spinning}
          className="w-full py-4 rounded-xl bg-yellow-400 text-black font-bold text-lg disabled:opacity-60"
        >
          {spinning ? "Spinning..." : "SPIN"}
        </button>
      </div>

      {/* History */}
      {history.length > 0 && (
        <div className="px-4 pb-6">
          <p className="text-sm mb-2 opacity-70">Recent</p>
          <div className="space-y-2">
            {history.map((h, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3 text-sm">
                <b>{h.user}</b> — {h.quote.slice(0, 40)}…
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
