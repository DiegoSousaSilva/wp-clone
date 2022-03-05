import React, { useReducer } from "react";
import { Image } from "react-native";

// import { Container } from './styles';

const Avatar = ({ size, user }) => {
  return (
    <Image
      style={{
        width: size,
        height: size,
        borderRadius: size,
      }}
      source={
        user.photoURL
          ? { uri: useReducer.photoURL }
          : require("../../assets/icon-square.png")
      }
      resizeMode="cover"
    />
  );
};

export default Avatar;
