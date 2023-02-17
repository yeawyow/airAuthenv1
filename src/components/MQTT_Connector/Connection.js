import React, { useEffect, useState } from "react";
import Receiver from "./Receiver";
import { useSelector, useDispatch } from "react-redux";
import mqtt from "mqtt/dist/mqtt";
import { setCardId, setcardImage, setcardStatus } from "../../app/conMqttSlice";
import { useNavigate } from "react-router-dom";
import { apiMqttUrl } from "../../Constants";
import { setPatientData } from "../../app/patientSlice";
import { removePerson } from "../../app/nhsoSlice";

//import { plugins } from "pretty-format";

/*const host = {
  host: "ws://localhost:10884/mqtt",
  clientId: `mqttjs_ + ${Math.random().toString(16).substr(2, 8)}`,
  username: "",
  password: "",
};
/*const mqttOption = {
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
};*/

const HookMqtt = () => {
  const [client, setClient] = useState(mqtt.connect(apiMqttUrl));
  const cardId = useSelector((state) => state.mqttcon?.cardId);
  const cardStatus = useSelector((state) => state.mqttcon?.cardStatus);
  const patientData = useSelector((state) => state.patient?.patientData);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    client.on("connect", (err) => {
      // setConnectStatus("Connected");
      client.subscribe("moph/ict/mqtt", (error) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
      });
    });

    client.on("message", (topic, message) => {
      const payload = { topic, message: message.toString() };

      var cardData = JSON.parse(payload.message);
      //console.log(cardData);
      if (cardData?.status === "DATA_RETRIEVED") {
        dispatch(setCardId(cardData));
        dispatch(setcardStatus(cardData.status));

        //  dispatch(setPatientData({ ...patientData, cid: cardData?.data?.cid }));
      } else if (cardData?.status === "IMAGE_RETRIEVED") {
        dispatch(setcardImage(cardData?.data));
        dispatch(setcardStatus(cardData.status));
        navigate("/patient");
      } else if (cardData?.status === "CARD_EXITED") {
        dispatch(setCardId(null));
        dispatch(setcardImage(null));
        dispatch(setcardStatus(cardData.status));
        dispatch(setPatientData({ ...patientData, cid: null }));
        dispatch(removePerson());
      }
    });
  }, [client]);

  /*if (cardStatus !== "CARD_EXITED") {
    //  navigate("/patient");
  }*/
  return (
    <div>
      {/*}  <Receiver payload={jj} />{*/}
      {/*} {cardStatus} {*/}
    </div>
  );
};

export default HookMqtt;
