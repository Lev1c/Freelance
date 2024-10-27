import { useState } from 'react';
import photo from '../../../assets/icon/upload2.png'
import photo2 from '../../../assets/icon/upload3.png'
import Modal from './Modal';
import { useTranslation } from "react-i18next";

const Upload = ({handleFileChange,imgUsers,preview, handleFileChange2,imgUsers2,preview2 ,handleFileChange3,imgUsers3,preview3 ,handleFileChange4,imgUsers4,preview4 ,handleFileChange5,imgUsers5,preview5}) => {
    const { t } = useTranslation();
    const [image, setImage] = useState(photo);
    const [image2, setImage2] = useState(photo);
    const [image3, setImage3] = useState(photo);
    const [image4, setImage4] = useState(photo);
    const [image5, setImage5] = useState(photo);
    const [modalActive, setModalActive] = useState(false)
    return (
      <div className="selection">
        <div className="selection-block">
            <h2 className="">{t('verif.upload.title-one')}</h2>
            <p className='p'>{t('verif.upload.title-two')}<button className="button-upload-info" onClick={() => setModalActive(true)} > {t('verif.upload.button-open')}</button></p>
            <div className='button-upload-block'>
              <label class="block-button-upload">
	              <input type="file" name="file[]" onChange={handleFileChange}/>
                {!preview && <div className='button-label' onMouseEnter={() => setImage(photo2)} onMouseLeave={() => setImage(photo)}><img src={image} alt='.' width={24}/>{t('verif.upload.text-one')}</div>}
                {preview &&<img src={imgUsers} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	            </label>
             <label class="block-button-upload">
	              <input type="file" name="file[]" onChange={handleFileChange2}/>
                {!preview2 && <div className='button-label' onMouseEnter={() => setImage2(photo2)} onMouseLeave={() => setImage2(photo)}><img src={image2} alt='.' width={24}/>{t('verif.upload.text-two')}</div>}
                {preview2 &&<img src={imgUsers2} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	            </label>
              <label class="block-button-upload">
	              <input type="file" name="file[]" onChange={handleFileChange3}/>
                {!preview3 && <div className='button-label' onMouseEnter={() => setImage3(photo2)} onMouseLeave={() => setImage3(photo)}><img src={image3} alt='.' width={24}/>{t('verif.upload.text-three')}</div>}
                {preview3 &&<img src={imgUsers3} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	            </label>
              <label class="block-button-upload">
	              <input type="file" name="file[]" onChange={handleFileChange4}/>
                {!preview4 && <div className='button-label' onMouseEnter={() => setImage4(photo2)} onMouseLeave={() => setImage4(photo)}><img src={image4} alt='.' width={24}/>{t('verif.upload.text-fo')}</div>}
                {preview4 &&<img src={imgUsers4} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	            </label>
              <label class="block-button-upload">
	              <input type="file" name="file[]" onChange={handleFileChange5}/>
                {!preview5 && <div className='button-label' onMouseEnter={() => setImage5(photo2)} onMouseLeave={() => setImage5(photo)}><img src={image5} alt='.' width={24}/>{t('verif.upload.text-five')}</div>}
                {preview5 &&<img src={imgUsers5} alt='.' id='phot' className='reg-user-img' width={183} height="auto"/>}
 	            </label>
            </div>
        </div>
        <Modal modalActive={modalActive} setModalActive={setModalActive}/>
      </div>
    );
  }

export default Upload;