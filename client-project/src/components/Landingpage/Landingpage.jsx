import React from 'react';
import "./Landingpage.scss";
import Head from "./next/head"
import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import Nav from "../Nav/Nav";

const Landingpage = (props) => {
  const {productInfo } = props 
  return (
    <div className='layout'>
      <Head>
        <title> Cactus Tech </title>
      </Head>
      <header>
        <Nav/>
      </header>
      <main className='container'>
        <Card/>
      </main>
    </div>
  )
}

export default Landingpage