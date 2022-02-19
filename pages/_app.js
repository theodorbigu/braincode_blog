import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import Image from "next/Image";
import Link from "next/Link";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
