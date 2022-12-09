import { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

// components
import StudentList from "./StudentList";

const Students = ({ search }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStudents([
        {
          id: "adaskfh232452abBdawda2",
          firstName: "Juan",
          middleName: "Dela",
          lastName: "Cruz",
          address: "San Agustin East Agoo, La Union",
          email: "juan@gmail.com",
          phone: "09388566223",
        },
        {
          id: "adaskfh232452abBdawda3",
          firstName: "Jose",
          middleName: "Dela",
          lastName: "Cruz",
          address: "San Agustin East Agoo, La Union",
          email: "juan@gmail.com",
          phone: "09388566223",
        },
      ]);
    }, 2000);
  });

  const filteredStudents = (keyword) => {
    const searchTerm = keyword.toLowerCase();
    return students.filter((value) => {
      return value.firstName
        .toLowerCase()
        .match(new RegExp(searchTerm, "g")) /*  ||
        value.middleName.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.lastName.toLowerCase().match(new RegExp(searchTerm, "g")) */;
    });
  };

  const renderItem = ({ item }) => (
    <StudentList
      id={item.id}
      name={`${item.firstName} ${item.middleName} ${item.lastName}`}
    />
  );

  return (
    <View style={styles.container}>
      {filteredStudents(search).length > 0 ? (
        <FlatList
          data={filteredStudents(search)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ marginTop: 20 }}>No Data</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  createAnnouncementSection: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
  },
});

export default Students;
