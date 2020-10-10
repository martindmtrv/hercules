import React from "react";
import { AppState } from "./schemas/AppState";

export const RootData = React.createContext<AppState>(new AppState());