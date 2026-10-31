const DEFAULT_ERROR = "Hindi ma-load ang video. Tiyaking pampubliko ang video at tama ang link, at subukan ulit.";

export async function fetchVideoDetails(url: string): Promise<Record<string, unknown>> {
  let response: Response;
  let data: Record<string, unknown>;
  try {
    response = await fetch(`/api/tiktok?url=${encodeURIComponent(url)}`);
    data = await response.json();
  } catch {
    throw new Error("Hindi makakonekta sa video service. Tingnan ang iyong internet connection at subukan ulit.");
  }
  if (!response.ok) {
    if (data.code === "UPSTREAM_LIMIT") throw new Error("Pansamantalang naabot ang limitasyon ng video service. Hindi ito problema sa iyong link. Subukan ulit mamaya.");
    if ([503, 504].includes(response.status)) throw new Error("Pansamantalang hindi available ang video service. Subukan ulit mamaya.");
    throw new Error(DEFAULT_ERROR);
  }
  return data;
}
