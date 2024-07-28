import React, { useState, useEffect} from "react";
import { forEachChild } from "typescript";
import TileType from "../types/tile";

export default function Tile(props:any) {
  const [tile, setTile] = useState<TileType>({
    icon: "",
    isRevealed: false,
    isMine: false,
    neighborMines: 0,
    flagged: false,
  });

  const [tiles, setTiles] = useState([]);

  useEffect(() => {
   
  
    
  }, [])
  

  return (
    <>
      <button style={{width: "50px",height:'50px'}}></button>
    </>
  );
}
