import { useTranslation } from "react-i18next";
import photo from '../../../assets/icon/upload.png'

function About({description, setDescription, handleFileChange, handleFileChange2, handleFileChange3,preview,imgUsers,preview2,imgUsers2,preview3,imgUsers3}) {
  const { t } = useTranslation()
    return (
      <div className="create">
            <h1 className="create-work-title">{t('create-work.about.title')}</h1>
            <p className="mb-25">{t('create-work.about.title')}</p>
            <textarea 
              className="textarea-edit" 
              placeholder={t('create-work.about.input-text')}
              value={description}
              setValue={description}
              onChange={(event)=> setDescription(event.target.value)}
            />
            <div className='block-img-edit'>
              <label class="button-edit">
	            	   	<input type="file" name="file[]" onChange={handleFileChange}/>
                    {!preview && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('create-work.about.button-text')}</div>}
                    {preview &&<img src={imgUsers} alt='.' id='phot' className='reg-user-img' width="auto" height={183}/>}
 	            	</label>
                <label class="button-edit">
	            	   	<input type="file" name="file[]" onChange={handleFileChange2}/>
                    {!preview2 && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('create-work.about.button-text')}</div>}
                    {preview2 &&<img src={imgUsers2} alt='.' id='phot' className='reg-user-img' width="auto" height={183}/>}
 	            	</label>
                <label class="button-edit">
	            	   	<input type="file" name="file[]" onChange={handleFileChange3}/>
                    {!preview3 && <div className='button-edit-photo'><img src={photo} alt='.' width={24}/>{t('create-work.about.button-text')}</div>}
                    {preview3 &&<img src={imgUsers3} alt='.' id='phot' className='reg-user-img' width="auto" height={183}/>}
 	            	</label>
            </div>
      </div>
    );
  }
  
  export default About;