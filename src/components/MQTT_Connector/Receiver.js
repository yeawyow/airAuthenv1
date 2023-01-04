import React, { useEffect, useState } from "react";
//import { Card, List } from "antd";

const Receiver = ({ payload }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (payload) {
      setMessages((messages) => [...messages, payload]);
    }
  }, [payload]);

  // console.log(`messages`, mapped?.status);

  /* const renderListItem = (item) => (
    <List.Item>
      <List.Item.Meta description={item.message} />
    </List.Item>
  );*/

  return (
    <div>
      {/*}   <Card title="Receiver">
        <List
          size="small"
          bordered
          dataSource={messages}
          renderItem={renderListItem}
        />
  </Card>{*/}
    </div>
  );
};

export default Receiver;
