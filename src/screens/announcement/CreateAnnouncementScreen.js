import { useState } from "react";
import { StyleSheet, View } from "react-native";

// vonage
/* import vonage from "../../_common/utils/vonage"; */

// react navigation
import { useNavigation } from "@react-navigation/native";

// react native paper
import { Appbar, Text, TextInput, Button } from "react-native-paper";

// utils
import hashCode from "../../_common/utils/hashCode";

const CreateAnnouncement = () => {
  const [announcement, setAnnouncement] = useState("");

  const navigation = useNavigation();

  const postAnnouncementHandler = async () => {
    let stringToHash = `${announcement}${new Date()}`;
    const id = stringToHash.hashCode();
    console.log("ID " + id);

    const payload = {
      app_id: 118,
      app_token: "lLlvrk3BPbEMFakZq6qSmy",
      database_id: 104,
      database_column_values: {
        announcementId: String(id),
        announcement: announcement,
      },
    };

    console.log(payload);

    fetch("https://fingobox.com/api/database/row", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    /* const from = "Vonage APIs";
    const to = `639516781634`;
    const text = announcement;

    vonage.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          console.log("Message sent successfully.");
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`
          );
        }
      }
    }); */
  };

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
          buttonColor="#2690CB"
          mode="contained"
          style={{
            borderRadius: 0,
            width: "100%",
            height: 50,
            justifyContent: "center",
          }}
          onPress={postAnnouncementHandler}
        >
          Post Announcement
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
