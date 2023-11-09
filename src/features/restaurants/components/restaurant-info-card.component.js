// import React from "react";
// import { SvgXml } from "react-native-svg";

// import star from"../../../../assets/star";
// import open from "../../../../assets/open";
// import { Spacer } from "../../../components/spacer/spacer.component";
// import { Text } from "../../../components/typography/text.component";


// import {
//     RestaurantCard,
//     RestaurantCardCover,
//     Info,
//     Section,
//     SectionEnd,
//     Rating,
//     Icon,
//     Address,
// } from "../../../components/restaurant-info-card.styles";


// // const Icon = styled.Image`
// //     width: 30px;
// //     height: 30px;
// // `;

// // const isClosedTemporarily = styled.View`
// //     padding: ${(props) => props.theme.space[1]};
// //     color: ${(props) => props.theme.colors.ui.tertiary};
// `


// // const Open = styled(SvgXml)`
// //     flex-direction: row;
// // `;




// export const RestaurantInfoCard = ({ restaurant = {} }) => {
//     const {
//         name = 'Subway', 
//         icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
//         photos = [
//         "https://www.halalfoodplaces.com/wp-content/uploads/2021/02/sg1448-subway-nanyang-polytechnic-600x284.png"
//         ],
//         address = "NYP Block A Level 2, #A229",
//         isOpenNow = true,
//         rating = "4",
//         isClosedTemporarily = true,  
//         } = restaurant;

    
//     const ratingArray = Array.from(new Array(Math.floor(rating)));
//     console.log(ratingArray);

//     return (
//         <RestaurantCard elevation={5}>
//             <RestaurantCardCover key={name} source={{  uri: photos[0]}} />
//             <Info>
//                 <Text variant="label">{name}</Text>
//                 <Section>
//                     <Rating>
//                     {ratingArray.map(() => (
//                         <SvgXml xml={star} width={20} height={20} />
//                     ))}
//                     </Rating>
//                 <SectionEnd>
//                 {isClosedTemporarily && (
//                         <Text variant="error" >
//                         CLOSED 
//                         </Text>
//                     )}
//                     <Spacer position= "left" size="large" >

//                     {/* {isOpenNow && (
//                         // <Text variant="label" style={{ color: "green"}}>
//                         //             OPEN
//                         //     </Text>
//                         )} */}
// {/* ^^^^^^^^^^^^^^^^^ABOVE IS TO ADD IMAGE FOR OPEN WORD EITHER OR FOR PARA BELOW^^^^^^^^^^^^^^^^^^^^^^^^ */}
//                     {isOpenNow && 
//                     <SvgXml xml={open} width={30} height={30} />}
//                     </Spacer>
//                     <Spacer position= "left" size="large" >
//                     <Icon source={{uri: icon}}/>
//                     </Spacer>

// {/* ^^^^^^^^^^^^^^^^^ABOVE IS TO ADD IMAGE FOR OPEN SIGN^^^^^^^^^^^^^^^^^^^^^^^^ */}


//                 </SectionEnd>
//                 </Section>
//                 <Address>{address}</Address>           
//             </Info>
//          </RestaurantCard>
//     );
// };
// ^^^^^^^THIS WORKS my own code======================




// import React from "react";
// import styled from "styled-components/native";
// import { Text, StyleSheet } from "react-native";
// import { Card } from "react-native-paper";

// const RestaurantCard = styled(Card)`
//   background-color: white;
// `;

// const RestaurantCardCover = styled(Card.Cover)`
//   padding: 20px;
//   background-color: white;
// `;

// const Title = styled(Text)`
//   padding: 16px;
//   color: red;
// `;

// export const RestaurantInfoCard = ({ restaurant = {} }) => {
//     const {
//       name = "Subway",
//       icon,
//       photos = [
//         "https://www.halalfoodplaces.com/wp-content/uploads/2021/02/sg1448-subway-nanyang-polytechnic-600x284.png",
//       ],
//       address = "100 some random street",
//       isOpenNow = true,
//       rating = 4,
//       isClosedTemporarily,
//     } = restaurant;
  
//     return (
//         <RestaurantCard elevation={5}>
//         <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
//         <Title>{name}</Title>
//         </RestaurantCard>
//   );
// };
// // ----------  ^THIS WORKS CNP ED FORM GH------



import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles.js";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Subway",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.halalfoodplaces.com/wp-content/uploads/2021/02/sg1448-subway-nanyang-polytechnic-600x284.png",
    ],
    address = "NYP Block A Level 2, #A229",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};