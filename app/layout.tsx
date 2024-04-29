import * as React from "react";
import { Component } from "./Component";
import "./global.css";

export default function Layout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        {props.children}
        <Component />
      </body>
    </html>
  );
}
