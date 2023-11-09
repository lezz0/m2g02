// import React from "react";
// import { Searchbar } from "react-native-paper";
// import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";

// import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

// export const RestaurantsScreen = () => (
//     <SafeAreaView style={styles.container}>
//         <View style={styles.search}>
//           <Searchbar />
//         </View>
//         <View style={styles.list}>
//           <RestaurantInfoCard />
//         </View>
//       </SafeAreaView>
// );

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: StatusBar.currentHeight,
//     },
//     search: {
//       padding: 16,
//     },
//     list: {
//       flex: 1,
//       padding: 16,
//       backgroundColor: "blue",
//     },
//   });


// --------------{{{Testing with errors at part111}}}-------------------------------
// import React from "react";
// import { Searchbar } from "react-native-paper";
// import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
// import styled from "styled-components/native";

// import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   matgin-top: ${StatusBar.currentHeight}px
// `;

// const SearchContainer = styled.View`
//   padding: ${(props) => props.theme.space[3]};
//   margin-right: 70px;
// `;

// const RestaurantListContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;


// export const RestaurantsScreen = () => (
//     <SafeArea>
//     <SearchContainer>
//       <Searchbar />
//       </SearchContainer>
//     <RestaurantListContainer>
//       <RestaurantInfoCard />
//       </RestaurantListContainer>
//   </SafeArea>
// );





// import React from "react";
// import { Searchbar } from "react-native-paper";
// import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
// import styled from "styled-components/native";

// import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// `;

// const SearchContainer = styled.View`
//   padding: ${(props) => props.theme.space[3]};
// `;

// const RestaurantListContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;

// export const RestaurantsScreen = () => (
//   <SafeArea>
//     <SearchContainer>
//       <Searchbar />
//     </SearchContainer>
//     <RestaurantListContainer>
//       <RestaurantInfoCard />
//     </RestaurantListContainer>
//   </SafeArea>
// );



// ------------[working code from gh]------------------------
import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
// import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  
`;

const RestaurantListContainer = styled.View`
  
  padding: ${(props) => props.theme.space[1]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 15
  }

})``

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
    console.log(restaurantContext)
   return(

  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    
      <RestaurantList
        data = {restaurantContext.restaurants}
        horizontal
        renderItem={() => (
          <Spacer position="bottom" size="large">
           <RestaurantInfoCard /> 
           </Spacer>
        )}
        
        keyExtractor ={(item) => item.name}
      />       
  </SafeArea>
)
};






















// import React, { useContext } from "react";
// import { Searchbar } from "react-native-paper";
// import { FlatList } from "react-native";
// import styled from "styled-components/native";

// import { SafeArea } from "../../../components/utility/safe-area.component";
// import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
// import { Spacer } from "../../../components/spacer/spacer.component";

// import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

// const SearchContainer = styled.View`
//   padding: ${(props) => props.theme.space[3]};
// `;

// const RestaurantList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 16,
//   },
// })``;

// export const RestaurantsScreen = () => {
//   const restaurantContext = useContext(RestaurantsContext);
//   console.log(restaurantContext)
//   return (
//     <SafeArea>
//       <SearchContainer>
//         <Searchbar />
//       </SearchContainer>
//       <RestaurantList
//         data={restaurantContext.restaurants}
//         renderItem={() => (
//           <Spacer position="bottom" size="large">
//             <RestaurantInfoCard />
//           </Spacer>
//         )}
//         keyExtractor={(item) => item.name}
//       />
//     </SafeArea>
//   );
// };




















































// import React from "react";
// import { Searchbar } from "react-native-paper";
// import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
// import styled from "styled-components/native";
// import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
//   `;
  
//   const SearchContainer = styled.View`
 
//   `;
//   const RestaurantListContainer = styled.View`
//     flex: 1;
//     padding: ${(props) => props.theme.space[3]};
//   `;
//   export const RestaurantsScreen = () => (
//     <SafeArea>
//       <SearchContainer>
//         <Searchbar />
//       </SearchContainer>
//       <RestaurantListContainer>
//         <RestaurantInfoCard />
//       </RestaurantListContainer>
//     </SafeArea>
//   );





// import React from "react";
// import { Searchbar } from "react-native-paper";
// import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
// import styled from "styled-components/native";
// import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// `;

// const SearchContainer = styled.View`
//   padding: ${(props) => props.theme.space[3]};
// `;
// const RestaurantListContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;
// export const RestaurantsScreen = () => (
//   <SafeArea>
//     <SearchContainer>
//       <Searchbar />
//     </SearchContainer>
//     <RestaurantListContainer>
//       <RestaurantInfoCard />
//     </RestaurantListContainer>
//   </SafeArea>
// );