import React, { useState } from "react";
import TileType from "../types/tile"; // Ensure TileType matches the structure used below

const GameBody: React.FC = () => {
  // State to manage the tiles
  const [tiles, setTiles] = useState<TileType[]>([]);
  const [squareRoot, setSquareRoot] = useState<number>(0);
  const [board, setBoard] = useState<any[]>([]);

  // Function to populate tiles
  const populateTiles = (limit: number = 16): void => {
    const squareRoot = Math.sqrt(limit);
    setSquareRoot(squareRoot);
    const rows = Math.floor(squareRoot);
    const columns = Math.floor(squareRoot);

    const newBoard: any[] = [];

    for (let r = 0; r < rows; r++) {
      let row = [];
      for (let c = 0; c < columns; c++) {
        row.push({
          icon: "t",
          isRevealed: false,
          isMine: false,
          adjacentMines: 0, // Ensure the property name matches the one used below
          flagged: false,
        });
      }
      newBoard.push(row);
    }
    console.log(newBoard);
    setBoard(newBoard);
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <button onClick={() => populateTiles(144)}>Add Tiles</button>
        </div>
      </div>
      <div className="row">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((cell:any, colIndex:any) => (
              <div
                key={colIndex}
                style={{
                  width: 30,
                  height: 30,
                  border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: cell.isRevealed ? "#ddd" : "#999",
                  color: cell.isMine ? "red" : "black",
                }}
              >
                {cell.isRevealed
                  ? cell.isMine
                    ? "💣" // Display the bomb emoji correctly
                    : cell.adjacentMines
                  : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default GameBody;
