import React from "react";
import Tile from "./Tile";

export default function GameBody() {
  let t: string[] = [];
  function populateTiles(limit: number = 60) {
    console.log("populate", limit);
    for (let i = 0; i < limit; i++) {
      t.push("t");
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <button onClick={() => populateTiles(60)}>Add Tiles</button>
        </div>
      </div>
      <div className="row">
        {t && t.length > 0 ? (
          t.map((Tile) => (
            <div>
              <Tile/>
            </div>
          ))
        ) : (
          <div>no tiles</div>
        )}
      </div>
    </>
  );
}
