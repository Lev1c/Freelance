import { useState } from "react"
import { useTranslation } from "react-i18next";
import ModalComment from "./modal";

function Create({setTypeOrder,changeFruit,listWord,setWords, name, setName, inputValue, words, handleInputChange, handleKeyPress, handleDelete,getTaskCategoriess,setTaskCategories,taskCategories,setCategory}) {
    const { t } = useTranslation();
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    const [activeFo, setActiveFo] = useState(false)
    // eslint-disable-next-line
    const [focused, setFocused] = useState(false)
    const [active, setActive] = useState(false)

    let changeOne = () => {
        setActive(true)
    }
    return (
      <div className="create">
        <h1 className="create-work-title">{t('create-work.create.title')}</h1>
            <input
              className='create-name-input' 
              placeholder={t('create-work.create.input-text')}
              type="text"
              value={name}
              setValue={name}
              onChange={(event)=> setName(event.target.value)}
              name="name"
            />
            <div className="">
                    <div className="list-skills-two skills-search">
                        <h4 className='mb'>{t('create-work.create.title-two')}</h4>
                        <select 
                          onChange={(event) => changeFruit(event.target.value)}
                          value={taskCategories}
                          class="edit-title-select-two"
                        >
                            {getTaskCategoriess && getTaskCategoriess.map(response => {
                                return <option value={response.id}>{response.name}</option>
                            })}
                        </select>
                        <button className='link-dont' onClick={() => setActiveFo(true)} href='/'>{t('create-work.create.link')}</button>
                    </div>
                    <div className="skills-search line">
                        <h4 className='mb'>{t('create-work.create.title-three')}</h4>
                        <input 
                          className="create-name-input" 
                          placeholder="Введите название навыка" 
                          type="text"
                          value={inputValue}
                          onChange={handleInputChange}
                          onKeyPress={handleKeyPress}
                          onFocus={onFocus}
                          onBlur={onBlur}
                          onClick={() => changeOne()} 
                        />
                        {inputValue && inputValue.length > 0 &&
                        <div className={active ? "active" : "login"} onClick={() => setActive(false)}>
                          <div className="counrty-block" onClick={(e) => e.stopPropagation()}>
                            {listWord && listWord.length ? (
                                listWord.map((response) => {
                                  const click = () => {
                                    setWords([...words, response.name.trim()]);
                                    setActive(false);
                                    
                                  };
                                  return (
                                    <button key={response.id} onClick={click} className="button-where">
                                      {response.name}
                                    </button>
                                  );
                                })) 
                                :   (
                                        <button onClick={() => setActive(false)} className="button-where">
                                            <>{t('create-work.create.block-text')}</>
                                        </button>
                                    )
                            }
                          </div>
                        </div>
                        }
                        {words && words.length  > 0 && (
                          <div className="skills-block">
                            {words.map((word, index) => (
                              <div key={index} className="skills-text">
                                {word}
                                <button className="button-text" onClick={() => handleDelete(index)}>x</button>
                              </div>
                            ))}
                          </div>
                        )}
                        
                    </div>
                  </div>
            <h3>{t('create-work.create.title-fo')}</h3>
            <div className='label-radio'>
                <input 
                  id="radio-10" 
                  type='radio' 
                  name='name5'
                  value={1}
                  setValue={1}
                  onChange={(event) => setTypeOrder(event.target.value)} 
                />
                <label htmlFor="radio-10">
                    <p className="p-edit-under">{t('create-work.create.title-five')}</p>
                </label>
            </div>
            <div className='label-radio'>
                <input 
                  id="radio-11"
                  type='radio' 
                  name='name5'
                  value={2}
                  setValue={2}
                  onChange={(event) => setTypeOrder(event.target.value)} 
                  />
                <label htmlFor="radio-11">
                    <p className="p-edit-under">{t('create-work.create.title-six')}</p>
                </label>
            </div>
            <ModalComment activeFo={activeFo} setActiveFo={setActiveFo}/>
      </div>
    );
  }
  
  export default Create;