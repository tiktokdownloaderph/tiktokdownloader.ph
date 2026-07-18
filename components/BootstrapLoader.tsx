"use client";
import { useEffect } from "react";

export default function BootstrapLoader() {
  useEffect(() => {
    // @ts-expect-error no types for bootstrap bundle
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}
