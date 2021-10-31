import React, { useCallback, useState } from "react";
import { Dimensions, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import { ContainerFiltros, BolinhaFiltro } from "./styles";

const FILTROS = [
  { key: 9998, color: "transparent" },
  { key: 9999, color: "transparent" },
  { key: 1, color: "red" },
  { key: 2, color: "green" },
  { key: 3, color: "blue" },
  { key: 4, color: "#000" },
  { key: 5, color: "#ffe713" },
  { key: 6, color: "#e313ff" },
  { key: 7, color: "#13f7ff" },
  { key: 8, color: "#13ffb0" },
  { key: 9997, color: "transparent" },
  { key: 9996, color: "transparent" },
];

const BtnFiltro: React.FC = () => {
  const [itemAtivo, setItemAtivo] = useState(2);

  return (
    <ContainerFiltros>
      <FlatList
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        data={FILTROS}
        showsHorizontalScrollIndicator={false}
        horizontal
        getItemLayout={(data, index) =>
          // Max 5 items visibles at once
          ({
            length: Dimensions.get("window").width / 6,
            offset: (Dimensions.get("window").width / 6) * index,
            index,
          })
        }
        snapToInterval={Dimensions.get("window").width / 6}
        snapToAlignment={"center"}
        //    onScroll={({ nativeEvent }) => console.log(nativeEvent.contentOffset.x)}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <BolinhaFiltro
              onLayout={(event) => {
                console.log("height:", event.nativeEvent.layout.height);
                console.log("width:", event.nativeEvent.layout.width);
                console.log("x:", event.nativeEvent.layout.x);
                console.log("y:", event.nativeEvent.layout.y);
              }}
              cor={item.color}
              onPress={() => setItemAtivo(item.key)}
              ativo={item.key === itemAtivo}
            ></BolinhaFiltro>
          );
        }}
      />
    </ContainerFiltros>
  );
};

export default BtnFiltro;
