import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const People = () => {
  const ticket = useSelector((state) => state.auth.ticket);

  return (
    <View>
      <Text>Ticket: {ticket}</Text>
    </View>
  );
};

export default People;
