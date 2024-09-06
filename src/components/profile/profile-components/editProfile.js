import { Link } from 'react-router-dom';
import photo from '../../../assets/icon/upload.png'
import photo2 from '../../../assets/icon/Arrow_Right_LG.png'
import errors from '../../../assets/icon/error.png'
import PhoneInput from 'react-phone-input-2';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import ru from 'date-fns/locale/ru';
import ModalWar from './ModalWar';
import { confirmEmailProfile, confirmPhoneProfile, editProfile, postConfirmEmailProfile, postConfirmPhoneProfile, uploadImgProfile } from '../../../http/profileApi';
import { useTranslation } from 'react-i18next'

const EditProfile = ({userProfile}) => {
    const { t } = useTranslation();
    const [modalActive, setModalActive] = useState(false)
    // eslint-disable-next-line
    const [selectedDate, setSelectedDate] = useState('' || new Date( userProfile.response.profile.birthday || '01.01.1970'));
    // eslint-disable-next-line
    const [name, setName] = useState("" || userProfile && userProfile.response.profile.name)
    // eslint-disable-next-line
    const [surname, setSurname] = useState("" || userProfile &&userProfile.response.profile.surname)
    // eslint-disable-next-line
    const [middleName, setMiddleName] = useState("" || userProfile && userProfile.response.profile.middleName)
    // eslint-disable-next-line
    const [gender, setGender] = useState("" || userProfile && userProfile.response.profile.gender)
    // eslint-disable-next-line
    const [phone, setPhone] = useState('' || userProfile && userProfile.response.profile.phone)
    // eslint-disable-next-line
    const [email, setEmail] = useState('' || userProfile && userProfile.response.profile.mail)
    // eslint-disable-next-line
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [code, setCode] = useState('')
    const [codeTwo, setCodeTwo] = useState('')
    const [error, setError] = useState("")

    const [imgUsers, setImgUser] = useState()

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState('' || userProfile.response.profile.avatar);
    const [active, setActive] = useState(false)

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
        };

        reader.readAsDataURL(file);
      } else {
        setSelectedFile(null);
        setPreview('');
      }
    };
    
    const click = async () => {
        try {
            await editProfile(password, name, middleName, surname, selectedDate, gender,email, phone)
            .then(data => setError(data))
            await uploadImgProfile(selectedFile.name,preview)
        }
        catch(e) { 

        }
	  }
    const [response2, setResponse2] = useState('')

    const clickPhone = async () => {
      await postConfirmPhoneProfile(phone).then(data => setResponse2(data))
      setActive(true)
    }
    const clickConfirmPhone = async () => {
      await confirmPhoneProfile(code).then(data => setResponse2(data))
    }

    const handlePhoneChange = (value) => {
      setPhone(value);
    };
    const [response, setResponse] = useState('')

    const clickTwo = async () => {
      await postConfirmEmailProfile(email).then(data => setResponse(data))
      if(response && response.response.status === true) {
        setActive2(true)
      }
    }

    const clickConfirmEmail = async () => {
      await confirmEmailProfile(codeTwo).then(data => setResponse(data))
    }

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('info')
        window.location.replace('/')
    }

    if(error && error.status === true) {
      setTimeout(() => {
        window.location.reload()
      },1000)
    }

    if(error && error === 403) {
        window.location.replace('/')
    }
    const [active2, setActive2] = useState(false)
    useEffect(() => {

    }, [active,active2, response, response2])

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
    const passwordsMatch = password === confirmPassword;
    const errorMessage = passwordsMatch ? '' : 'Пароли не совпадают';
    
 
  const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 18);
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 100); 
    return (
      <>
      <div className="container">
          <div className="add-work">
            <div className="block-back">
              <Link to={'/profile/user'}><img src={photo2} alt="." width={32}/></Link>
            </div>
            <div className="main-add">
                <div className="add-work-main">
                  <div>
                    <h1>{t('profile.editProfile.title')}</h1>
                    <Link className='button-title button-redirect link-red' to={'/profile/edit-profile'}>{t('profile.editProfileCustomer.profile')}</Link>
                    {userProfile && userProfile.response.profile.customerStatus === 1 ? 
                      <Link className='button-title button-redirect' to={'/profile/edit-customer'}>{t('profile.editProfile.profile-customer')}</Link>
                      :
                      <Link className='button-title button-redirect-reg button-redirect' to={'/profile/verification/customer'}>{t('profile.editProfile.profile-customer')}</Link>
                    }
                    {userProfile && userProfile.response.profile.executerStatus === 1 ? 
                      <Link className='button-title ' to={'/profile/edit-executor'}>{t('profile.editProfile.profile-executor')}</Link>
                      :
                      <Link className='button-title button-redirect-reg' to={'/profile/verification/executor'}>{t('profile.editProfile.profile-executor')}</Link>
                    }
                  </div>
                  <button onClick={logOut}>{t('profile.editProfile.logOut')}</button>
                </div>
                <div className='edit-profile-block'>
                    <div className="input-date">
                        <div className="input-block-edit">
                            <h4>{t('profile.editProfile.text-one')}</h4>
                            <input 
                              className="input-date-input" 
                              type="text" 
                              placeholder={t('profile.editProfile.text-input-one')}
                              value={name}
                              setValue={name}
                              disabled
                            />
                        </div>
                        <div className="input-block-edit">
                            <h4>{t('profile.editProfile.text-two')}</h4>
                            <input 
                              className="input-date-input " 
                              type="text" 
                              placeholder={t('profile.editProfile.text-input-two')}
                              value={surname}
                              setValue={surname}
                              disabled
                            />
                        </div>
                    </div>
                    <div className="input-date">
                        <div className="input-block-edit">
                            <h4>{t('profile.editProfile.text-three')}</h4>
                            <input 
                              className="input-date-input" 
                              type="text" 
                              placeholder={t('profile.editProfile.text-input-three')}
                              value={middleName}
                              setValue={middleName}
                              disabled
                            />
                        </div>
                        <div className="input-block-edit">
                            <h4>{t('profile.editProfile.text-fo')}</h4>
                            <DatePicker 
                              showIcon
                              type="text"
                              id="datepicker"
                              selected={selectedDate}
                              maxDate={minDate} 
                              minDate={maxDate}
                              locale={ru}
                              disabled
                              dateFormat="dd.MM.yyyy"
                              placeholderText="25.12.1990"
                              showYearDropdown
                              showMonthDropdown
                              dropdownMode="select"
                              autoComplete="off"
                              name="test"
                              novalidate
                            />
                        </div>
                    </div>
                    <div className="radio-edit-profile-block">
                        <h4>{t('profile.editProfile.text-five')}</h4>
                        <div className='radio-edit-profile'>
                            <div className="label-radio">
                                <input 
                                  id="radio-8" 
                                  type="radio" 
                                  name="name4" 
                                  value={1}
                                  setValue={1}
                                  onChange={(event) => setGender(event.target.value)} 
                                  // eslint-disable-next-line
                                  checked={gender == 1}
                                />
                                <label htmlFor="radio-8">{t('profile.editProfile.gender-one')}</label>
                            </div>
                            <div className="label-radio" id='left'>
                                <input 
                                  id="radio-9" 
                                  type="radio" 
                                  name="name4"
                                  value={2}
                                  setValue={2}
                                  onChange={(event) => setGender(event.target.value)} 
                                  // eslint-disable-next-line
                                  checked={gender == 2}
                                />
                                <label htmlFor="radio-9" change>{t('profile.editProfile.gender-two')}</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='edit-profile-block-two'>
                    <div>
                      <h4>{t('profile.editProfile.text-six')}</h4>
                      <input 
                        className="add-name-input add-name-input-two" 
                        placeholder='sample' 
                        type='text'
                        value={userProfile && userProfile.response.profile.login}
                        setValue={userProfile && userProfile.response.profile.login}
                      />
                    </div>
                    <div>
                      <h4>{t('profile.editProfile.text-seven')}</h4>
                      <input 
                        className="add-name-input add-name-input-two" 
                        placeholder='····················· ' 
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div>
                      <h4>{t('profile.editProfile.text-eight')}</h4>
                      <input 
                        className="add-name-input add-name-input-two"
                        placeholder='···················· ' 
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                    </div>
                    {errorMessage && <p className='message-error'><img src={errors} alt='.' width={16}/>{errorMessage}</p>}
                    {error &&
                              <p className=
                                {error && response.status === false
                                ? "message-error" : 'message-error-none'
                                }>
                                  {error && error.status === true ? '' : <img src={errors} alt='.' width={16}/>}{response && response.response.message}
                            </p>
                            }
                </div>
                <div className='edit-profile-block-two'>
                  <div className='input-date'>
                      <div className="input-block-edit">
                            <h4>{t('register.email.text-one')}</h4>
                            <input 
                              className="input-date-input" 
                              placeholder={t('register.email.input-text')}
                              type='text'
                              value={email}
                              setValue={email}
                              onChange={(event)=> setEmail(event.target.value)}
                            />
                        </div>
                        {userProfile && userProfile.response.profile.mailStatus === 0 ?
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

                              {userProfile.response.profile.mailStatus === 0 ?  
                                response && (response.response.status === true )  ?
                                  <button className='input-send-code' onClick={clickConfirmEmail}>{t('register.email.button-one')}</button>
                                  :
                                  <button className='input-send-code' onClick={clickTwo}>{t('register.email.button-two')}</button>
                              :
                              <></>
                              }
                              
                            </div>
                            {response &&
                              <p className=
                              // eslint-disable-next-line
                                {response && response.response.message === 'Код подтверждения отправлен на указанный при регистрации адрес электронной почты' || response.response.status === false || response.response.message === 'Адрес почты успешно подтверждён'
                                ? "message-error  reg" : 'message-error-none  reg'
                                }>
                                  {response && response.response.status === true ? '' : <img src={errors} alt='.' width={16}/>}{response && response.response.message}
                            </p>
                            }
                        </div>

                        :
                        <></>

                        }
                    </div>
                    
                    <div className="input-date">
                        <div className="input-block-edit">
                            <h4>{t('register.email.text-three')}</h4>
                            <PhoneInput
                              type='text'
                              label=""
                              value={phone}
                              setValue={phone}
                              onChange={handlePhoneChange}
                              countries={['ru', 'kz']}
                              enableSearch={false}
                              disableDropdown={true}
                              inputProps={{
                                className: 'input-date-input',
                              }}
                              placeholder="+7 (999) 999-99-99"
                            />
                           
                        </div>
                        
                        {userProfile && userProfile.response.profile.phoneStatus === 0 ?
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
                              {userProfile.response.profile.phoneStatus === 0 ? 
                                response2 && (response2.response.status === true) ?
                                <button className='input-send-code' onClick={clickConfirmPhone}>{t('register.email.button-one')}</button>
                                :
                                <button className='input-send-code' onClick={clickPhone}>{t('register.email.button-two')}</button>
                              :
                              <></>
                              }
                            </div>
                             {response2 &&
                              <p className=
                              // eslint-disable-next-line
                                {response2 && response2.response.message === "Код подтверждения отправлен на указанный при регистрации номер телефона" || response2.response.status === false || response2.response.message === 'Номер телефона успешно подтверждён'
                                ? "message-error  reg" : 'message-error-none  reg'
                                }>
                                  {response2 && response2.response.status === true ? '' : <img src={errors} alt='.' width={16}/>}{response2.response.message}
                            </p>
                            }
                        </div>
                    
                      :
                      <></>
                    }
                    </div>
                </div>
                <div className='block-img-edit'>
                  <div className='file-block-upload-add'>
                    <h4>{t('profile.editProfile.photo')}</h4>
                    <span>{t('profile.addWork.files-two')}</span>
                  </div>
                  <label class="button-edit">
	                	   	<input type="file" name="file[]" onChange={handleFileChange}/>
                        {!preview && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('profile.addWork.add-photo')}</div>}
                        {preview &&<img src={imgUsers || `http://194.67.113.55/` + userProfile.response.profile.avatar} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                	</label>
                </div>
                {!errorMessage ? 
                  <button className='save-button-add' onClick={click}>{t('profile.addWork.save')}</button>
                  :
                  <button className='save-button-add disabled' disabled onClick={click}>{t('profile.addWork.save')}</button>
                }
            </div>
          </div>
      </div>
      <ModalWar modalActive={modalActive} setModalActive={setModalActive}/>
      </>
    );
}

export default EditProfile;