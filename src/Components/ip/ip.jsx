import { useState, useEffect } from "react";
import axios from "axios";

export default function IpApp() {
  //creating IP state
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  // const getData = async () => {
  //   const res = await axios.get("https://geolocation-db.com/json/");
  //   console.log(res.data);
  //   setIP(res.data.IPv4);
  // };

  // Updated Code

  const getData = async () => {
    const res = await axios.get("http://rota/santacasa/meuip");
    // console.log(res.data);
    setIP(res.data);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  return (
    <div className="App" style={{color:"white",fontWeight:"bold"}}>
      <label>Seu ip: </label> <label> {ip}</label>
      
    </div>
  );
}
