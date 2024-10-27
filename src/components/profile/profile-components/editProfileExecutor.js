import { Link } from 'react-router-dom';
import photo from '../../../assets/icon/upload2.png'
import photo2 from '../../../assets/icon/upload3.png'
import photo3 from '../../../assets/icon/Arrow_Right_LG.png'
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import ModalWar from './ModalWar';
import { editProfileAbout,  setExecutorProfile, uploadExecutorDoc, uploadExecutorDoc2, uploadExecutorDoc3, uploadExecutorDoc4, uploadExecutorDoc5,} from '../../../http/profileApi';
import PortfolioExecutor from './portfolioExecutor';
import ExperienceExecutor from './experienceExecutor';
import EducationExecutor from './educationExecutor';
import Comment from './comment';
import { getSubTaskCategories, getSubTaskCategoriesByName, getTaskCategories } from '../../../http/userAPI';
import { useTranslation } from 'react-i18next'

const EditProfileExecutor = ({userProfile}) => {
  const { t } = useTranslation();
  let infoUser = JSON.parse(localStorage.getItem('info'))
  const [modalActive, setModalActive] = useState(false)

  const [image, setImage] = useState(photo);
  const [image2, setImage2] = useState(photo);
  const [image3, setImage3] = useState(photo);
  const [image4, setImage4] = useState(photo);
  const [image5, setImage5] = useState(photo);
// eslint-disable-next-line
  const [typeExecutor, setTypeExecutor] = useState('' || userProfile.response.executorProfile.typeExecutor)
  const [nameOrg, setNameOrg] = useState('' || userProfile.response.executorProfile.nameOrg)
  const [inn, setInn] = useState('' || userProfile.response.executorProfile.inn)
  const [regAddress, setRegAddress] = useState('' || userProfile.response.executorProfile.regAddress)
  const [bankBik, setBankBik] = useState('' || userProfile.response.executorProfile.bankBik)
  const [bankAccount, setBankAccount] = useState('' || userProfile.response.executorProfile.bankAccount)
  const [about, setAbout] = useState("" || userProfile.response.executorProfile.about)
  const [aboutSkills, setAboutSkills] = useState("" || userProfile.response.executorProfile.aboutSkills)

  const [getTaskCategoriess, setGetTaskCategories] = useState()
  const [taskCategories, setTaskCategories] = useState(0 || userProfile.response.executorProfile.category)

  const [words, setWords] = useState('' || userProfile.response.executorProfile.subCategory);
  // eslint-disable-next-line
  const [getWords, setGetWords] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const [listWord, setListWord] = useState()

  const [imgUsers, setImgUser] = useState('')

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('' || userProfile.response.executorProfile.passportPhoto);
  const [typeOfDoc, setTypeOfDoc] = useState()

  const [imgUsers2, setImgUser2] = useState()

  const [selectedFile2, setSelectedFile2] = useState(null);
  const [preview2, setPreview2] = useState('' || userProfile.response.executorProfile.selfPassportPhoto);
  const [typeOfDoc2, setTypeOfDoc2] = useState()

  const [imgUsers3, setImgUser3] = useState()

  const [selectedFile3, setSelectedFile3] = useState(null);
  const [preview3, setPreview3] = useState('' || userProfile.response.executorProfile.taxpayerReg);
  const [typeOfDoc3, setTypeOfDoc3] = useState()

  const [imgUsers4, setImgUser4] = useState()

  const [selectedFile4, setSelectedFile4] = useState(null);
  const [preview4, setPreview4] = useState('' || userProfile.response.executorProfile.taxPayerCertificate);
  const [typeOfDoc4, setTypeOfDoc4] = useState()

  const [imgUsers5, setImgUser5] = useState()

  const [selectedFile5, setSelectedFile5] = useState(null);
  const [preview5, setPreview5] = useState('' || userProfile.response.executorProfile.attorney);
  const [typeOfDoc5, setTypeOfDoc5] = useState()

  useEffect(() => {
      getTaskCategories().then(categories => setGetTaskCategories(categories))
      getSubTaskCategories(taskCategories).then(data => setGetWords(data.response.data))
  }, [taskCategories])

  useEffect(() => {
    getSubTaskCategoriesByName(inputValue).then(data => setListWord(data.response.subCategoriesName))
  }, [inputValue])

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
        setTypeOfDoc(1)
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreview('');
    }
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile2(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setPreview2(base64String);
        const base64StringImg = reader.result;
        setImgUser2(base64StringImg);
        setTypeOfDoc2(2)
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile2(null);
      setPreview2('');
    }
  };

  const handleFileChange3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile3(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setPreview3(base64String);
        const base64StringImg = reader.result;
        setImgUser3(base64StringImg);
        setTypeOfDoc3(3)
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile3(null);
      setPreview3('');
    }
  };

  const handleFileChange4 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile4(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setPreview4(base64String);
        const base64StringImg = reader.result;
        setImgUser4(base64StringImg);
        setTypeOfDoc4(4)
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile4(null);
      setPreview4('');
    }
  };

  const handleFileChange5 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile5(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setPreview5(base64String);
        const base64StringImg = reader.result;
        setImgUser5(base64StringImg);
        setTypeOfDoc5(5)
        
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile5(null);
      setPreview5('');
    }
  };

  const changeFruit = (newFruit) => {
    setTaskCategories(newFruit)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setWords([...words, inputValue.trim(),]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const updatedWords = [...words];
    updatedWords.splice(index, 1);
    setWords(updatedWords);
  };

  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)
  // eslint-disable-next-line
  const [focused, setFocused] = useState(false)
  const [active, setActive] = useState(false)

  let changeOne = () => {
      setActive(true)
  }
  console.log(words)
  const clickPost = async () => {
    await setExecutorProfile(taskCategories,words,typeExecutor,nameOrg,inn,regAddress,bankBik,bankAccount,)
    await uploadExecutorDoc(selectedFile, preview, typeOfDoc)
    await uploadExecutorDoc2(selectedFile2, preview2, typeOfDoc2)
    await uploadExecutorDoc3(selectedFile3, preview3, typeOfDoc3)
    await uploadExecutorDoc4(selectedFile4, preview4, typeOfDoc4)
    await uploadExecutorDoc5(selectedFile5, preview5, typeOfDoc5)
    await editProfileAbout(about, aboutSkills).then(() => window.location.reload())
    
  }

    return (
      <>
      <div className="container">
          <div className="add-work">
            <div className="block-back">
              <Link to={'/profile/user'}><img src={photo3} alt="." width={32}/></Link>
            </div>
            <div className="main-add">
                <div className="add-work-main">
                  <div>
                    <h1>{t('profile.editProfileExecutor.title')}</h1>
                    <Link className='button-title button-redirect' to={'/profile/edit-profile'}>{t('profile.editProfileCustomer.profile')}</Link>
                    {infoUser.customerStatus === 1 ? 
                      <Link className='button-title' to={'/profile/edit-customer'}>{t('profile.editProfileExecutor.profileCustomer')}</Link>
                      :
                      <></>
                    }
                  </div>
                </div>
                <div className='edit-profile-block-two'>
                  <h3>{t('profile.editProfileCustomer.status')} : {
                    // eslint-disable-next-line 
                    userProfile.response.executorProfile.validateAccount == 0 ?
                      <>{t('profile.editProfileCustomer.text-one')}</>
                      :
                      <>{t('profile.editProfileExecutor.text-one')}</>
                    }
                  </h3>
                  {userProfile.response.executorProfile.moderatorComment.length > 0 &&
                    <span><h4 className='text-valid'>{t('profile.editProfileCustomer.text-three')}:</h4> {userProfile.response.executorProfile.moderatorComment}</span>
                  }
                </div>
                <div className='edit-profile-block-two'>
                  <h3>{t('profile.editProfileCustomer.text-fo')}</h3>
                    <div>
                      <h4>{t('profile.editProfileCustomer.text-five')}</h4>
                      <input 
                        className="add-name-input" 
                        placeholder={t('verif.info.input-text')}
                        type='text'
                        value={nameOrg}
                        setValue={nameOrg}
                        onChange={(event)=> setNameOrg(event.target.value)}
                      />
                    </div>
                    <div>
                      <h4>{t('verif.info.text-two')}</h4>
                      <input 
                        className="add-name-input" 
                        placeholder='ххххххххх' 
                        type='text'
                        value={inn}
                        setValue={inn}
                        onChange={(event)=> setInn(event.target.value)}
                      />
                    </div>
                    <div>
                      <h4>{t('verif.info.text-three')}</h4>
                      <input 
                        className="add-name-input" 
                        placeholder={t('verif.info.input-text-three')}
                        type='text'
                        value={regAddress}
                        setValue={regAddress}
                        onChange={(event)=> setRegAddress(event.target.value)}
                      />
                    </div>
                </div>
                <div className='edit-profile-block-two'>
                  <h3>{t('profile.editProfileCustomer.text-six')}</h3>
                    <div>
                      <h4>{t('verif.bank-details.text-one')}</h4>
                      <input 
                        className="add-name-input" 
                        placeholder={t('verif.bank-details.input-text')} 
                        type='text'
                        value={bankBik}
                        setValue={bankBik}
                        onChange={(event)=> setBankBik(event.target.value)}
                      />
                    </div>
                    <div>
                      <h4>{t('verif.bank-details.text-two')}</h4>
                      <input 
                        className="add-name-input" 
                        placeholder='ххххххххх' 
                        type='text'
                        value={bankAccount}
                        setValue={bankAccount}
                        onChange={(event)=> setBankAccount(event.target.value)}
                      />
                    </div>
                </div>
                <div className='edit-profile-block-two'>
                    <div>
                      <h4>{t('profile.editProfileExecutor.text-two')}</h4>
                      <input 
                        className="add-name-input" 
                        placeholder={t('profile.editProfileExecutor.text-input-two')}
                        type='text'
                        value={aboutSkills}
                        setValue={aboutSkills}
                        onChange={(event)=> setAboutSkills(event.target.value)}
                      />
                    </div>
                    <h4>{t('profile.editProfileExecutor.text-three')}</h4>
                    <textarea 
                      className="textarea-add" 
                      placeholder={t('profile.editProfileExecutor.text-input-three')}
                      value={about}
                      setValue={about}
                      onChange={(event)=> setAbout(event.target.value)}
                    />
                </div>
                <div className="" >
                <div className="skills">
                    <div className="list-skills-two skills-search">
                        <h4 className='mb'>{t('verif.skills.title-one')}</h4>
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
                    <div className="skills-search line">
                        <h4 className='mb'>{t('verif.skills.title-two')}</h4>
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
                </div>
                <div className='edit-profile-block-two mt-30'>
                  <div className="selection-block">
                      <h2 className="">{t('verif.upload.title-one')}</h2>
                      <p className='p'>{t('verif.upload.title-two')}<button className="button-upload-info" onClick={() => setModalActive(true)} >{t('verif.upload.button-open')}</button></p>
                      <div className='button-upload-block'>
                        <label class="block-button-upload" onMouseEnter={() => setImage(photo2)} onMouseLeave={() => setImage(photo)}>
	                        <input type="file" name="file[]" onChange={handleFileChange} />
                          {!preview && <div className='button-label' onMouseEnter={() => setImage(photo2)} onMouseLeave={() => setImage(photo)}><img src={image} alt='.' width={24}/>{t('verif.upload.text-one')}</div>}
                          {preview &&<img src={imgUsers || `http://194.67.113.55/` + userProfile.response.executorProfile.passportPhoto} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                      </label>
                       <label class="block-button-upload" onMouseEnter={() => setImage2(photo2)} onMouseLeave={() => setImage2(photo)}>
	                        <input type="file" name="file[]" onChange={handleFileChange2}/>
                          {!preview2 && <div className='button-label' onMouseEnter={() => setImage2(photo2)} onMouseLeave={() => setImage2(photo)}><img src={image2} alt='.' width={24}/>{t('verif.upload.text-two')}</div>}
                          {preview2 &&<img src={imgUsers2 || `http://194.67.113.55/` + userProfile.response.executorProfile.selfPassportPhoto} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                      </label>
                        <label class="block-button-upload" onMouseEnter={() => setImage3(photo2)} onMouseLeave={() => setImage3(photo)}>
	                        <input type="file" name="file[]" onChange={handleFileChange3}/>
                          {!preview3 && <div className='button-label' onMouseEnter={() => setImage3(photo2)} onMouseLeave={() => setImage3(photo)}><img src={image3} alt='.' width={24}/>{t('verif.upload.text-three')}</div>}
                          {preview3 &&<img src={imgUsers3 || `http://194.67.113.55/` + userProfile.response.executorProfile.taxpayerReg} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                      </label>
                        <label class="block-button-upload" onMouseEnter={() => setImage4(photo2)} onMouseLeave={() => setImage4(photo)}>
	                        <input type="file" name="file[]" onChange={handleFileChange4}/>
                          {!preview4 && <div className='button-label' onMouseEnter={() => setImage4(photo2)} onMouseLeave={() => setImage4(photo)}><img src={image4} alt='.' width={24}/>{t('verif.upload.text-fo')}</div>}
                          {preview4 &&<img src={imgUsers4 || `http://194.67.113.55/` + userProfile.response.executorProfile.taxPayerCertificate} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                      </label>
                        <label class="block-button-upload" onMouseEnter={() => setImage5(photo2)} onMouseLeave={() => setImage5(photo)}>
	                        <input type="file" name="file[]" onChange={handleFileChange5}/>
                          {!preview5 && <div className='button-label' onMouseEnter={() => setImage5(photo2)} onMouseLeave={() => setImage5(photo)}><img src={image5} alt='.' width={24}/>{t('verif.upload.text-five')}</div>}
                          {preview5 &&<img src={imgUsers5 || `http://194.67.113.55/` + userProfile.response.executorProfile.attorney} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                      </label>
                      </div>
                  </div>
                </div>
                
                <button className='save-button-add' onClick={clickPost}>{t('profile.addWork.save')}</button>
                <div className="block-profile edit">
                  <div className="block-profile-portfolio">
                      <PortfolioExecutor userProfile={userProfile}/>
                  </div>
                  <div className="block-profile-comment">
                      <Comment userProfile={userProfile}/>
                  </div>
                  <div className="block-profile-experience">
                      <ExperienceExecutor userProfile={userProfile}/>
                  </div>
                  <div className="block-profile-education">
                      <EducationExecutor userProfile={userProfile}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <ModalWar modalActive={modalActive} setModalActive={setModalActive}/>
      </>
    );
}

export default EditProfileExecutor;