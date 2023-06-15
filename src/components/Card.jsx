import React from 'react'
import data from '../data/logements.json'

function Card() {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.cover}</div>
      ))}
    </div>
  );
}

export default Card;


// import React, { useEffect, useState } from 'react';

// function App() {
//   const [logements, setLogements] = useState([]);

//   useEffect(() => {
//     fetch('src/data/logements.json')
//       .then(response => response.json())
//       .then(data => {
//         setLogements(data);
//       })
//       .catch(error => {
//         console.log('Une erreur s\'est produite :', error);
//       });
//   }, []);

//   return (
//     <div>
//       {logements.map(logement => (
//         <div key={logement.id}>
//           <h3>{logement.title}</h3>
//           <p>{logement.description}</p>
//           {/* Autres informations à afficher */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
