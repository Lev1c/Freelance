import {observer} from "mobx-react-lite";
import photo2 from '../../../assets/icon/Search_Magnifying_Glass.png'
import check from '../../../assets/icon/CheckChat.png'
import { useTranslation } from 'react-i18next'
import { useState } from "react";

const SideChat = observer(({
        click,
        handleGetMessageList,
        setLoadingChat,
        setChatMessages, 
        activeChatMobile,
        chatLists,
        setChatId,
        setInfoUser,
        search,
        setSearch
    }) => {
        const [selectedValue, setSelectedValue] = useState('all');
        // eslint-disable-next-line
  const [selectedValueTwo, setSelectedValueTwo] = useState('all');

  const handleButtonClick = (value) => {
    setSelectedValueTwo('all')
    setSelectedValue(value);
  };
    const { t } = useTranslation();
    const filterTasks = (chatLists) => {
        // eslint-disable-next-line
        if (selectedValue === 'all') {
          // eslint-disable-next-line
          return chatLists.status == 1 || chatLists.status == 2 || chatLists.status == 3
        }
        if (selectedValue === 'completed') {
          // eslint-disable-next-line
          return chatLists.status == 4
        }
        if (selectedValue === 'archive') {
          // eslint-disable-next-line
          return chatLists.status == 5
        }
        return true;
      };
    
    return (
        <div className={`side-chat ${activeChatMobile === false ? "" : "side-chat-mobile"}`}>
            <div className="sad">
                <input 
                  className="input-side-chat" 
                  type="text" 
                  placeholder="Поиск"
                  value={search}
                  setValue={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
                <span className="img-side-chat">
                    <img src={photo2} alt="." width={24}/>
                </span>
                <ul className="ul-side-chat">
                    <li className={`list-side-list-task ${selectedValue === 'all' ? 'list-task-pag' : ''}`}>
                        <button onClick={() => handleButtonClick('all')}>{t('chat.side-chat.text-one')}</button>
                    </li>
                    <li className={`list-side-list-task ${selectedValue === 'completed' ? 'list-task-pag' : ''}`}>
                        <button onClick={() => handleButtonClick('completed')}>{t('chat.side-chat.text-two')}</button>
                    </li>
                    <li className={`list-side-list-task ${selectedValue === 'archive' ? 'list-task-pag' : ''}`}>
                        <button onClick={() => handleButtonClick('archive')}>{t('chat.side-chat.text-three')}</button>
                    </li>
                </ul>

             
                <div className="chat-pagination">
                </div>
                <div className="side-chats-block-three">
                    {chatLists.chatList ? chatLists.chatList.filter(filterTasks).map(res => {

                        const currentDate = new Date(); // Получаем текущую дату и время
                        const passedTime = new Date(res.lastMessageDateTime); // Преобразуем строку в объект Date

                        const timeDifference = currentDate - passedTime; // Разница в миллисекундах
                        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Разница в днях

                        let formattedTime;

                        if (daysDifference === 0) {
                          // Если это сегодня, отобразите время в формате 'HH:mm'
                          const hours = passedTime.getHours().toString().padStart(2, '0');
                          const minutes = passedTime.getMinutes().toString().padStart(2, '0');
                          formattedTime = `${hours}:${minutes}`;
                        } else if (daysDifference <= 5) {
                          // Если это до 3 дней назад, отобразите день недели (сокращенно)
                          const weekday = passedTime.toLocaleDateString('ru-RU', { weekday: 'short' });
                          formattedTime = weekday;
                        } else if (currentDate.getFullYear() === passedTime.getFullYear()) {
                          // Если это текущий год, отобразите дату в формате 'dd.MM'
                          const day = passedTime.getDate().toString().padStart(2, '0');
                          const month = (passedTime.getMonth() + 1).toString().padStart(2, '0');
                          formattedTime = `${day}.${month}`;
                        } else {
                          // Если это прошлый год, отобразите дату в формате 'dd.MM.yyyy'
                          const day = passedTime.getDate().toString().padStart(2, '0');
                          const month = (passedTime.getMonth() + 1).toString().padStart(2, '0');
                          const year = passedTime.getFullYear();
                          formattedTime = `${day}.${month}.${year}`;
                        }
                        return (
                            <div className="side-chats" onClick={async () => {
                                setChatMessages()
                                click()
                                setChatId()
                                setLoadingChat(false)
                                setChatId(res.chatId)
                                setInfoUser(res)
                            }}>
                                <h3>{res.orderName}</h3>
                                <div className="side-chats-block">
                                    <div className="block-personAvatar-chat">
                                        <img 
                                            src={`http://194.67.113.55/` + res.personAvatar} 
                                            alt='.'
                                            className="personAvatar-chat"
                                        />
                                        {res.personOnline === true ? 
                                        <div className="active-dot"></div>
                                        :
                                        ''
                                        }
                                        
                                    </div>
                                    <div className="side-chats-block-two">
                                        <h4>{res.personName}</h4>
                                        <span>{formattedTime}</span>
                                        <span className="text-ellipsis">{res.lastMessage}</span>
                                        {res.unReadCount === 0 ?
                                            <img src={check} alt="." width={24}/>
                                        :
                                        <div className="circle">
                                            <span className="count-chat">{res.unReadCount}</span>
                                        </div>
                                            
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    ""
                    }
                    
                    
                </div>
                
            </div>
        </div>
    );
  }
)
export default SideChat;