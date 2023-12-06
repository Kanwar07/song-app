import React, { useState, createContext, useEffect } from "react";
import data from "../Data/Data.json";

export const Alldata = createContext();

function Context({ children }) {
  const [number, setnumber] = useState("9889898989");
  const [otp, setOtp] = useState("5678");
  const [allsongs, setallsongs] = useState([]);
  const [addsongs, setaddsongs] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [songsPerPage] = useState(4);

  useEffect(() => {
    const getdata = () => {
      setallsongs(data.tracks);
    };
    getdata();
  }, []);

  const handleaddsongsclick = () => {
    setaddsongs((addsongs) => !addsongs);
  };

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentsong = allsongs.slice(indexOfFirstSong, indexOfLastSong);

  const pagenumbers = [];

  for (let i = 1; i <= Math.ceil(allsongs.length / songsPerPage); i++) {
    pagenumbers.push(i);
    console.log(i);
  }

  return (
    <Alldata.Provider
      value={{
        number,
        setnumber,
        otp,
        setOtp,
        allsongs,
        setallsongs,
        addsongs,
        setaddsongs,
        handleaddsongsclick,
        currentsong,
        songsPerPage,
        currentPage,
        setcurrentPage,
        pagenumbers,
      }}
    >
      {children}
    </Alldata.Provider>
  );
}

export default Context;
