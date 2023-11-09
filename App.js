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






// =================CHECKPOINT FROM BOTTOM BAR NAVIGATION BELOW====================

// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
// import React from "react";
// import { Text } from "react-native";
// import { ThemeProvider } from "styled-components/native";
// import { Ionicons, AntDesign } from '@expo/vector-icons';


// import { useFonts as useOswald, Oswald_400Regular }from '@expo-google-fonts/oswald';
// import { useFonts as useLato, Lato_400Regular }from '@expo-google-fonts/lato';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from "@react-navigation/native";

// import { SafeArea } from "./src/components/utility/safe-area.component";
// import { theme } from "./src/infrastructure/theme"
// import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
// // import { ThemeProvider } from "react-native-paper";

// const Tab = createBottomTabNavigator();


// const TAB_ICON = {
//   Restaurants: "md-restaurant",
//   Map: "md-map",
//   Settings: "md-settings",
// };


// const Settings = () => (
//     <SafeArea> 
//       <Text>Settings</Text>
//       </SafeArea> 
//       );

// const Map = () => (
// <SafeArea> 
//   <Text>Map</Text>
//   </SafeArea>
//   );

//   const screenOptions = ({ route }) =>{
//     return{
//       tabBarIcon,
//     }
//   }

// export default function App() {

//     const [oswaldLoaded] = useOswald({
//     Oswald_400Regular,
// });

//     const [latoLoaded] = useLato({
//     Lato_400Regular,
// });

//     if(!oswaldLoaded || !latoLoaded ) {
//       return null;
//     }

//   return (
//     <>
//     <ThemeProvider theme={theme}>
//       <NavigationContainer>
//         <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                   tabBarIcon: ({ focused, color, size }) => {
//                     let iconName ;
        
//                     if (route.name === 'Restaurants') {                     
//                       iconName = "md-restaurant";
//                     } else if (route.name === "Settings") {
//                       iconName = "md-settings";
//                     }  else if (route.name === "Map") {
//                       iconName = "md-map";
//                     }
//                     // } else if (route.name === "Profile") {
//                     //   iconName = "md-person-circle-outline";
//                     // }  else if (route.name === "Map") {
//                     //   iconName = "md-school";}
                    
//                     // You can return any component that you like here!
                    
//                     return <Ionicons name={iconName} size={size} color={color} />;
//                   },
//                   tabBarActiveTintColor: 'tomato',
//                   tabBarInactiveTintColor: 'gray',
//                 })}
//         >
//           <Tab.Screen name="Restaurants" component={RestaurantsScreen}/>
//           <Tab.Screen name="Map" component={Map}/>
//           <Tab.Screen name="Settings" component={Settings}/>
//           {/* <Tab.Screen name="Profile" component={Settings}/> */}
//         </Tab.Navigator>
//       </NavigationContainer>
//       </ThemeProvider>
//       <ExpoStatusBar style="auto" />
//     </>
//   );
// }

// ===================================================



import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";


import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}