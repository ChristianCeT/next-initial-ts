import React, { FC, PropsWithChildren } from "react";
import { Navbar } from "../Navbar";
import styles from "./Home.module.css";
import Head from "next/head";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>About - Christian</title>
        <meta name="description" content="Home App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="christian, prueba, test"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main}`}>{children}</main>
    </>
  );
};
