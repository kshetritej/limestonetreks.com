export {};

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "set",
      targetId: string,
      config?: ControlParams | EventParams | CustomParams,
    ) => void;
  }
}

// Minimal types to satisfy the compiler
type ControlParams = { [key: string]: any };
type EventParams = { [key: string]: any };
type CustomParams = { [key: string]: any };
