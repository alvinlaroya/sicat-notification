import { useState } from "react";
import { View } from "react-native";

// react native paper
import {
  Button,
  Menu,
  Divider,
  Card,
  IconButton,
  Paragraph,
} from "react-native-paper";

// components
import SicatAvatar from "../avatar/SicatAvatar";

const LeftContent = (props) => <SicatAvatar {...props} size={30} />;

const AnnouncementList = ({ id, title }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const editAnnouncementHandler = () => {
    closeMenu();
  };

  const deleteAnnouncementHandler = () => {
    closeMenu();
  };

  const moreOptions = (props) => (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <IconButton
          icon="dots-vertical"
          {...props}
          size={15}
          style={{ marginBottom: 15 }}
          onPress={openMenu}
        />
      }
    >
      <Menu.Item
        onPress={editAnnouncementHandler}
        leadingIcon="pencil-outline"
        title="Edit Announcement"
        dense={true}
      />
      <Menu.Item
        onPress={deleteAnnouncementHandler}
        leadingIcon="delete-outline"
        title="Delete Announcement"
        dense={true}
      />
    </Menu>
  );

  return (
    <View>
      <Card
        style={{ borderRadius: 0, borderBottomWidth: 1, borderColor: "#eee" }}
      >
        <Card.Title
          title={`Sicat College • ${new Date().toLocaleString()}`}
          left={LeftContent}
          right={moreOptions}
          titleStyle={{ fontSize: 13 }}
        />
        <Card.Content>
          <Paragraph style={{ fontSize: 11 }}>{title}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default AnnouncementList;
