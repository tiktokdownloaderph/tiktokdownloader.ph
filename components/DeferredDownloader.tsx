"use client";

import dynamic from "next/dynamic";
import DownloaderShell from "./DownloaderShell";

const Downloader = dynamic(() => import("./Downloader"), {
  ssr: false,
  loading: () => <DownloaderShell />,
});

export default function DeferredDownloader() {
  return <Downloader />;
}
