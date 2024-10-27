import {observer} from "mobx-react-lite";
import SideChat from "./side-chat";
import ChatMessage from "./chat-message";
import { useEffect, useState } from "react";
import photo from '../../../assets/icon/Arrow_Right_LG.png'
import { getChatList, getChatMessages, sendChatMessage } from "../../../http/chatApi";
import { ClipLoader } from "react-spinners";

const MainChat = observer(() => {
    const [activeChatMobile, setActiveChatMobile] = useState(false)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchMessages = async () => {
        getChatList()
        .then(data => setChatLists(data))
        .finally(() => setLoading(false))
      }
      fetchMessages();
      const interval = setInterval(fetchMessages, 3000);

      return () => clearInterval(interval);
    }, [])

    const [chatId, setChatId] = useState('')

    const [loadingChat, setLoadingChat] = useState(true)

    const [lastFetchedChatId, setLastFetchedChatId] = useState('');
    const [chatLists, setChatLists] = useState('')
    const [chatMessages, setChatMessages] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const [infoUser, setInfoUser] = useState('')
    const [messageСheck, setMessageCheck] = useState('')

    const fetchMessage = async () => {
      const data = await getChatMessages(chatId);
      setChatMessages()
      setMessageCheck('');
      setChatMessages(data);
      setLoadingChat(true) 
      setLastFetchedChatId(chatId);
    };
  

    useEffect(() => {
      if (chatId !== lastFetchedChatId) {
        setMessageCheck('');
        fetchMessage();
      }
    
      const interval = setInterval(fetchMessage, 3000);
    
      return () => {
        clearInterval(interval);
      };
      // eslint-disable-next-line
    }, [chatId, lastFetchedChatId]);
    
    

    if(chatLists && chatLists === 403) {
      window.location.replace('/')
    }
    
    if (loading) {
      return (
        <div className="loader">
          <div className='block-loader'>
            <ClipLoader size={20} color={'#646464'}/>
          </div>
        </div>
      )
    }

    const sendMessage = () => {
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = inputMessage;

    // Проверяем ссылку перед отправкой
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const domainPattern = /^https?:\/\/194\.58\.107\.109/i;

    if (urlPattern.test(message)) {
      const urls = message.match(urlPattern);

      for (const url of urls) {
        if (!domainPattern.test(url)) {
          console.log('Отправка ссылок с внешних источников запрещена.');
          return;
        }
      }
    }

    sendChatMessage(chatId, inputMessage).then(() => {
        setInputMessage('')
        setMessageCheck(inputMessage)
        fetchMessage()
      });
    setMessageCheck(inputMessage)
    console.log('Сообщение отправлено:', message);

    // Сбросить поле сообщения
    setInputMessage('');
  };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
      };

    const click = () => {
      setActiveChatMobile(true)
    }
    const clickTwo = () => {
      setActiveChatMobile(false)
    }
    
    return (
      <div className="container">
        <div className="container-chat">
          <SideChat 
            click={click} 
            activeChatMobile={activeChatMobile}
            chatLists={chatLists}
            setChatId={setChatId}
            setInfoUser={setInfoUser}
            setLoadingChat={setLoadingChat}
            setChatMessages={setChatMessages}
            chatMessages={chatMessages}
            loadingChat={loadingChat}   
          />
          <div className={activeChatMobile === false ? "button-back-chat" : "button-back-chat active"} >
            <button onClick={clickTwo} className="back-chat-button">
              <img src={photo} width={24} alt="."/>
            </button>
          </div>
          <ChatMessage 
            activeChatMobile={activeChatMobile}
            chatMessages={chatMessages}
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            sendMessage={sendMessage}
            handleInputKeyDown={handleInputKeyDown}
            chatLists={chatLists}
            infoUser={infoUser}
            handleSubmit={handleSubmit}
            messageСheck={messageСheck}
            setMessageCheck={setMessageCheck}
            loadingChat={loadingChat}
            chatId={chatId}
          />
        </div>
      </div>
    );
  }
)
export default MainChat;