// import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
// // import { Searchbar } from 'react-native-paper';
// import {StatusBar, StyleSheet, SafeAreaView, Text, View, Platform } from 'react-native';



// export default function App() {
//   return (
//     <>
//       <SafeAreaView style ={styles.container}>
//         <View style={styles.search }>
//         <Text>search</Text>
//            </View>
//            <View style={styles.list}>
//       <Text>List</Text>
//            </View>
//     </SafeAreaView>
//     <ExpoStatusBar style="auto" />
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     marginTop: StatusBar.currentHeight
//   },

//   search: {
//     padding: 16, 
//     backgroundColor: "green" 
//   },

//   list: {
//     flex: 1, 
//     padding: 16, 
//     backgroundColor: "blue" 
//   }
// } 

  
// );


// ---------------------ATTEMPT AT CREATING A DROPDOWN BASED ON VideO FOR SORTING BY SCHOOL--------------------------------------
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
// import React from "react";
// import { SelectList } from "react-native-dropdown-select-list";

// import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

// const Test = () => {
//   const{category, setCategory} = React.useState("");
//   const{subcategory, setSubCategory} = React.useState("");




// export default function App() {
//   return (
//     <View style={{paddingHorizontal:18, paddingTop:20}}>
//     <>
//       <RestaurantsScreen/>
//       <SelectList
//       setSelected={setCategory}/>
//       <ExpoStatusBar style="auto" />
//     </>
//     </View>

//   );
// }
// };

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { useFonts as useOswald, Oswald_400Regular }from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular }from '@expo-google-fonts/lato';

import { theme } from "./src/infrastructure/theme"
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
// import { ThemeProvider } from "react-native-paper";

export default function App() {

    const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
});

    const [latoLoaded] = useLato({
    Lato_400Regular,
});

    if(!oswaldLoaded || !latoLoaded ) {
      return null;
    }

  return (
    <>
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}