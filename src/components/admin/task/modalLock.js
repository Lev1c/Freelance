import photo from '../../../assets/icon/Close_SM.png'

import {observer} from "mobx-react-lite";
import { setTaskCategoriesModerate} from '../../../http/adminApi';

const ModalLock = observer(({activeTwo, setActiveTwo, infoUserOne}) => {

   
    return (
        <div className={activeTwo ? "login active" : "login"} onMouseDown={() => setActiveTwo(false)}>
            <div className="login-block" onMouseDown={e => e.stopPropagation()}>
            <div className="login-text">
                    <span>Внимание</span>
                    <button 
                        onClick={() => setActiveTwo(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <p>Вы уверены в утверждение категории?</p>
                <div className='modal-block-button mt-15'>
                    <button className='modal-button-adm mr' onClick={() => {
                        setTaskCategoriesModerate(infoUserOne).then(() => window.location.reload())
                    }}>Утвердить</button>
                    <button className='modal-button-two' onClick={() => setActiveTwo(false)} >Отмена</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ModalLock