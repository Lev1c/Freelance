import { useEffect, useRef, useState } from "react";
import User from "./register/user";
import photo from '../../assets/photo/Rectangle10.png'
import Where from "./register/where";
import Email from "./register/email";
import arrowLeftS from '../../assets/icon/Arrow_Left_S.png'
import arrowLeftR from '../../assets/icon/Arrow_Left_R.png'
import arrowLeftSM from '../../assets/icon/Arrow_Left_SM.png'
import arrowLeftSr from '../../assets/icon/Arrow_Left_Sr.png'
import calendarIcon from '../../assets/icon/Calendar.png';
import eyeIcon from '../../assets/icon/icon-eye.png';
import Arrow_Left_SMm from '../../assets/icon/Arrow_Left_SMm.png'
import error from '../../assets/icon/error.png'
import { getCountry, getTaskCategories, registration, registrationNext, setExecutorProfileReg, uploadImg } from "../../http/userAPI";
import { useTranslation } from "react-i18next";
import Login from "../modal/Login";

const PAGESONE = [
  { component: User },
  { component: Where },
  { component: Email },
];


const Registration = () => {
  useEffect(() => {
        getCountry().then(country => setListCountry(country))
        getTaskCategories().then(categories => setGetTaskCategories(categories))
  }, [])
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const [image, setImage] = useState(arrowLeftSM);
  const [imageTwo, setImageTwo] = useState(arrowLeftS);
  const [activeClick, setActiveClick] = useState(false)
  const [modalActivePassword, setModalActivePassword] = useState(true)
  const inputRef2 = useRef(null);

  const [activeСonf,setActiveСonf] = useState(false)

  const [getTaskCategoriess, setGetTaskCategories] = useState()
  const [taskCategories, setTaskCategories] = useState()
  
  const [listCountry, setListCountry] = useState('')
  const [listRegion, setListRegion] = useState('')
  const [listCity, setListCity] = useState('')

  const [listCountryId, setListCountryId] = useState(0)
  const [listRegionId, setListRegionId] = useState(0)
  const [listCityId, setListCityId] = useState(0)

  const [imgUsers, setImgUser] = useState(photo)
  
  const [selectedFile, setSelectedFile] = useState('photo.png');
  const [preview, setPreview] = useState(photo.split(',')[1]);

  const [errors, setErrors] = useState("")

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState("")

  const [name, setName] = useState('')
  const [activeName, setActiveName] = useState(false)
  const [middleName, setMiddleName] = useState('')
  const [activeMiddleName, setActiveMiddleName] = useState(false)
  const [surname, setSurname] = useState('')
  const [birthday, setBirthday] = useState('')
  const [activeBirthday, setActiveBirthday] = useState(false)
  const [gender, setGender] = useState('')
  const [activeGender, setActiveGender] = useState(false)
  const [country, setCountry] = useState('')
  const [countryId, setCountryId] = useState('')
  const [region, setRegion] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [activeEmail, setActiveEmail] = useState(false)
  const [phone, setPhone] = useState('')
  const [activePhone, setActivePhone] = useState(true)
  const [code, setCode] = useState('')
  const [codeTwo, setCodeTwo] = useState('')
  const [response, setResponse] = useState()
  const [response2, setResponse2] = useState()

  const [modalActive, setModalActive] = useState(false)

  const [tok, setTok] = useState(false)

  let PAGES = PAGESONE;

  const handleModalButtonClick = () => {
      setModalActivePassword(!modalActivePassword);
  }
    
  const [pageIndex, setPageIndex] = useState(0);

  const CurrentPage = PAGES[pageIndex].component;

  const goBack = () => {
    setPageIndex(pageIndex - 1)
  }
  console.log()
  const goForward = () => {
    if((pageIndex === 0 && name === '') || (pageIndex === 0 && surname === '') || (pageIndex === 0 && birthday === '') || (pageIndex === 0 && gender === '')) {
      setPageIndex(0)
    } else {
      setPageIndex(pageIndex + 1)
    }
    if(!name) {
      setActiveName(true)
      setPageIndex(0)
    } else {
      setActiveName(false)
    }
    if(!surname) {
      setActiveMiddleName(true)
      setPageIndex(0)
    } else {
      setActiveMiddleName(false)
    }
    if(!birthday) {
      setActiveBirthday(true)
      setPageIndex(0)
    } else {
      setActiveBirthday(false)
    }
    if(!gender) {
      setActiveGender(true)
      setPageIndex(0)
    } else {
      setActiveGender(false)
    }

    if(parseInfoUser && parseInfoUser.mailStatus === 0) {
      setActiveEmail(true)
    } else {
      setActiveEmail(true)
    }

    if(parseInfoUser && parseInfoUser.phoneStatus === 0) {
      setActivePhone(true)
    } else {
      setActivePhone(true)
    }
    setImage(arrowLeftSr)
    setImageTwo(arrowLeftR)
  }

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
    }
  }

  const handleInputKeyDown1 = (event) => {
    if (event.key === 'Enter') {
      inputRef2.current.focus();
    }
  }

  const clickReg = () => {
    registration(login, password).then(err => {
      setErrors(err)
    })
  }
// eslint-disable-next-line
  useEffect(() => {
    errors.status === true ? setActiveClick(true) : setActiveClick(false)
  }, [errors])

  let infoUser = localStorage.getItem('info')
  let parseInfoUser
  if (infoUser !== 'undefined') {
    // eslint-disable-next-line
      parseInfoUser = JSON.parse(infoUser)
  }
  let acting_toke = localStorage.getItem('acting_token');
  console.log(activeClick)
  useEffect(() => {
    if (
      // eslint-disable-next-line
      acting_toke &&
      // eslint-disable-next-line
         acting_toke && name === '' 
         // eslint-disable-next-line
        || acting_toke && surname === '' 
        ) {
          setActiveClick(true)
    } else {
          setTok(true)
        }
        // eslint-disable-next-line
  },[isHovered,activeClick])
  
  let took = localStorage.getItem('token')
  if(took) {
      window.location.replace('/profile/user')
  }

  let listC = [...listCountry]
  listC = listC.filter((item) => {
    if (country && ! item.name.toLowerCase().includes(country.toLowerCase())) {
      return false;
    }
    return true
  })
  
  let listR
  if (listRegion) {
    listR = [...listRegion]
  } else {
    listR = [listRegion]
  }
  listR = listR.filter((item) => {
    if (region && ! item.name.toLowerCase().includes(region.toLowerCase())) {
      return false;
    }
    return true
  })

  let listCit

  if (listCity) {
    listCit = [...listCity]
  } else {
    listCit = [listCity]
  }
  listCit = listCit.filter((item) => {
    if (city && ! item.name.toLowerCase().includes(city.toLowerCase())) {
      return false;
    }
    return true
  })
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setPreview(base64String);
        const base64StringImg = reader.result;
        setImgUser(base64StringImg);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile('photo.png');
      setPreview(photo.split(',')[1]);
    }
  };
  
  const handleMouseEnter = () => {
  setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="none-mt-two container create-work">
      {activeClick === true ? 
      <>
      <div className="pag-con">
        {PAGES.map((_, index) => (
          <div className="pagination">
          <div
            key={index}
            className={`pagVerifE${ (pageIndex >= index) ? pageIndex : ""}`}
          />
          </div>
        ))}
      </div>
      <CurrentPage 
      activeBirthday={activeBirthday}
      activeName={activeName}
      activeMiddleName={activeMiddleName}
      activeGender={activeGender}
      activeEmail={activeEmail}
        password={password}
        activePhone={activePhone}
        setPassword={setPassword}
        name={name}
        setName={setName}
        middleName={middleName}
        setMiddleName={setMiddleName}
        surname={surname}
        setSurname={setSurname}
        birthday={birthday}
        setBirthday={setBirthday}
        gender={gender}
        setGender={setGender}
        country={country}
        setCountry={setCountry}
        region={region}
        setRegion={setRegion}
        city={city}
        setCity={setCity}
        address={address}
        setAddress={setAddress}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        listC={listC}
        listR={listR}
        listCit={listCit}
        setCountryId={setCountryId}
        countryId={countryId}
        setListRegion={setListRegion}
        listRegion={listRegion}
        listCity={listCity}
        setListCity={setListCity}
        imgUsers={imgUsers}
        setImgUser={setImgUser}
        preview={preview}
        handleFileChange={handleFileChange}
        selectedFile={selectedFile}
        listCountryId={listCountryId}
        setListCountryId={setListCountryId}
        listRegionId={listRegionId}
        setListRegionId={setListRegionId}
        listCityId={listCityId}
        setListCityId={setListCityId}
        taskCategories={taskCategories}
        setTaskCategories={setTaskCategories}
        getTaskCategoriess={getTaskCategoriess}
        code={code}
        setCode={setCode}
        codeTwo={codeTwo}
        setCodeTwo={setCodeTwo}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        response={response}
        setResponse={setResponse}
        response2={response2}
        setResponse2={setResponse2}
      />
      <div className="but-block">
        {pageIndex === 0 ?
        <>
        <button
          onClick={goBack}
          id="btn1"
          className="btn-register-disable"
          disabled
        >
          {t('register.back')}
        </button>
        </>
        :
        <button
          onClick={goBack}
          id="btn1"
          className="btn-register"
          onMouseEnter={() => setImage(arrowLeftSM)}
          onMouseLeave={() => setImage(arrowLeftSr)}
        >
          <img src={image} alt='.' width={24}/>
          {t('register.back')}
        </button>
        }
        {(pageIndex === PAGES.length - 1) && (parseInfoUser && parseInfoUser.mailStatus == 1 || parseInfoUser && parseInfoUser.phoneStatus == 1 ) ?
            <button
              onClick={ async () => {
                await registrationNext(name, middleName, surname, birthday, gender, listCountryId, listRegionId, listCityId,address, email,phone)
                await setExecutorProfileReg(taskCategories)
                await uploadImg(selectedFile, preview)
                let getTok = localStorage.getItem('acting_token');      
                if (tok === true) {
                  localStorage.setItem('token', getTok);
                  localStorage.removeItem('acting_token');
                  window.location.reload();
                  window.location.replace('/profile/user')
                }
              }}
              id="btn1"
              className="btn-register"
              onMouseEnter={() => {
                setImageTwo(arrowLeftR)
                handleMouseEnter()
              }}
              onMouseLeave={() => {
                setImageTwo(arrowLeftS)
                handleMouseLeave()
              }}
            >
              {t('register.forward')}
              <img src={imageTwo} alt='.' width={24}/>
            </button>
          :
           <button
              onClick={goForward}
              id="btn1"
              className="btn-register"
              disabled={pageIndex === PAGES.length - 1}
              onMouseEnter={() => setImageTwo(arrowLeftR)}
            onMouseLeave={() => setImageTwo(arrowLeftS)}
            >
              {t('register.forward')}
              <img src={imageTwo} alt='.' width={24}/>
            </button>
        }
       
      </div>
      </>
      :
      <>
      <div className="window-reg">
          <h2>{t('register.title')}</h2>
          <span className="text-under-window">{t('register.text-under-window')}</span>
          <div className="login-input">
            <h4>{t('register.under-title')}</h4>
            <input 
                className={errors.message ? 'login-input-modal-error': 'login-input-modal'} 
                placeholder="sample" 
                type="login"
                value={login}
                setValue={login}
                onChange={(event)=> setLogin(event.target.value)}
                name="login"
                required
                onKeyDown={handleInputKeyDown1}
            />
            {errors &&
              <p className=
                {
                  errors.message === 'Не указан пароль' 
                  || 
                  errors.message === 'Пароль должен быть не менее 8-ми знаков, содержать цифры, заглавные и прописные буквы'  
                  ||
                  errors.status === true
                ? "message-error-none" : 'message-error'
                }><img src={error} alt='.' width={16}/>{errors.message}
            </p>
            }
            <h4>{t('register.under-title-two')}</h4>
            <input 
                className={errors.message ? 'login-input-modal-error': 'login-input-modal'} 
                placeholder="·····················" 
                type={modalActivePassword ? "password" : "text"}
                value={password}
                setValue={password}
                onChange={(event)=> setPassword(event.target.value)}
                required
                ref={inputRef2}
                onKeyDown={handleInputKeyDown}
            />
            <button className="login-img" onClick={handleModalButtonClick}>
              <img width={24} src={modalActivePassword ? calendarIcon : eyeIcon} alt="Show/Hide password" />
            </button>
            {errors &&
              <p className=
                {errors.message === 'Логин уже занят' || errors.message === 'В качестве логина указана почта или телефон которые уже заняты. Попробуйте восстановить пароль.'  || errors.status === true
                ? "message-error-none" : 'message-error'
                }><img src={error} alt='.' width={16}/>{errors.message}
            </p>
            }
          </div>
          <span className="list-filter-work-text-under">
              <div class="checkbox mb-30">
                  <input 
                      type='checkbox' 
                      className="list-filter-input" 
                      id="checkbox_6"
                      onClick={() => setActiveСonf(activeСonf ? false : true)} 
                  />
                  <label htmlFor="checkbox_6" className="checkbox__label">{t('register.checkbox__label')}
                    <a href='/' className="link-label">{t('register.checkbox__label-two')}</a>
                  </label>
              </div>
          </span>
          <div className='button-block-login'>
            {activeСonf ? 
              <button className='login-button' onClick={clickReg}>{t('register.button')}</button>
              :
              <button className='login-button-disabled' disabled>{t('register.button')}</button>
            }
              <span className='login-text-under' >{t('register.have-acc')}<button onClick={() => setModalActive(true)}>{t('register.button-under')}</button></span>
          </div>
      </div>
      
      </>
      }
      <Login active={modalActive} setActive={setModalActive}/>
    </div>
  );
};

export default Registration;