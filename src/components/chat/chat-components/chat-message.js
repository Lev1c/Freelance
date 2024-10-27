import {observer} from "mobx-react-lite";
import photo4 from '../../../assets/icon/Vector21.png'
import photo5 from '../../../assets/icon/Paper_Plane.png'
import photo6 from '../../../assets/icon/More_Vertical.png'
import check from '../../../assets/icon/CheckChat.png'
import checkAll from '../../../assets/icon/Check_AllChat.png'
import photo3 from '../../../assets/icon/File_Download.png'
import { saveAs } from 'file-saver';
import { useEffect, useRef, useState } from "react";
import Loader from "./loader";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { sendChatFile } from "../../../http/chatApi";

const ChatMessage = observer(({
        messageСheck,
        setMessageCheck,
        chatId, 
        loadingChat,
        activeChatMobile,
        infoUser,
        handleSubmit,
        chatMessages,
        inputMessage,
        setInputMessage,
        sendMessage,
        handleInputKeyDown
    }) => {
    const [active, setAcive] = useState(false)
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const container = containerRef.current
    useEffect(() => {
        const container = containerRef.current;
        container && container.scrollTo(0, container.scrollHeight);

        console.log(container)
        // eslint-disable-next-line
    }, [container,messageСheck,loadingChat]);

    const handleClickList = () => {
        active ?
        setAcive(false)
        :
        setAcive(true)
    }
    
    
    let currentDate = null;
    const month = t('profile.education.monthNames', { returnObjects: true })
    const formatDate = (dateString) => {
        const messageDate = new Date(dateString);
        const day = messageDate.getDate();
        const month = months[messageDate.getMonth()];
        const year = messageDate.getFullYear();

        if (currentDate && currentDate.getDate() === messageDate.getDate()) {
          return null;
        } else {
            currentDate = messageDate;

            if (currentDate.getFullYear() !== new Date().getFullYear()) {
              return `${day} ${month} ${year}`;
            } else {
              return `${day} ${month}`;
            }
        }
    };

    const months = month;
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    const formatMessage = (message) => {
        const downloadPhoto = (url, name) => {
            fetch(url)
              .then(response => response.blob())
              .then(blob => {
                const fileName = `${name}`;
                saveAs(blob, fileName);
              })
              .catch(error => {
                console.error('Ошибка при скачивании фото:', error);
              });
          }
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const fileExtensions = ['pdf', 'docx', 'jpg'];
      
        const parts = message.split(urlRegex);
        return parts.map((part, index) => {
          if (part.match(urlRegex)) {
            return (
              <a key={index} className="link-format-message" href={part} target="_blank" rel="noopener noreferrer">
                {t('chat.chat-message.link')}
              </a>
            );
          } else {
            const fileExtension = fileExtensions.find(ext => part.toLowerCase().endsWith(`.${ext}`));
            if (fileExtension) {
              return (
                <span className='download-photo-chat'onClick={() => downloadPhoto(`http://194.67.113.55/` + `${message}`, 'file')}>
                    <img src={photo3} alt='.' width={24} className="mr-5"/>    
                    {message}
                </span>
              );
            } else {
              return part;
            }
          }
        });
      };
    const dateTime = new Date();
    const getTimeString = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    const handleDocumentClick = (event) => {
        // Проверяем, что клик был не внутри вашего шапки
        const headerElement = document.getElementById('notice-headers'); // Замените 'header' на идентификатор вашей шапки
        if (headerElement && !headerElement.contains(event.target)) {
          // Выполняем ваше действие, если клик был вне шапки
          setAcive(false);
        }
      };
    
      // Добавляем слушатель события клика при монтировании компонента
      useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
    
        // Очищаем слушатель при размонтировании компонента
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
        // eslint-disable-next-line
      }, []); 

      const [imgUsers, setImgUser] = useState()
  
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
  
        if (file) {
          setSelectedFile(file);
          const reader = new FileReader();
  
          reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            setPreview(base64String);
            const base64StringImg = reader.result;
            setImgUser(base64StringImg);
            sendChatFile(chatId, file.name, base64String)
          };
  
          reader.readAsDataURL(file);
        } else {
          setSelectedFile(null);
          setPreview('');
        }
      };


    return (

        <div className={`chat-message ${activeChatMobile === false ? "side-chat-mobile" : "chat-message"}`}>
            {activeChatMobile === true ?
            <>
                <div className="header-message" >
                    <Link className="header-message-info" to={infoUser.personRole === "customer" ? '/profile/customer/' + infoUser.personProfileId : '/profile/executor/' + infoUser.personProfileId}>
                        <img 
                            src={`http://194.67.113.55/` + infoUser.personAvatar} 
                            className="header-message-avatar" 
                            alt='.'
                        />
                        <div className="info-chat">
                            <h4>{infoUser.personName}</h4>
                            {infoUser.personOnline === true ? 
                                <span>{t('chat.chat-message.offline')}</span> 
                                : 
                                <span>{t('chat.chat-message.online')}</span>
                            }

                        </div>
                    </Link>
                    <div className="mt-10 block-list-chat">
                        <button id="notice-headers" onClick={handleClickList} className="button-list-chat">
                            <img src={photo6} alt='.' width={24}/>
                        </button>
                        <div id="notice-headers" className={active ? "list-chat-block" : 'list-chat-block none'} onClick={() => setAcive(false)}>
                            <ul className="list-chat-block-ul" onClick={e => e.stopPropagation()}>
                                <li className="item-about">
                                    <Link to={'/target/' + infoUser.orderId}>{t('chat.chat-message.text-one')}</Link>
                                </li>
                                <li className="item-about mt">
                                    <Link>{t('chat.chat-message.text-two')}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="chat-message-block" ref={chatMessages && containerRef}>
                    {loadingChat === false && <Loader cards={2}/>}
                        
                        {loadingChat === true && chatMessages && chatMessages.messageList && chatMessages.messageList.map(res => {
                            const dateTimeString = res.messageDateTime;
                            const dateTime = new Date(dateTimeString);
                            const timeString = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                            return (
                                <>
                                <span className="data">{formatDate(res.messageDateTime)}</span>
                                {
                                res.author === 'person' ?
                                    <div className="chat-mess-one-block">
                                        <span>{formatMessage(res.message)}</span>
                                         <div className="block-chat-info">
                                            <p className="time">{timeString}</p>
                                            <div className="time">

                                                {// eslint-disable-next-line
                                                res.read == 1 ? 
                                                <img src={checkAll} alt='.' width={24}/>
                                                : 
                                                <img src={check} alt='.' width={24}/>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <>
                                    <div className="chat-mess-two-block">
                                        <span>
                                            {formatMessage(res.message)}
                                        </span>
                                        <div className="block-chat-info">
                                            <p className="time">{timeString}</p>
                                            <div className="time">
                                                {// eslint-disable-next-line
                                                res.read == 1 ? 
                                                <img src={checkAll} alt='.' width={24}/>
                                                : 
                                                <img src={check} alt='.' width={24}/>
                                                }
                                            </div>
                                        </div> 
                                    </div>                              
                                    </>
                                }
                                </>
                            )
                        })
                    }     
                    {messageСheck &&
                        <div className="chat-mess-two-block">
                            <span>
                                {messageСheck}
                            </span>
                            <div className="block-chat-info">
                                <p className="time">{getTimeString}</p>
                                <div className="time">
                                    <ClipLoader size={10} color={'#646464'}/>
                                </div>
                            </div> 
                        </div>
                    }          
                </div>
                <form className="chat-message-input" onSubmit={handleSubmit}>
                    <label className="chat-message-inp-button-two">
                        <img src={photo4}  alt='.' width={24}/>
                        <input id='file-one' type="file" name="file[]" onChange={handleFileChange}/>
                    </label>
                    <input 
                        placeholder="Введите сообщение..." 
                        className="chat-message-inp" 
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleInputKeyDown}
                    />
                    <button onClick={() => {
                        sendMessage()
                    }} 
                    className="chat-message-inp-button">
                        <img src={photo5}  alt='.' width={24}/>
                    </button>
                </form>  
             </>   
            :
            ''
            } 
            
        </div>

    );
  }
)
export default ChatMessage;