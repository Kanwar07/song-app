import React, { useContext } from "react";
import { Button, Table, TableBody, TableCell, TableRow } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Alldata } from "../Context/Context";

function SongCard({ song }) {
  const { allsongs, setallsongs } = useContext(Alldata);

  const handledelete = () => {
    setallsongs(allsongs.filter((c) => c.id !== song.id));
  };

  const handleplay = () => {
    window.open(song.trackUrl);
  };

  return (
    <Table style={{ alignContent: "left" }} sx={{ minWidth: 650 }}>
      <TableBody>
        <TableRow key={song.id}>
          <TableCell>
            <img src={song.img} alt={song.name} />
          </TableCell>
          <TableCell component="th" scope="row">
            {song.name}
          </TableCell>
          <TableCell>Youtube</TableCell>
          <TableCell>{new Date().toDateString()}</TableCell>
          <TableCell>
            <Button>
              <PlayCircleIcon
                style={{ color: "#FDB927" }}
                onClick={() => handleplay()}
              />
            </Button>
          </TableCell>
          <TableCell>
            <Button>
              <DeleteOutlineIcon
                style={{ color: "black" }}
                onClick={() => handledelete()}
              />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default SongCard;
