import React from "react";
import styled from "styled-components/native";

import { Text, Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from"../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard =  styled(Card)`
    border-radius: 10px;
    margin: ${(props) => props.theme.space[4]};
    background-color: ${(props) => props.theme.colors.bg.tertiary};   
`;

const RestaurantCardCover =  styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    border-radius: 2px;
    background-color: ${(props) => props.theme.colors.bg.primary};    
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading };
    font-size: ${(props) => props.theme.fontSizes.body };   
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body };
    font-size: ${(props) => props.theme.fontSizes.caption };
`;

const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;



const Info = styled.View`
    
    padding: ${(props) => props.theme.space[3]};
`

const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

// const isClosedTemporarily = styled.View`
//     padding: ${(props) => props.theme.space[1]};
//     color: ${(props) => props.theme.colors.ui.tertiary};
`


// const Open = styled(SvgXml)`
//     flex-direction: row;
// `;




export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Subway', 
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
        "https://www.halalfoodplaces.com/wp-content/uploads/2021/02/sg1448-subway-nanyang-polytechnic-600x284.png"
        ],
        address = "NYP Block A Level 2, #A229",
        isOpenNow = true,
        rating = "4",
        isClosedTemporarily = true,  
        } = restaurant;

    
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    console.log(ratingArray);

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{  uri: photos[0]}} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                    {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                    ))}
                    </Rating>
                <SectionEnd>
                {isClosedTemporarily && (
                        <Text variant="label" 
                         style={{ color: "red" }} >
                        CLOSED 
                        </Text>
                    )}
                    <View style = {{ paddingLeft: 16 }} />

                    {/* {isOpenNow && (
                        // <Text variant="label" style={{ color: "green"}}>
                        //             OPEN
                        //     </Text>
                        )} */}
{/* ^^^^^^^^^^^^^^^^^ABOVE IS TO ADD IMAGE FOR OPEN WORD EITHER OR FOR PARA BELOW^^^^^^^^^^^^^^^^^^^^^^^^ */}
                    {isOpenNow && 
                    <SvgXml xml={open} width={30} height={30} />}
                    <View style={{paddingLeft: 16,}}/>
                    <Image style={{ width: 30, height: 30}} source={{uri: icon}}></Image>

{/* ^^^^^^^^^^^^^^^^^ABOVE IS TO ADD IMAGE FOR OPEN SIGN^^^^^^^^^^^^^^^^^^^^^^^^ */}


                </SectionEnd>
                </Section>
                <Address>{address}</Address>           
            </Info>
         </RestaurantCard>
    );
};
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