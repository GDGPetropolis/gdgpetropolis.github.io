import App from "next/app";
import React from "react";
import { LandingDataProvider } from "../components/LandingDataContext";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <LandingDataProvider>
        <Component {...pageProps} />
      </LandingDataProvider>
    );
  }
}
