import { createDownloadHandler } from "@/lib/download-media";

export const runtime = "nodejs";
export const GET = createDownloadHandler();
