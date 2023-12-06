import React from "react";
import SideNav from "../SideBar/SideNav";
import { useContext } from "react";
import { Alldata } from "../Context/Context";
import SongCard from "../Card/SongCard";
import {
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Pagination from "../Pagination/Pagination";
import NavBar from "../NavBar/NavBar";

function Songs() {
  const { handleaddsongsclick, currentsong } = useContext(Alldata);
  return (
    <Stack direction="row">
      <SideNav />
      <Stack>
        <NavBar handleaddsongsclick={handleaddsongsclick} />
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Song Name</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Added ON</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        {currentsong.map((song) => {
          return <SongCard key={song.id} song={song} />;
        })}
        <Pagination />
      </Stack>
    </Stack>
  );
}

export default Songs;
