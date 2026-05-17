import { createContext, useContext, useMemo, useState } from "react";

const AppReadyContext = createContext(null);

export function AppReadyProvider({ children }) {
  const [appReady, setAppReady] = useState(false);
  const value = useMemo(() => ({ appReady, setAppReady }), [appReady]);

  return <AppReadyContext.Provider value={value}>{children}</AppReadyContext.Provider>;
}

export function useAppReady() {
  const ctx = useContext(AppReadyContext);
  if (!ctx) {
    throw new Error("useAppReady must be used within AppReadyProvider");
  }
  return ctx.appReady;
}

export function useSetAppReady() {
  const ctx = useContext(AppReadyContext);
  if (!ctx) {
    throw new Error("useSetAppReady must be used within AppReadyProvider");
  }
  return ctx.setAppReady;
}
