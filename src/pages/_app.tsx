import Sidebar from "@/components/SideBar";
import "@/styles/global.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-content">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
