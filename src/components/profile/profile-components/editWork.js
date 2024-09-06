import { Link, useParams } from 'react-router-dom';
import photo from '../../../assets/icon/upload.png'
import photo2 from '../../../assets/icon/Arrow_Right_LG.png'
import { useEffect, useState } from 'react';
import {getExecutorProfile, removeExecutorPortfolio, setExecutorPortfolio } from '../../../http/profileApi';
import { useTranslation } from 'react-i18next'

const EditWork = () => {
    const { t } = useTranslation();
    const [nameProject, setNameProject] = useState('')
    const [descriptionProject, setDescriptionProject] = useState('')

    const { id } = useParams();

    const [imgUsers, setImgUser] = useState()

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState('');

    const [imgUsers2, setImgUser2] = useState()

    const [selectedFile2, setSelectedFile2] = useState(null);
    const [preview2, setPreview2] = useState('');

    const [imgUsers3, setImgUser3] = useState()

    const [selectedFile3, setSelectedFile3] = useState(null);
    const [preview3, setPreview3] = useState('');

    const [reply, setReply] = useState('')
    // eslint-disable-next-line
    const [replyTwo, setReplyTwo] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
       getExecutorProfile()
        .then(data => setUserProfile(data))
        .finally(() => setLoading(false))
    },[])
    const [userProfile, setUserProfile] = useState('')
    if(userProfile && userProfile === 403) {
      window.location.replace('/')
    }
    useEffect(() => {
      if(userProfile) {
        setNameProject(getPortf[0].nameProject)
        setDescriptionProject(getPortf[0].descriptionProject)
        setPreview(getPortf[0].photo1)
        setPreview2(getPortf[0].photo2)
        setPreview3(getPortf[0].photo3)
      }
      // eslint-disable-next-line
    },[userProfile])
    
    if (loading) {
        return   
    }
    // eslint-disable-next-line
    const getPortf = userProfile.response.executorPortfolio.filter(res => res.portfolioId == id)

    if(getPortf.length <= 0) {
      window.location.replace('/profile/user')
    }
    
    
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
        };

        reader.readAsDataURL(file);
      } else {
        setSelectedFile3(null);
        setPreview3('');
      }
    };

    const click = async () => {
      await setExecutorPortfolio(id, nameProject,descriptionProject, selectedFile, preview, selectedFile2, preview2, selectedFile3, preview3)
      .then(data => setReply(data))
    }

     const removeClick = () => {
        removeExecutorPortfolio(id)
        .then(() => setReplyTwo(true))
    }

    if (reply) {
      reply.response.status === true && window.location.replace('/profile/edit-executor')
    }
    return (
      <div className="container">
          <div className="add-work">
            <div className="block-back">
              <Link to={'/profile/edit-executor'}><img src={photo2} alt="." width={32}/></Link>
            </div>
            <div className="main-add">
                <div className="add-work-main">
                  <h1>{t('profile.editWork.title')}</h1>
                  <button className='button-title' onClick={removeClick}>Удалить работу</button>
                </div>
                <div>
                  <h4>{t('profile-addWork.text-one')}</h4>
                  <input 
                    className="add-name-input"
                    type='text'
                    value={nameProject}
                    setValue={nameProject}
                    onChange={(event)=> setNameProject(event.target.value)}
                  />
                </div>
                <div>
                  <h4>{t('profile-addWork.text-two')}</h4>
                  <textarea 
                    className="textarea-add" 
                    placeholder={t('profile-addWork.input-text-two')}
                    value={descriptionProject}
                    setValue={descriptionProject}
                    onChange={(event)=> setDescriptionProject(event.target.value)}
                  />
                </div>
                <div>
                  <div className='block-img-edit'>
                    <div className='file-block-upload-add'>
                      <h4>{t('profile-addWork.files')} </h4>
                      <span>{t('profile-addWork.files-two')}</span>
                    </div>
                    <div className='block-upload-portfolio'>
                        <label class="button-edit">
	                        	<input type="file" name="file[]" onChange={handleFileChange}/>
                            {!preview && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('profile-addWork.add-photo')}</div>}
                            {preview &&<img src={imgUsers || `http://194.67.113.55/` + getPortf[0].photo1} alt='.' id='phot' className='reg-user-img' width='auto' height="190"/>}
 	                        </label>
                          {preview ?
                            <label class="button-edit">
	                      	    <input type="file" name="file[]" onChange={handleFileChange2}/>
                              {!preview2 && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('profile-addWork.add-photo')}</div>}
                              {preview2 &&<img src={imgUsers2 || `http://194.67.113.55/` + getPortf[0].photo2} alt='.' id='phot' className='reg-user-img' width='auto' height="190"/>}
 	                          </label>
                            :
                            <></>
                          }
                          {preview2 ?
                            <label class="button-edit">
	                      	    <input type="file" name="file[]" onChange={handleFileChange3}/>
                              {!preview3 && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('profile-addWork.add-photo')}</div>}
                              {preview3 &&<img src={imgUsers3 || `http://194.67.113.55/` + getPortf[0].photo3} alt='.' id='phot' className='reg-user-img' width='auto' height="190"/>}
 	                          </label>
                            :
                            <></>
                          }
                    </div>
                    
                  </div>
                 
                </div>
                <button className='save-button-add' onClick={click}>Сохранить</button>
            </div>
          </div>
      </div>
    );
}

export default EditWork;