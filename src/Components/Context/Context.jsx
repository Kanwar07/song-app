import React, { useState, createContext, useEffect } from "react";
import data from "../Data/Data.json";

export const Alldata = createContext();

function Context({ children }) {
  const [number, setnumber] = useState("9889898989");
  const [otp, setOtp] = useState("5678");
  const [allsongs, setallsongs] = useState([]);
  const [addsongs, setaddsongs] = useState(false);

  useEffect(() => {
    const getdata = () => {
      setallsongs(data.tracks);
    };
    getdata();
  }, [allsongs]);

  const handleaddsongsclick = () => {
    setaddsongs((addsongs) => !addsongs);
  };

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
      }}
    >
      {children}
    </Alldata.Provider>
  );
}

export default Context;
