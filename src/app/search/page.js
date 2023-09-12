import Header from "@/components/Header";
import { headers } from "next/headers";
import Head from "next/head";
import React from "react";
import { API_KEY, CONTEXT_KEY } from "../../../key";

async function getSearchResult(context) {
  
  const useDummyData = false;

  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`);
  const data = res.json();
  return data;
}

async function Search() {
  const data = await getSearchResult()

  console.log(data);
  return (
    <>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Search Results */}
    </>
  );
}

export default Search;
