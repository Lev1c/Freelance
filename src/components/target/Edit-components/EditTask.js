import photo from '../../../assets/icon/upload.png'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import { format } from 'date-fns';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'

function EditTask({
    setTypeOrder, 
    name, 
    setName, 
    inputValue, 
    words, 
    handleInputChange, 
    handleKeyPress, 
    handleDelete,
    getTaskCategoriess,
    setTaskCategories,
    taskCategories,
    setCategory,
    setTypePlace,
    selectedDate, 
    setSelectedDate,
    selectedDateTwo, 
    setSelectedDateTwo,
    setTypeDate,
    typeDate,
    startCost, 
    setStartCost,
    endCost, 
    setEndCost,
    setTypePayments,
    setNeedAgreement, 
    setNeedCloseDocuments, 
    setNeedInsurance, 
    setNeedCredit,
    description, 
    setDescription, 
    handleFileChange, 
    handleFileChange2, 
    handleFileChange3,
    preview,
    imgUsers,
    preview2,
    imgUsers2,
    preview3,
    imgUsers3,
    typeOrder,
    typePlace,
    cityName,
    setCityName,
    cityList,
    setCity,
    setCityId,
    addressPlace,
    setAddressPlace,
    setDateOne,
    setDateTwo,
    typePayments,
    needAgreement,
    needCloseDocuments,
    needInsurance,
    needCredit,
    activeFive,
    descriptionOne,
    handleDescriptionChange,
    descriptionTwo,
    handleDescriptionChangeTwo,
    descriptionThree,
    handleDescriptionChangeThree
    }) {
    const { t } = useTranslation();
    const changeFruit = (newFruit) => {
      setTaskCategories(newFruit)
    }
    // eslint-disable-next-line
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    const [active, setActive] = useState(false)
    let changeOne = () => {
        setActive(true)
    }
    const handleDateChange = (date) => {
      const formattedDate = format(date, 'dd.MM.yyyy');
      setDateOne(formattedDate);
      setSelectedDate(date);
    };
    
    const handleDateChangeTwo = (date) => {
      const formattedDate = format(date, 'dd.MM.yyyy');
      setDateTwo(formattedDate);
      setSelectedDateTwo(date);
    };
    return (
            <div className="edit-all">
                <div className="edit-title">
                    <h2>{t('edit.editTask.text-one')}</h2>
                    <input  
                        value={name}
                        setValue={name}
                        onChange={(event)=> setName(event.target.value)}
                        type="text" 
                        className="edit-title-input" 
                        placeholder={t('edit.editTask.text-input-one')}
                    />
                    <input 
                        type="text" 
                        className="edit-title-input" 
                        placeholder={t('edit.editTask.text-input-two')}
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    {words.length  > 0 && (
                      <div className="skills-block">
                        {words.map((word, index) => (
                          <div key={index} className="skills-text">
                            {word}
                            <button className="button-text" onClick={() => handleDelete(index)}>x</button>
                          </div>
                        ))}
                      </div>
                    )}
                    <select 
                        className="edit-title-select"
                        onChange={(event) => {
                          changeFruit(event.target.value)
                          setCategory(event.target.value)
                        }}
                        value={taskCategories}
                    >
                      {getTaskCategoriess.map(response => {
                        return <option value={response.id} key={response.id}>
                              {response.name}
                            </option>
                        })}
                    </select>
                </div>
                <h2>{t('edit.editTask.text-three')}</h2>
                <div className='label-radio'>
                    <input 
                      id="radio-10" 
                      type='radio' 
                      name='name5'
                      value={1}
                      setValue={1}
                      // eslint-disable-next-line
                      checked={typeOrder == 1}
                      onChange={(event) => setTypeOrder(event.target.value)} 
                    />
                    <label htmlFor="radio-10">
                        <p className="p-edit-under">{t('edit.editTask.text-three-one')}</p>
                    </label>
                </div>
                <div className='label-radio'>
                    <input 
                      id="radio-11"
                      type='radio' 
                      name='name5'
                      value={2}
                      setValue={2}
                      // eslint-disable-next-line
                      checked={typeOrder == 2}
                      onChange={(event) => setTypeOrder(event.target.value)} 
                      />
                    <label htmlFor="radio-11">
                        <p className="p-edit-under">{t('edit.editTask.text-three-two')}</p>
                    </label>
                </div>
                <div className="edit-place">
                    <h2>{t('edit.editTask.text-fo')}</h2>
                    <div className='input-reg-check'>
                    <div className='label-radio'>
                        <input 
                            id="radio-15" 
                            type='radio' 
                            name='name1'
                            value={1}
                            setValue={1}
                            // eslint-disable-next-line
                            checked={typePlace == 1}
                            onChange={(event) => setTypePlace(event.target.value)} 
                        />
                        <label htmlFor="radio-15">{t('edit.editTask.text-fo-one')}</label>
                    </div>
                    <div className='label-radio mt'>
                        <input 
                            id="radio-16" 
                            type='radio' 
                            name='name1'
                            value={2}
                            setValue={2}
                            // eslint-disable-next-line
                            checked={typePlace == 2}
                            onChange={(event) => setTypePlace(event.target.value)} 
                        />
                        <label htmlFor="radio-16">{t('edit.editTask.text-fo-two')}</label>
                    </div>
                    </div>
                        <input 
                            className='edit-title-input'
                            placeholder={t('edit.editTask.text-five')}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onClick={() => changeOne()} 
                            type="text" 
                            value={cityName} 
                            onChange={(e) => setCityName(e.target.value)} 
                        />
                        <div className={active ? "active" : "login"} onClick={() => setActive(false)}>
                          <div className="counrty-block" onClick={(e) => e.stopPropagation()}>
                            { cityList && cityList.length ? (
                            cityList.map((response) => {
                              const click = () => {
                                setCity(response.fullAddress);
                                setCityName(response.fullAddress);
                                setActive(false);
                                setCityId(response.id);
                              };
                          
                              return (
                                <button key={response.id} onClick={click} className="button-where">
                                  {response.fullAddress}
                                </button>
                              );
                            })) 
                            :   (
                                    <button onClick={() => setActive(false)} className="button-where">
                                        <>{t('edit.editTask.text-five-one')}</>
                                    </button>
                                )
                            }
                          </div>
                        </div>
                        {// eslint-disable-next-line
                        typePlace == 2 ? 
                            <input
                                className='edit-title-input' 
                                placeholder={t('edit.editTask.text-five-two')} 
                                type="text"
                                value={addressPlace}
                                onChange={(e) => setAddressPlace(e.target.value)}
                            />
                        :
                            ''
                        }
                    </div> 
                    <div className="edit-time">
                        <h2>{t('create-work.time.title-one')}</h2>
                        <div className='label-radio'>
                    <input 
                      id="radio-4"
                      type='radio' 
                      name='name2'
                      value={1}
                      setValue={1}
                      // eslint-disable-next-line
                      checked={typeDate == 1}
                      onChange={(event) => setTypeDate(event.target.value)} 
                      />
                    <label htmlFor="radio-4">{t('create-work.time.text-one')}</label>
                    </div>
                    <div className='label-radio '>
                        <input 
                          id="radio-3" 
                          type='radio' 
                          name='name2'
                          value={2}
                          setValue={2}
                          // eslint-disable-next-line
                          checked={typeDate == 2}
                          onChange={(event) => setTypeDate(event.target.value)} 
                        />
                        <label htmlFor="radio-3">{t('create-work.time.text-two')}</label>
                    </div>
                    <div className='label-radio mb-25'>
                        <input 
                          id="radio-5" 
                          type='radio' 
                          name='name2'
                          value={3}
                          setValue={3}
                          // eslint-disable-next-line
                          checked={typeDate == 3}
                          onChange={(event) => setTypeDate(event.target.value)} 
                        />
                        <label htmlFor="radio-5">{t('create-work.time.text-three')}</label>
                    </div>
                    <div className="input-date">
                      {// eslint-disable-next-line
                          typeDate == 2 ? 
                          <></>
                          :
                          <div className="input-block-edit">
                            <h4>{t('create-work.time.text-fo')}</h4>
                            <DatePicker 
                              showIcon
                                type="text"
                                id="datepicker"
                                selected={selectedDate ? new Date(selectedDate) : null} 
                                maxDate={new Date()}
                                locale={ru}
                                onChange={handleDateChange} 
                                dateFormat="dd.MM.yyyy"
                                placeholderText="25.12.1990"
                                showYearDropdown
                                showMonthDropdown
                                dropdownMode="select"
                                autoComplete="off"
                            />
                        </div>
                      }

                        {// eslint-disable-next-line
                        typeDate == 1 ?
                          <></>
                          :
                          <div className="input-block-edit">
                              <h4>{t('create-work.time.text-five')}</h4>
                              <DatePicker 
                                showIcon
                                type="text"
                                id="datepicker"
                                selected={selectedDateTwo ? new Date(selectedDateTwo) : null} 
                                locale={ru}
                                onChange={handleDateChangeTwo} 
                                dateFormat="dd.MM.yyyy"
                                placeholderText="25.12.1990"
                                showYearDropdown
                                showMonthDropdown
                                dropdownMode="select"
                                autoComplete="off"
                              />
                          </div>
                        }

                    </div>
                </div>
                <div className="edit-money">
                    <h2>{t('create-work.money.title-one')}</h2>
                    <div className="input-date">
                        <div className="input-block-edit">
                            <h4>{t('create-work.money.one')}</h4>
                            <input 
                                className="input-date-input" 
                                placeholder="0 ₽" 
                                type='text'
                                value={startCost}
                                setValue={startCost}
                                onChange={(event)=> setStartCost(event.target.value)}
                            />
                        </div>
                        <div className="input-block-edit">
                            <h4>{t('create-work.money.two')}</h4>
                            <input 
                                className="input-date-input" 
                                placeholder="0 ₽" 
                                type='text'
                                value={endCost}
                                setValue={endCost}
                                onChange={(event)=> setEndCost(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="radio-edit">
                        <div className="radio-edit-block">
                            <h4>{t('create-work.money.under-title-one')}</h4>
                            <div className='label-radio'>
                                <input 
                                    id="radio-6"
                                    type='radio' 
                                    name='name3'
                                    value={0}
                                    setValue={0}
                                    // eslint-disable-next-line
                                    checked={typePayments == 0}
                                    onChange={(event) => setTypePayments(event.target.value)}
                                 />
                                <label htmlFor="radio-6">{t('create-work.money.radio-one')}</label>
                            </div>
                            <div className='label-radio'>
                                <input 
                                    id="radio-7" 
                                    type='radio' 
                                    name='name3'
                                    value={3}
                                    setValue={3}
                                    // eslint-disable-next-line
                                    checked={typePayments == 3}
                                    onChange={(event) => setTypePayments(event.target.value)}
                                />
                                <label htmlFor="radio-7">{t('create-work.money.radio-two')}</label>
                            </div>
                        </div>
                        <div className="radio-edit-block">
                            <h4>{t('create-work.money.under-title-two')}</h4>
                            {// eslint-disable-next-line
                            typePayments == 3 ?
                            ''
                            :
                            <div className="radio-edit-block">
                            <h4>{t('create-work.money.under-title-two')}</h4>
                                <div className='label-radio'>
                                    <input 
                                        id="radio-10" 
                                        type='radio'
                                        name='name4'
                                        value={1}
                                        setValue={1}
                                        // eslint-disable-next-line
                                        checked={typePayments == 1}
                                        onChange={(event) => setTypePayments(event.target.value)} 
                                    />
                                    <label htmlFor="radio-10">{t('create-work.money.radio-three')}</label>
                                </div>
                                <div className='label-radio'>
                                    <input 
                                        id="radio-11" 
                                        type='radio' 
                                        name='name4'
                                        value={2}
                                        setValue={2}
                                        // eslint-disable-next-line
                                        checked={typePayments == 2}
                                        onChange={(event) => setTypePayments(event.target.value)}
                                    />
                                    <label htmlFor="radio-11">{t('create-work.money.radio-fo')}</label>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="edit-document">
                    <h2>{t('create-work.document.title-one')}</h2>
                    <p className="mb">{t('create-work.document.under-title-one')}</p>
                    <div className='checkbox'>
                        <input 
                            id="checkbox_1" 
                            type='checkbox' 
                            className="list-filter-input"
                            name='name5'
                            value={1}
                            setValue={1}
                            checked={needAgreement === 1}
                            onChange={(event) => {
                                needAgreement === 0 ?
                                    setNeedAgreement(1)
                                    :
                                    setNeedAgreement(0)
                            }} 
                        />
                        <label htmlFor="checkbox_1" className="checkbox__label">
                            <p className="p-edit-under">{t('create-work.document.title-two')}</p>
                            <span className="span-edit-under">{t('create-work.document.under-title-two')}</span>
                        </label>
                    </div>
                    <div className='checkbox'>
                        <input 
                            id="checkbox_2" 
                            type='checkbox' 
                            className="list-filter-input"
                            name='name5'
                            value={1}
                            setValue={1}
                            checked={needCloseDocuments === 1}
                            onChange={(event) => {
                                needCloseDocuments === 0 ?
                                    setNeedCloseDocuments(1)
                                    :
                                    setNeedCloseDocuments(0)
                            }} 
                        />
                        <label htmlFor="checkbox_2" className="checkbox__label">
                            <p className="p-edit-under">{t('create-work.document.title-three')}</p>
                            <span className="span-edit-under">{t('create-work.document.under-title-three')}</span>
                        </label>
                    </div>
                    <div className='checkbox'>
                        <input 
                            id="checkbox_14" 
                            type='checkbox' 
                            className="list-filter-input"
                            value={1}
                            setValue={1}
                            checked={needInsurance === 1}
                            onChange={(event) => {
                                needInsurance === 0 ?
                                    setNeedInsurance(1)
                                    :
                                    setNeedInsurance(0)
                            }}
                        />
                        <label htmlFor="checkbox_14" className="checkbox__label">
                            <p className="p-edit-under">{t('create-work.document.title-fo')}</p>
                            <span className="span-edit-under">{t('create-work.document.under-title-fo')}</span>
                        </label>
                    </div>
                    <div className='checkbox'>
                       <input 
                            type='checkbox' 
                            className="list-filter-input" 
                            id="checkbox_15"
                            value={1}
                            setValue={1}
                            checked={needCredit === 1}
                            onChange={(event) => {
                                needCredit === 0 ?
                                    setNeedCredit(1)
                                    :
                                    setNeedCredit(0)
                            }}
                        />
                        <label htmlFor="checkbox_15" className="checkbox__label">
                            <p className="p-edit-under">{t('create-work.document.title-five')}</p>
                            <span className="span-edit-under">{t('create-work.document.under-title-five')}</span>
                        </label>
                    </div>
                </div>  
                <div className="edit-about">
                    <h2>{t('create-work.about.title')}</h2>
                    <p>{t('create-work.about.title-two')}</p>
                    <textarea 
                        className="textarea-edit" 
                        placeholder={t('create-work.about.input-text')}
                        value={description}
                        setValue={description}
                        onChange={(event)=> setDescription(event.target.value)}
                    />
                                <div className='block-img-edit'>
                                    <div className="button-edit-block">
                                        <label class="button-edit" id="butt">
                                                <input type="file" name="file[]" onChange={handleFileChange}/>
                                            {!preview && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('create-work.about.button-text')}</div>}
                                            {preview &&<img src={imgUsers} alt='.' id='phot' className='reg-user-img' width="183" height="auto"/>}
                                            </label>
                                        {preview && <p>{activeFive === true ? "*" : ""}</p>}
                                        <input 
                                        className="input-date-input"
                                        type="text" 
                                        placeholder="Название"
                                        value={descriptionOne}
                                        onChange={handleDescriptionChange}
                                        />
                                    </div>
                                    <div className="button-edit-block">
                                        <label class="button-edit" id="butt">
                                                <input type="file" name="file[]" onChange={handleFileChange2}/>
                                            {!preview2 && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('create-work.about.button-text')}</div>}
                                            {preview2 &&<img src={imgUsers2} alt='.' id='phot' className='reg-user-img' width="183" height="auto"/>}
                                            </label>
                                        {preview2 && <p>{activeFive === true ? "*" : ""}</p>}
                                        <input 
                                        className="input-date-input"
                                        type="text" 
                                        placeholder="Название"
                                        value={descriptionTwo}
                                        onChange={handleDescriptionChangeTwo}
                                        />
                                    </div>
                                    <div className="button-edit-block">
                                        <label class="button-edit" id="butt">
                                                <input type="file" name="file[]" onChange={handleFileChange3}/>
                                            {!preview3 && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('create-work.about.button-text')}</div>}
                                            {preview3 &&<img src={imgUsers3} alt='.' id='phot' className='reg-user-img' width="183" height="auto"/>}
                                            </label>
                                        {preview3 && <p>{activeFive === true ? "*" : ""}</p>}
                                        <input 
                                        className="input-date-input"
                                        type="text" 
                                        placeholder="Название"
                                        value={descriptionThree}
                                        onChange={handleDescriptionChangeThree}
                                        />
                                    </div>
                                </div>
                </div>
            </div>
    );
  }
  
  export default EditTask;