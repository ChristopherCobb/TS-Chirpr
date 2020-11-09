import React from "react";
import { useState, useEffect } from "react";
import {
  useHistory,
  RouteComponentProps,
  Link,
  useParams,
} from "react-router-dom";

const admin: React.FC = () => {
  const [username, getUser] = useState<string>();
  const [message, getMessage] = useState<string>();
  const chirpid = useParams();
  const history = useHistory();

  const handleUserChange = (e) => getUser(e.target.value);
  const handleMessageChange = (e) => getMessage(e.target.value);
  const handleEdit = (e) => {
    e.preventDefault();
   getOneChirp();
  };

  const handleDelete = (e) => {
    e.preventDefault();
}


  const getOneChirp = async () => {
    const oneChirp = {
      username: username,
      message: message,
    };
 
        let res = await fetch(`/api/chirps/${chirpid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, message })
    })
    if(res.ok) {
        history.push("/")
    }
    else {
        console.log("Unable to edit chirp")
    }

  useEffect(() => {
    getOneChirp();
  }, []);

  const deleteChirp = async (e) => {
    e.preventDefault();
    let res = await fetch(`/chirps/${chirpid}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        console.log('chirp deleted');
        history.push('/');
    } else {
        console.log('unable to delete chirp');
    }
}
useEffect(() => {
    (async () => {
        let res = await fetch(`/chirps/${chirpid}`);
        let chirp = await res.json();
        getUser(chirp.username);
        getMessage(chirp.message);
    }
    )
}, [chirpid]);
  }
  return (
    <section className="row" id="row1">
      <div
        // key={chirp.id}
        className="card d-flex justify-content-center align-items-center shadow-lg text-center m-4 rounded text-danger bg-white "
        style={{ width: "20rem" }}
      >
        <img
          className="card-img-top"
          src="../assets/download.jpeg"
          alt="Birdie Image"
          style={{ height: "100px", width: "100px" }}
        />
        <div className="card-body">
          <textarea className="card-title bg-light" onChange={e => handleUserChange(e)}>{username}</textarea>
          <textarea className="card-text bg-white" onChange={e => handleMessageChange(e)}>{message}</textarea>
          <button className="btn btn-outline-danger rounded" onClick={e => handleEdit(e)}>Save Edit</button>
                <button className="btn btn-outline-danger rounded" onClick={e => handleDelete(e)}>Delete Chirp</button>

          <Link to="/">
            <button type="button" className="btn btn-outline-dark">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

//   const deleteChirp = async () => {
//     await fetch(`/api/chirps/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(chirps),
//     });

//     useEffect(() => {
//       deleteChirps(chirps);
//     }, []);
//   };

//     <button
//       type="button"
//       className="btn btn-primary"
//       onClick={() => deleteChirp()}
//     >
//       Delete Chirp
//     </button>
//   );
// };

export interface IAdminProps extends RouteComponentProps {}
export default admin;
