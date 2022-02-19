import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import Image from "next/image";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
