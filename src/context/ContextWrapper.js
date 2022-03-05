import React, { useState } from "react";
import Context from "./Context";
import { theme } from "../../utils";
import { StatusBar } from "expo-status-bar";

export default function ContextWrapper(props) {
  const [rooms, setRooms] = useState([]);
  return (
    <Context.Provider value={{ theme, rooms, setRooms }}>
      <StatusBar hidden />
      {props.children}
    </Context.Provider>
  );
}
