import photo from '../../../assets/icon/Close_SM.png'

import {observer} from "mobx-react-lite";
import { removeTaskCategories } from '../../../http/adminApi';

const ModaUnlLock = observer(({activeThree, setActiveThree, infoUserOne}) => {

   
    return (
        <div className={activeThree ? "login active" : "login"} onMouseDown={() => setActiveThree(false)}>
            <div className="login-block" onMouseDown={e => e.stopPropagation()}>
            <div className="login-text">
                    <span>Внимание</span>
                    <button 
                        onClick={() => setActiveThree(false)} 
                        className='button-login-modal'
                    >
                        <img src={photo} alt='.' width={24}/>
                    </button>
                </div>
                <p>Вы уверены в удалении категории?</p>
                <div className='modal-block-button mt-15'>
                    <button className='modal-button-adm mr' onClick={() => removeTaskCategories(infoUserOne).then(() => window.location.reload())}>Удалить</button>
                    <button className='modal-button-two' onClick={() => setActiveThree(false)} >Отмена</button>
                </div>
            </div>
        </div>
        )
    }
)
export default ModaUnlLock