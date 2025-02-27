"use client";

import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();

  const search = searchParams.get("paginate");

  //console.log(search);
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'

  return {search}; //<>Search: {search}</>;
}
