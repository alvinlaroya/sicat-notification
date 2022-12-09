import { useState } from "react";
import { StyleSheet, View } from "react-native";

// react navigation
import { useNavigation } from "@react-navigation/native";

// react native paper
import { Appbar, Text, TextInput, Button } from "react-native-paper";

const CreateAnnouncement = () => {
  const [announcement, setAnnouncement] = useState("");

  const navigation = useNavigation();

  return (
    <>
      <Appbar.Header style={styles.header} elevated>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Create Announcement"
          titleStyle={{
            color: "black",
            fontSize: 14,
          }}
        />
      </Appbar.Header>
      <View style={(styles.container, { padding: 20 })}>
        <TextInput
          placeholder="Say something"
          value={announcement}
          onChangeText={(text) => setAnnouncement(text)}
          multiline={true}
          numberOfLines={25}
          mode="flat"
          style={{ marginTop: 10 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Button
          buttonColor="#63A86E"
          mode="contained"
          style={{
            borderRadius: 0,
            width: "100%",
            height: 50,
            justifyContent: "center",
          }}
          onPress={() => console.log("Pressed")}
        >
          Save Changes
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    backgroundColor: "white",
  },
});

export default CreateAnnouncement;
