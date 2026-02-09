import Logo from "./assets/logo.png"
import "./App.css"


export default function App() {
  return (
    <div className="min-h-screen flex select-none items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 text-white">
      <div className="text-center px-6">
        <img src={Logo} alt="Lunchify" className="mx-auto mb-6 w-24 h-24" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Lunchify
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90">
          Smart, simple lunch ordering
        </p>
        <p className="text-sm md:text-base opacity-80">
          We’re cooking something great. Launching soon 🚀
        </p>
        <code >Powered by webyfy software  team</code>
      </div>
    </div>
  )
}
