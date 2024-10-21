import { useTranslation } from "react-i18next";
import photo from '../../../assets/icon/upload.png'


function About({
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
    descriptionOne,
    setDescriptionOne,
    descriptionTwo,
    setDescriptionTwo,
    descriptionThree,
    setDescriptionThree,
    handleDescriptionChange,
    handleDescriptionChangeTwo,
    handleDescriptionChangeThree,
    active
  }) {
  const { t } = useTranslation()

    return (
      <div className="create">
            <h1 className="create-work-title">{t('create-work.about.title')}</h1>
            <p className="mb-25">{t('create-work.about.title-two')}</p>
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
                {preview && <p>{active === true ? "*" : ""}</p>}
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
                {preview2 && <p>{active === true ? "*" : ""}</p>}
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
                {preview3 && <p>{active === true ? "*" : ""}</p>}
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
    );
  }
  
  export default About;