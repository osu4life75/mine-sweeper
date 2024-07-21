import React, { useState } from "react";
import Tile from "./Tile";

const GameBody: React.FC = () => {
  // State to manage the tiles
  const [tiles, setTiles] = useState<string[]>([]);

  // Function to populate tiles
  const populateTiles = (limit: number = 60): void => {
    console.log("populate", limit);
    const newTiles: string[] = [];
    for (let i = 0; i < limit; i++) {
      newTiles.push("t");
    }
    setTiles(newTiles); // Update the state with the new tiles
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <button onClick={() => populateTiles(60)}>Add Tiles</button>
        </div>
      </div>
      <div className="row">
        {tiles.length > 0 ? (
          tiles.map((tile, index) => (
            <div key={index} className="col">
              <Tile />
            </div>
          ))
        ) : (
          <div>no tiles</div>
        )}
      </div>
    </>
  );
};

export default GameBody;
