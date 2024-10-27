import { useState } from "react"
import { useTranslation } from "react-i18next";

const Skills = ({changeFruit,handleInputChange,handleKeyPress,handleDelete,taskCategories,getTaskCategoriess,inputValue,listWord,setWords,words}) => {
  const { t } = useTranslation();
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
  // eslint-disable-next-line
    const [focused, setFocused] = useState(false)
    const [active, setActive] = useState(false)

    let changeOne = () => {
        setActive(true)
    }
    return (
        <div className="skills">
            <div className="list-skills-two skills-search line">
                <h2>{t('verif.skills.title-one')}</h2>
                <select 
                  onChange={(event) => changeFruit(event.target.value)}
                  value={taskCategories}
                  class="edit-title-select-two"
                >
                    {getTaskCategoriess && getTaskCategoriess.map(response => {
                        return <option value={response.id}>{response.name}</option>
                    })}
                </select>
                <a className='link-dont' href='/'>{t('verif.skills.text-one')}</a>
            </div>
            <div className="skills-search">
                <h2>{t('verif.skills.title-two')}</h2>
                <input 
                  className="add-name-input" 
                  placeholder="Введите название навыка" 
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onClick={() => changeOne()} 
                />
                {inputValue &&
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
                                      <>{t('verif.skills.text-two')}</>
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
    )
}

export default Skills