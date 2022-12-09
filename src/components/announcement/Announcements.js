import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import axios from "axios";

// components
import AnnouncementList from "../announcement/AnnouncementList";

// utils
import axiosClient from "../../_common/utils/axiosClient";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  const fetchAnnouncements = async () => {
    const response = await axiosClient.get(
      "api/database/rows/118/lLlvrk3BPbEMFakZq6qSmy/104"
    );
    console.log(response.data);
    setAnnouncements(response.data);
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const renderItem = ({ item }) => (
    <AnnouncementList
      key={item.columns.announcementId}
      id={item.columns.announcementId}
      title={item.columns.announcement}
    />
  );

  return announcements.length > 0 ? (
    <FlatList
      data={announcements}
      renderItem={renderItem}
      keyExtractor={(item) => item.columns.announcementId}
    />
  ) : (
    <ActivityIndicator animating={true} />
  );
};

export default Announcements;
