"use client";
import React from "react";
import { SearchManufacturer } from ".";
import { useState } from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="0bject-contain"
    />
  </button>
);

const SearchBar = ({setManufacturer, setModel}:any) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar')
    }

    setModel(searchModel.toLowerCase())
    setManufacturer(searchManufacturer.toLowerCase())

  };
  
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
