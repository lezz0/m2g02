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
import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);





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