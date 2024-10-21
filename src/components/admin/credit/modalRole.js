import photo from '../../../assets/icon/Close_SM.png'
import { saveAs } from 'file-saver';

import {observer} from "mobx-react-lite";

const ModalRole = observer(({activeFive, setActiveFive, infoUserOne}) => {

    return (
        <div className={activeFive ? "login active" : "login"} onMouseDown={() => setActiveFive(false)}>
            <div className="login-block" onMouseDown={e => e.stopPropagation()}>
            <div className="login-text">
                    <span>Документы</span>
                    <button 
                        onClick={() => setActiveFive(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <div>
                    {infoUserOne && infoUserOne.length > 0 ? infoUserOne.map(res => {
                        const downloadPhoto = (url, name) => {
                            fetch(url)
                              .then(response => response.blob())
                              .then(blob => {
                                const fileName = `${name}`; // Добавляем расширение .png
                                saveAs(blob, fileName);
                              })
                              .catch(error => {
                                console.error('Ошибка при скачивании фото:', error);
                              });
                          }
                        return (
                            <span className='description-block-text-under-two button-download block-des-button' key={res.idFile} onClick={() => downloadPhoto(`http://194.67.113.55/` 
                            // eslint-disable-next-line
                                + 
                            `${res.pathFile}`, res.nameFile)}>
                                <button className='button-download'><p>{res.description}</p></button>
                            </span>
                                   
                        )
                    })
                    :
                    <p>Документов нет</p>
                    }
                    
                </div>
            </div>
        </div>
        )
    }
)
export default ModalRole