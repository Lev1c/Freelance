import { Link } from 'react-router-dom';
import photo from '../../../assets/icon/upload.png'
import photo2 from '../../../assets/icon/Arrow_Right_LG.png'
import { useState } from 'react';
import { addExecutorPortfolio } from '../../../http/profileApi';
import { useTranslation } from 'react-i18next'

const AddWork = () => {
    const { t } = useTranslation();
    const [nameProject, setNameProject] = useState('')
    const [descriptionProject, setDescriptionProject] = useState('')

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
      await addExecutorPortfolio(nameProject,descriptionProject, selectedFile, preview, selectedFile2, preview2, selectedFile3, preview3)
      .then(data => setReply(data))
    }

    if (reply && reply.response.status === true) {
      window.location.replace('/profile/edit-executor')
    }
    console.log(selectedFile, preview, selectedFile2, preview2, selectedFile3, preview3)
    return (
      <div className="container">
          <div className="add-work">
            <div className="block-back">
              <Link to={'/profile/edit-profile'}><img src={photo2} alt="." width={32}/></Link>
            </div>
            <div className="main-add">
                <div className="add-work-main">
                  <h1>{t('profile-addWork.title')}</h1>
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
                            {preview &&<img src={imgUsers} alt='.' id='phot' className='reg-user-img' width='auto' height="190"/>}
 	                        </label>
                          {preview ?
                            <label class="button-edit">
	                      	    <input type="file" name="file[]" onChange={handleFileChange2}/>
                              {!preview2 && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('profile-addWork.add-photo')}</div>}
                              {preview2 &&<img src={imgUsers2} alt='.' id='phot' className='reg-user-img' width='auto' height="190"/>}
 	                          </label>
                            :
                            <></>
                          }
                          {preview2 ?
                            <label class="button-edit">
	                      	    <input type="file" name="file[]" onChange={handleFileChange3}/>
                              {!preview3 && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('profile-addWork.add-photo')}</div>}
                              {preview3 &&<img src={imgUsers3} alt='.' id='phot' className='reg-user-img' width='auto' height="190"/>}
 	                          </label>
                            :
                            <></>
                          }
                    </div>
                    
                  </div>
                 
                </div>
                <button className='save-button-add' onClick={click}>{t('profile-addWork.save')}</button>
            </div>
          </div>
      </div>
    );
}

export default AddWork;