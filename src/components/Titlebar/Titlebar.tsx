import {TerminalWindow} from "@phosphor-icons/react";

const Titlebar = () => {
  return (
    <div className="w-full h-auto p-6 text-white text-center mb-4 fixed bg-[#011019] z-10 max-w-6xl">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-2xl flex gap-2 items-center justify-center">
          <TerminalWindow size={32} />
          Programming Network.</h1>
        <div className="px-4 py-1 hover:opacity-50 duration-300 transition-all cursor-pointer rounded-lg bg-gradient-to-br w-auto from-blue-400 to-blue-600">
          <p className="font-bold">Login</p>
        </div>
      </div>
    </div>
  )
}
export default Titlebar;
