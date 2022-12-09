import Announcement from "../models/announcement";
import LDatabase from "./ldatabase";

export default class Database {
  constructor() {
    this.table_name = "announcements";
    this.db = new LDatabase("Announcement.db", (db) => {
      db.executeQuery(
        `CREATE TABLE IF NOT EXISTS ${this.table_name} (id INTEGER PRIMARY KEY AUTOINCREMENT, announcement TEXT, createdDate DATETIME)`,
        () => {},
        (error) => {
          console.log(error);
        }
      );
      console.log("Table Created");
    });
  }

  fetchAnnouncements() {
    return new Promise((resolve) => {
      this.db.executeQuery(
        `SELECT * FROM ${this.table_name}`,
        (_, res) => {
          resolve(res.rows._array);
        },
        (e) => console.log(e)
      );
    });
  }

  createAnnouncement(announcement = new Announcement()) {
    return new Promise((resolve) => {
      if (announcement.isValidWithoudId()) {
        const query = `INSERT INTO ${this.table_name} (announcement, createdDate) VALUES ('${announcement.announcement}', '${announcement.createdDate}')`;
        this.db.executeQuery(
          query,
          () => resolve(true),
          (_) => {
            console.log(_);
            resolve(false);
          }
        );
      } else resolve(false);
    });
  }
}
