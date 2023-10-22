import React from "react"
import {View} from "react-native";
import styled from "styled-components/native";

const TopSmall = styled.View`
    marginTop: 4px; 
`;

const TopMedium = styled.View`
    marginTop: 8px; 
`;
const TopLarge = styled.View`
    marginTop: 16px; 
`;

const LeftSmall = styled.View`
    marginLeft: 4px; 
`;

const LeftMedium = styled.View`
    marginLeft: 8px; 
`;
const LeftLarge = styled.View`
    marginLeft: 16px; 
`;

export const Spacer = ({ variant })=> {
    if(variant === "top.medium"){    
        return <TopMedium/>   
    }

    if(variant === "top.large"){    
        return <TopLarge/>;
    }

        return <TopSmall/>;


};

