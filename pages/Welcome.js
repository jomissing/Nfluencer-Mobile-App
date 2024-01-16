import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RenderWelcomePage = (imageSource, title, paragraph) => (
  <View style={styles.slide}>
    <Image source={imageSource} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.paragraph}>{paragraph}</Text>
  </View>
);

const Welcome = ({ onDismiss, navigation }) => {
  // const navigation = useNavigation();
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleSkip = () => {
    onDismiss();
    navigation.navigate("Login");
  };

  const swiperRef = useRef(null);
  const next = () => {
    if (!!swiperRef) {
      swiperRef.current.scrollBy(1);
    }
  };

  const onIndexChanged = (index) => {};

  const onMomentumScrollEnd = (e, state, context) => {
    const lastIndex = state.total - 1;
    const currentIndex = state.index;
    if (!state.loop && currentIndex === lastIndex) {
      setIsLastSlide(true);
    }
  };

  return (
    <>
      <ImageBackground
        source={require("../assets/welcome/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Swiper
            loop={false}
            showsButtons={false}
            showsPagination={false}
            // index={currentIndex}
            ref={swiperRef}
            scrollEnabled={false}
            onIndexChanged={onIndexChanged}
            onMomentumScrollEnd={onMomentumScrollEnd}
            // scrollEnabled={false}
          >
            {RenderWelcomePage(
              require("../assets/welcome/slide1.png"),
              "Welcome to NFLUENCER",
              "Discover a new way to monetize your skills and digital assets with our platform."
            )}
            {RenderWelcomePage(
              require("../assets/welcome/slide2.png"),
              "Create and Sell Gigs",
              "Offer your services to a wider audience and monetize your expertise through customizable gigs."
            )}
            {RenderWelcomePage(
              require("../assets/welcome/slide4.png"),
              "Unlock NFT Rewards",
              "Enhance your gigs with unique NFT rewards, creating an additional revenue stream for your offerings."
            )}
            {RenderWelcomePage(
              require("../assets/welcome/slide3.png"),
              "Get Started",
              "Ignite your creative journey and elevate your digital presence with NFLUENCER. Begin today!"
            )}
          </Swiper>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>

            {isLastSlide ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSkip()}
              >
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  style={styles.nextButton}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={() => next()}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  style={styles.nextButton}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingTop: 0,
  },
  image: {
    resizeMode: "contain",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 100,
    gap: 20,
    width: "100%",
    padding: 40,
    paddingTop: 0,
  },
  skipButtonText: {
    color: "#fff",
    fontSize: 15,
  },
  nextButton: {
    color: "#574bef",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 100,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    width: "95%",
  },
  paragraph: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    width: "80%",
  },
});
