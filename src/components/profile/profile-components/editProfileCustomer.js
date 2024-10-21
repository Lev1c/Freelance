import { Link } from 'react-router-dom';
import photo from '../../../assets/icon/upload2.png'
import photo2 from '../../../assets/icon/upload3.png'
import photo3 from '../../../assets/icon/Arrow_Right_LG.png'
import "react-datepicker/dist/react-datepicker.css";
import {  useState } from 'react';

import ModalWar from './ModalWar';
import {  setCustomerProfile, uploadCustomerDoc, uploadCustomerDoc2, uploadCustomerDoc3, uploadCustomerDoc4, uploadCustomerDoc5} from '../../../http/profileApi';
import CommentCustomer from './commentCustomer';
import { useTranslation } from 'react-i18next'

const EditProfileCustomer = ({userProfile}) => {
  const { t } = useTranslation();

  const [modalActive, setModalActive] = useState(false)
  
  const [image, setImage] = useState(photo);
  const [image2, setImage2] = useState(photo);
  const [image3, setImage3] = useState(photo);
  const [image4, setImage4] = useState(photo);
  const [image5, setImage5] = useState(photo);
// eslint-disable-next-line
  const [typeExecutor, setTypeExecutor] = useState('' || userProfile.response.customerProfile.typeExecutor)
  const [nameOrg, setNameOrg] = useState('' || userProfile.response.customerProfile.nameOrg)
  const [inn, setInn] = useState('' || userProfile.response.customerProfile.inn)
  const [regAddress, setRegAddress] = useState('' || userProfile.response.customerProfile.regAddress)
  const [bankBik, setBankBik] = useState('' || userProfile.response.customerProfile.bankBik)
  const [bankAccount, setBankAccount] = useState('' || userProfile.response.customerProfile.bankAccount)

  const [imgUsers, setImgUser] = useState('')

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('' || userProfile.response.customerProfile.passportPhoto);
  const [typeOfDoc, setTypeOfDoc] = useState()

  const [imgUsers2, setImgUser2] = useState()

  const [selectedFile2, setSelectedFile2] = useState(null);
  const [preview2, setPreview2] = useState('' || userProfile.response.customerProfile.selfPassportPhoto);
  const [typeOfDoc2, setTypeOfDoc2] = useState()

  const [imgUsers3, setImgUser3] = useState()

  const [selectedFile3, setSelectedFile3] = useState(null);
  const [preview3, setPreview3] = useState('' || userProfile.response.customerProfile.taxpayerReg);
  const [typeOfDoc3, setTypeOfDoc3] = useState()

  const [imgUsers4, setImgUser4] = useState()

  const [selectedFile4, setSelectedFile4] = useState(null);
  const [preview4, setPreview4] = useState('' || userProfile.response.customerProfile.taxPayerCertificate);
  const [typeOfDoc4, setTypeOfDoc4] = useState()

  const [imgUsers5, setImgUser5] = useState()

  const [selectedFile5, setSelectedFile5] = useState(null);
  const [preview5, setPreview5] = useState('' || userProfile.response.customerProfile.attorney);
  const [typeOfDoc5, setTypeOfDoc5] = useState()

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

  const clickPost = async () => {
    await setCustomerProfile(typeExecutor,nameOrg,inn,regAddress,bankBik,bankAccount).then(() => window.location.reload())
    await uploadCustomerDoc(selectedFile, preview, typeOfDoc)
    await uploadCustomerDoc2(selectedFile2, preview2, typeOfDoc2)
    await uploadCustomerDoc3(selectedFile3, preview3, typeOfDoc3)
    await uploadCustomerDoc4(selectedFile4, preview4, typeOfDoc4)
    await uploadCustomerDoc5(selectedFile5, preview5, typeOfDoc5)
    window.location.reload()
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
                    <h1>{t('profile.editProfileCustomer.title')}</h1>
                    <Link className='button-title button-redirect' to={'/profile/edit-profile'}>{t('profile.editProfileCustomer.profile')}</Link>
                    {userProfile && userProfile.response.profile.customerStatus === 1 ? 
                      <Link className='button-title button-redirect link-red' to={'/profile/edit-customer'}>{t('profile.editProfile.profile-customer')}</Link>
                      :
                      <Link className='button-title button-redirect-reg button-redirect' to={'/profile/verification/customer'}>{t('profile.editProfile.profile-customer')}</Link>
                    }
                    {userProfile && userProfile.response.profile.executerStatus === 1 ? 
                      <Link className='button-title ' to={'/profile/edit-executor'}>{t('profile.editProfile.profile-executor')}</Link>
                      :
                      <Link className='button-title button-redirect-reg' to={'/profile/verification/executor'}>{t('profile.editProfile.profile-executor')}</Link>
                    }
                  </div>
                </div>
                <div className='edit-profile-block-two'>
                  <h3>{t('profile.editProfileCustomer.status')} : {
                    // eslint-disable-next-line
                    userProfile.response.customerProfile.validateAccount == 0 ?
                      <>{t('profile.editProfileCustomer.text-one')}</>
                      :
                      <>{t('profile.editProfileCustomer.text-two')}</>
                    }
                  </h3>
                  {userProfile.response.customerProfile.moderatorComment && userProfile.response.customerProfile.moderatorComment.length > 0 &&
                    <span><h4 className='text-valid'>{t('profile.editProfileCustomer.text-three')}:</h4> {userProfile.response.customerProfile.moderatorComment}</span>
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
                <div className='edit-profile-block-two mt-30'>
                  <div className="selection-block">
                      <h2 className="">{t('verif.upload.title-one')}</h2>
                      <p className='p'>{t('verif.upload.title-two')}<button className="button-upload-info" onClick={() => setModalActive(true)} >{t('verif.upload.button-open')}</button></p>
                      <div className='button-upload-block'>
                        <label class="block-button-upload" onMouseEnter={() => setImage(photo2)} onMouseLeave={() => setImage(photo)}>
	                        <input type="file" name="file[]" onChange={handleFileChange} />
                          {!preview && <div className='button-label' onMouseEnter={() => setImage(photo2)} onMouseLeave={() => setImage(photo)}><img src={image} alt='.' width={24}/>{t('verif.upload.text-one')}</div>}
                          {preview &&<img src={imgUsers || `http://194.67.113.55/` + userProfile.response.customerProfile.passportPhoto} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                      </label>
                       <label class="block-button-upload" onMouseEnter={() => setImage2(photo2)} onMouseLeave={() => setImage2(photo)}>
	                        <input type="file" name="file[]" onChange={handleFileChange2}/>
                          {!preview2 && <div className='button-label' onMouseEnter={() => setImage2(photo2)} onMouseLeave={() => setImage2(photo)}><img src={image2} alt='.' width={24}/>{t('verif.upload.text-two')}</div>}
                          {preview2 &&<img src={imgUsers2 || `http://194.67.113.55/` + userProfile.response.customerProfile.selfPassportPhoto} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                      </label>
                        <label class="block-button-upload" onMouseEnter={() => setImage3(photo2)} onMouseLeave={() => setImage3(photo)}>
	                        <input type="file" name="file[]" onChange={handleFileChange3}/>
                          {!preview3 && <div className='button-label' onMouseEnter={() => setImage3(photo2)} onMouseLeave={() => setImage3(photo)}><img src={image3} alt='.' width={24}/>{t('verif.upload.text-three')}</div>}
                          {preview3 &&<img src={imgUsers3 || `http://194.67.113.55/` + userProfile.response.customerProfile.taxpayerReg} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                      </label>
                        <label class="block-button-upload" onMouseEnter={() => setImage4(photo2)} onMouseLeave={() => setImage4(photo)}>
	                        <input type="file" name="file[]" onChange={handleFileChange4}/>
                          {!preview4 && <div className='button-label' onMouseEnter={() => setImage4(photo2)} onMouseLeave={() => setImage4(photo)}><img src={image4} alt='.' width={24}/>{t('verif.upload.text-fo')}</div>}
                          {preview4 &&<img src={imgUsers4 || `http://194.67.113.55/` + userProfile.response.customerProfile.taxPayerCertificate} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                      </label>
                        <label class="block-button-upload" onMouseEnter={() => setImage5(photo2)} onMouseLeave={() => setImage5(photo)}>
	                        <input type="file" name="file[]" onChange={handleFileChange5}/>
                          {!preview5 && <div className='button-label' onMouseEnter={() => setImage5(photo2)} onMouseLeave={() => setImage5(photo)}><img src={image5} alt='.' width={24}/>{t('verif.upload.text-five')}</div>}
                          {preview5 &&<img src={imgUsers5 || `http://194.67.113.55/` + userProfile.response.customerProfile.attorney} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	                      </label>
                      </div>
                  </div>
                </div>
                <button className='save-button-add' onClick={clickPost}>{t('profile.addWork.save')}</button>
                <div className="block-profile">
                  <div className="block-profile-comment">
                      <CommentCustomer userProfile={userProfile}/>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <ModalWar modalActive={modalActive} setModalActive={setModalActive}/>
      </>
    );
}

export default EditProfileCustomer;