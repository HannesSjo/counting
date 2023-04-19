import { useState } from "react";
import { View, TextInput, Keyboard } from "react-native";

import { CountButton } from "./CountButton";
import { CommonStyles } from "../styles/CommonStyles";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  return (
    <View style={CommonStyles.row}>
      <TextInput value={name} placeholder="Enter a name" onChangeText={setName} />
      <CountButton
        text="Add"
        submit={() => {
          Keyboard.dismiss();
          setName("");
          addNewCountable(name);
        }}
      />
    </View>
  );
};
