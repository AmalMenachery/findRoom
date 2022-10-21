import React, { useState } from "react";
import { ImageBackground, View, Text, Image } from "react-native";
import styles from "./home.styles";
import Logo from "@svg/logo.svg";
import ImgURLs from "@assets/images";
import GuestSearchBox from "@organisms/guestSearchBox";
import { GuestDetail } from "types/guestDetail";

const Partners = ImgURLs.Partners;
const HomeImg = ImgURLs.HomeImg;

const Home = () => {
  const [guestDetails, setGuestDetails] = useState<GuestDetail[]>([
    { id: 0, adults: 2, children: 0 },
  ]);
  const updateGuestDetails = (guestDetails) => {
    setGuestDetails(guestDetails);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={HomeImg}
        style={styles.imgBackDrop}
        resizeMode={"cover"}
      >
        <View style={styles.container}>
          <View style={styles.logo}>
            <Logo width={"200"} height={"200"} />
          </View>
          <View style={styles.title}>
            <Text style={styles.headerText}>
              {"Find the perfect\n deal, always."}
            </Text>
          </View>
          <View style={styles.content}>
            <GuestSearchBox
              guestDetails={guestDetails}
              updateDetails={updateGuestDetails}
            />
            <Image
              source={Partners}
              style={styles.partners}
              resizeMode={"contain"}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Home;
