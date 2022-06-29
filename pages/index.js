import Head from "next/head";
import Hero from "../components/hero/hero";
import Header from "../layout/header";
import styles from "../styles/Home.module.css";
import Search from "../ui/icons/search";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
