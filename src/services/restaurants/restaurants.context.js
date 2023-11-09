// import React, { useState, createContext, useEffect, useMemo } from "react";

// import { restaurantsRequest, restaurantTransform } from "./restaurants.service";
// import { Children } from "react/cjs/react.production.min";

// export const RestaurantsContext = createContext ();

// export const RestaurantsContextProvider =({ children }) => {
// //     const [ restaurants, setRestaurants] = useState([]);
// //     const [isLoading, setIsLoading] = useState(false);
// //     const [error, setError] = useState(null);

// // const retrieveRestaurants = () => {
// //     setIsLoading(true);
// //     setTimeout(() => {
// //     restaurantsRequest()
// //     .then(restaurantsTransform)
// //     .then((results) => {
// //         setIsLoading(false);
// //         setRestaurants(restaurants);
// //     })
// //     .catch((err) => {
// //         setIsLoading(false);
// //         setError(err);
// //     });
// //     }, 2000);
// // };

// //     useEffect(() => {
// //         retrieveRestaurants();
// //     },[]);

//     return(
//         <RestaurantsContext.Provider 
//             value={{
//                 restaurant: [1,2,3],
//                 // restaurants,
//                 // isLoading,
//                 // error,
//         }}
//         >
//             {children}
//         </RestaurantsContext.Provider>
//     );
//     };

    import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6, 7, 8],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};