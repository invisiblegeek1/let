import React, { useState, useEffect } from "react";
import { app } from "./firebaseSetup";
import {
  getDatabase,
  ref,
  limitToFirst,
  query,
  onValue,
  get,
} from "firebase/database";
import "./CollegePage.css";

export default function CollegePage() {
  const image =
    "https://firebasestorage.googleapis.com/v0/b/leelavathieducationaltrust.appspot.com/o/carousel%20images%2Fmedicine.webp?alt=media&token=bceab6b2-9f4f-4d0a-9fcd-3ce10c39649b";
  const [data, setData] = useState([]);
  const database = getDatabase(app);
  const db = query(
    ref(database, "17GdT8R42AbMwR7_U_mCadtKOwECPbtelOtXODiMLDi0/medical"),
    limitToFirst(15)
  );

  // useEffect(()=>{
  //   get(child(dbRef,"17GdT8R42AbMwR7_U_mCadtKOwECPbtelOtXODiMLDi0/medical")).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       // console.log(snapshot.val());
  //       setData(snapshot.val())
  //       console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });

  // },[dbRef])
  get(db, (snapshot) => {
    if (snapshot.exists()) {
      // console.log(snapshot.val());
      setData(snapshot.val());
    } else {
      console.log("No data available");
    }
  });
  // get(child(dbRef,"17GdT8R42AbMwR7_U_mCadtKOwECPbtelOtXODiMLDi0/medical")).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     // console.log(snapshot.val());
  //     setData(snapshot.val())
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  return (
    <div className="College-Page-Container">
      <div className="College-Page-Wrrapper">
        <div className="College-Page-Img-Contariner">
          <img className="College-top-Image" src={image} alt=""></img>
        </div>
        <div className="College-data-container">
          <div className="College-data-list-container">
            <div className="College-data-list">
              <div className="data-list-item-header">
                <div className="item_no">SNo</div>
                <div className="item_course">Course name</div>
                <div className="item_management">Management of college</div>
                <div className="item_college">
                  Name and Address of medical college
                </div>
                <div className="item_seats">Annual intake seats</div>
              </div>
              {data.map((item, index) => {
                return (
                  <div key={index} className="data-list-item">
                    <div className="item_no">{item.SNo}</div>
                    <div className="item_course">{item.courese_name}</div>
                    <div className="item_management">
                      {item.management_of_college}
                    </div>
                    <div className="item_college">
                      {item.name_and_address_of_medical_college}
                    </div>
                    <div className="item_seats">{item.annual_intake_seats}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
