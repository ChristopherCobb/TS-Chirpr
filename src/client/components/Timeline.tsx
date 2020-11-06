import React, { useState, useEffect } from "react";




const Timeline: React.FunctionComponent = () => {
  const [chirps, setChirps] = useState<Chirp[]>([]);

  const getChirps = async () => {
    const res = await fetch("api/chirps");
    const chirps = await res.json();
    delete chirps.nextid;
    let chirpArr = Object.entries(chirps);
    setChirps(chirps);
  };

  useEffect(() => {
    getChirps();
  }, []);

  return (
    <section className="row my-2">
      {chirps.map((chirp) => (
        <div key={chirp.id} className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={require("../assets/download.jpeg")}
            alt="Birdie Image"
          />
          <div className="card-body">
            <h5 className="card-title">{chirp.username}</h5>
            <p className="card-text">{chirp.message}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};
export interface Chirp {
  id: number;
  username: string;
  message: string;
}


export default Timeline;
