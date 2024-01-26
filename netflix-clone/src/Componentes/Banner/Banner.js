import React from 'react'

function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "url (https://handoff-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg) ",
        backgroundPosition: "center center"
      }}
    ></div>
  );
}

export default Banner








// import React from 'react'

// const Banner = () => {
//   const[movie,setMovie] = useState({})
//   return (
//     <div className='banner'>
//       style={{
//         backgroundsSize: "cover",

//         backgroundImage: 'url('https:api.themoviedb.org/3/genre/movie/list?language=en,
      
//         backgroundsPosition: "center",
//         backgroundsRepeat:"no-repeat"
        
        
//       }}
//       <div className='banner_contentes'>
//         <h1 className='banner_titil'>
//           {movie?.titie || movie?.name || movie?.original_name}
//           <div className='banner_botton'>
//                <button className='banner_button play'>play</button>
//               <button className='banner_button'>My List</button>
//           </div>
          
//          </h1>
//       </div>

//     </div>
//   )
// }

// export default Banner