import {observer} from "mobx-react-lite";
import MainChat from "./chat-components/main-chat";

const Chat = observer(() => {
    return (
      <div className="chat">
          <MainChat/>
      </div>
    );
  }
)
export default Chat;