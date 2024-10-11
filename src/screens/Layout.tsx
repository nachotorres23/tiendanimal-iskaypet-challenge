import { Outlet } from "react-router-dom"
import Header from "../components/layout/Header"
import Tabs from "../components/layout/Tabs"

const Layout = () => (
  <div
    className="
      w-[100svw] h-[100svh] bg-zinc-800 flex justify-center items-center p-8
      relative
    "
  >
    <div
      className="
        w-[400px] h-full bg-white border-4 border-zinc-400 rounded-lg flex
        flex-col
      "
    >
      <Header />

      <Tabs />

      <div className="p-4 bg-[#F4F4F4] h-full">
        <Outlet />
      </div>
    </div>
  </div>
)

export default Layout
