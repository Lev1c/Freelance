import photo from '../../../assets/icon/Mail_Open.png'
import PhoneInput from 'react-phone-input-2';
import error from '../../../assets/icon/error.png'
import { confirmEmail, confirmPhone, postConfirmEmail, postConfirmPhone, registrationNext, setExecutorProfileReg, uploadImg } from '../../../http/userAPI';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

const Email = ({
  email, 
  setEmail, 
  selectedFile, 
  preview,
  name, 
  middleName, 
  surname, 
  birthday, 
  gender, 
  listCountryId, 
  listRegionId, 
  listCityId, 
  address, 
  phone, 
  code, 
  setCode,
  setPhone,
  codeTwo,
  setCodeTwo,
  taskCategories,
  response, setResponse,response2, setResponse2,
  activeEmail,
  activePhone
  }) => {
    const { t } = useTranslation();
    const [isValidEmail, setIsValidEmail] = useState(true);
    const handleEmailChange = (event) => {
      const inputEmail = event.target.value;
      setEmail(inputEmail);
  
      // Регулярное выражение для проверки формата email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailPattern.test(inputEmail));
    };
    
    const clickTwo = async () => {
      await registrationNext(name, middleName, surname, birthday, gender, listCountryId, listRegionId, listCityId,address, email,phone)
      await setExecutorProfileReg(taskCategories)
      await uploadImg(selectedFile, preview)
      await postConfirmEmail().then(data => setResponse(data))
    }

    const clickPhone = async () => {
      await registrationNext(name, middleName, surname, birthday, gender, listCountryId, listRegionId, listCityId,address, email,phone)
      await postConfirmPhone(phone).then(data => setResponse2(data))

    }
    const clickConfirmEmail = async () => {
      await registrationNext(name, middleName, surname, birthday, gender, listCountryId, listRegionId, listCityId,address, email,phone)
      await confirmEmail(codeTwo).then(data => setResponse(data))
    }
    const clickConfirmPhone = async () => {
      await confirmPhone(code).then(data => setResponse2(data))
    }
    // eslint-disable-next-line
    const [active, setActive] = useState(false)
    // eslint-disable-next-line
    const [active2, setActive2] = useState(false)
    useEffect(() => {

    }, [active,active2, response, response2])
    return (
        <div className="" >
            <div className="skills">
                <div className="skills-search">
                    <img src={photo} alt='.' className="where-icon" width={100}/>
                    <h2>{t('register.email.title-one')}</h2>
                    <p className='p'>{t('register.email.title-two')}</p>
                    <div className='input-date mt-30'>
                      <div className="input-block-edit">
                            <h4>{t('register.email.text-one')}</h4>
                            <input 
                             className={isValidEmail  ? "input-date-input-error" : "input-date-input-error"}
                              placeholder={t('register.email.input-text')}
                              type='text'
                              value={email}
                              setValue={email}
                              onChange={handleEmailChange}
                            />
                            {!isValidEmail && <p style={{ color: "red" }}>Некорректный формат email</p>}
                        </div>
                        <div className="input-block-edit">
                            <h4>{t('register.email.text-two')}</h4>
                            <div className='input-send-code-block'>
                              <input 
                                className="input-date-input " 
                                type="text" 
                                placeholder="ХХХХХХ"
                                value={codeTwo}
                                setValue={codeTwo}
                                onChange={(event)=> setCodeTwo(event.target.value)}
                              />
                              
                              {isValidEmail && email  ?
                              response && ( response.response.status === true) ?
                                
                                <button className='input-send-code' onClick={clickConfirmEmail}>{t('register.email.button-one')}</button>
                                :
                                <button className='input-send-code' onClick={clickTwo}>{t('register.email.button-two')}</button>
                              :
                              ''
                              
                              }
                              
                            </div>
                            {response &&
                              <p className=
                                {response.response.message === 'Код подтверждения отправлен на указанный при регистрации адрес электронной почты' || response.response.status === false || response.response.message === 'Не указан адрес почты' || response.response.message === 'Адрес почты успешно подтверждён'
                                ? "message-error reg" : 'message-error-none reg'
                                }>
                                  {response.response.status === true ? <></> : <img src={error} alt='.' width={16}/>}{response.response.message}
                            </p>
                            }
                        </div>
                    </div>
                     
                    <div className="input-date">
                        <div className="input-block-edit">
                            <h4>{t('register.email.text-three')}</h4>
                            <PhoneInput
                              type='phone'
                              value={phone}
                              setValue={phone}
                              onChange={(event)=> setPhone(event)}
                              countries={['ru', 'kz']}
                              enableSearch={false}
                              disableDropdown={true}
                              inputProps={{
                                className: `${activePhone ? "input-date-input-error" : "input-date-input"}`
                              }}
                              placeholder="+7 (999) 999-99-99"
                            />
                            
                        </div>
                        
                        <div className="input-block-edit">
                            <h4>{t('register.email.text-fo')}</h4>
                            <div className='input-send-code-block'>
                              <input 
                                className="input-date-input " 
                                type="text" 
                                placeholder="ХХХХХХ"
                                value={code}
                                setValue={code}
                                onChange={(event)=> setCode(event.target.value)}
                              />
                              {response2 && (response2.response.status === true) ?
                                <button className='input-send-code' onClick={clickConfirmPhone}>{t('register.email.button-one')}</button>
                                :
                                <button className='input-send-code' onClick={clickPhone}>{t('register.email.button-two')}</button>
                              }
                              
                            </div>
                            {response2 &&
                              <p className=
                                {response2.response.message === '' || response2.response.message === ''  || response2.response.status === true
                                ? "message-error-none" : 'message-error reg'
                                }><img src={error} alt='.' width={16}/>{response2.response.message}
                            </p>
                            }
                            {response2 &&
                              <p className=
                                { response2.response.status === true
                                ? "message-error reg" : 'message-error-none'
                                }>{response2.response.message}
                            </p>
                            }
                        </div>
                        
                    </div>
                </div>
             </div>
        </div>
    );
  }
  
  export default Email;