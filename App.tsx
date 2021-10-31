import { StatusBar } from "expo-status-bar";
import React from "react";
import { CameraApp } from "./src/pages/Camera";
import { FlipProvider } from "./src/hook/handleFlipCamera";

export default function App() {
  return (
    <FlipProvider>
      <CameraApp />
      <StatusBar style="auto" />
    </FlipProvider>
  );
}
