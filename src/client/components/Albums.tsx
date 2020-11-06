// import React from 'react'
// import { useState, useEffect} from "react"
// import { Link}

// export interface AlbumsProps {}

// export interface Album {
//     id: number, 
//     title: string,
//     artist: string,
//     url: string,
//     imageurl: string,
//     thumbnail_image: string,
//     _created: Date
// }

// const Albums: React.FunctionComponent<AlbumsProps> = (props) => {

//     const [albums, setAlbums ] = useState<Album[]>([])

//     const getAlbums = async() => {
//         let r = await fetch('/api/albums');
//         let albums = await r.json()
//         setAlbums(albums)
//     }

//     useEffect(() => { getAlbums(); }, [])
//     return(
//         <section className= "row my-2">
//             <ul className="col-md-6 offset-md-3 list-group">
//             {albums.map(album => (
//                 <li key={album.id} className="list-group-items d-flex justify-content-between">
//                     <h3>{album.title}</h3>
                    
//                 </li>
//             ))}
//             </ul>

//         </section>
//     )


// }

// export default Albums;