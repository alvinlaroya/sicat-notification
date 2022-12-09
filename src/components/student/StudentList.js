import { StyleSheet } from "react-native";

// react native paper
import { List, Avatar, IconButton } from "react-native-paper";

// react navigation
import { useNavigation } from "@react-navigation/native";

const Students = ({ id, name }) => {
  const navigation = useNavigation();
  return (
    <List.Item
      title={name}
      style={{ paddingVertical: 0, paddingHorizontal: 5 }}
      left={(props) => (
        <Avatar.Image
          {...props}
          size={25}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuNYMYNaRi00Ov27G9c0fNpMJP5NQJ06A6eYNGDPMpfvDvfOPuuA13FcP9ftMIIunqdM&usqp=CAU",
          }}
        />
      )}
      right={(props) => (
        <IconButton
          {...props}
          size={20}
          onPress={() => navigation.navigate("StudentDetailScreen")}
          icon="dots-vertical"
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  //
});

export default Students;
