import { useState } from "react";
import React from "react";
import Inscription from "./inscription";
import Connection from "./co";
import { Text, View } from "react-native";
import styles from "../../../css/homeCss";

function Connect(props) {
  const [BtnLog, setBtnLog] = useState("Inscription");

  const btnLog = () => {
    if (BtnLog === "Inscription") {
      setBtnLog("Connexion");
    } else {
      setBtnLog("Inscription");
    }
  };

  return (
    <View className="Log">
      {props.isConnect !== true ? (
        <Text style={styles.btnMarbre} onPress={btnLog}>
          {BtnLog}
        </Text>
      ) : (
        <Text style={styles.btnMarbre} onPress={btnLog}></Text>
      )}
      {BtnLog !== "Inscription" ? (
        <Inscription {...props} />
      ) : (
        <Connection {...props} />
      )}
    </View>
  );
}

export default Connect;


