import photo3 from '../../../assets/group/Group 14312.png'
import photo4 from '../../../assets/group/Group 14313.png'
import phoneImg from '../../../assets/icon/Vector.png'
import check from '../../../assets/icon/Check.png'
import mail from '../../../assets/icon/Mail2.png'
import arrow from '../../../assets/icon/Arrow.png'
import close from '../../../assets/icon/close.png'
import { useTranslation } from 'react-i18next'
import {observer} from "mobx-react-lite";

const Side = observer((userProfile) => {
    const { t } = useTranslation();
    const arrayMonth = t('profile.education.monthNames', { returnObjects: true });
    function formatDate(dateString) {
        const date = new Date(dateString);
        const months = arrayMonth;

        const year = date.getFullYear();
        const month = months[date.getMonth()];
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        let formattedDate = '';
        if (year === currentYear && date.getMonth() === currentMonth) {
          formattedDate = ` ${t('profile.side.text-one')} ${month}`;
          // eslint-disable-next-line
        } else if(dateString === '') { {
            formattedDate = ``;
        }

        } else {
          formattedDate = `${t('profile.side.text-one')} ${month} ${year}`;
        }
       
        return formattedDate;
    }

    const date = userProfile.userProfile.response.executorProfile.length !== 0 ? (userProfile.userProfile.response.executorProfile.createDate || userProfile.userProfile.response.customerProfile.createDate) : ''
    const formattedDate = formatDate(date);
    console.log(formattedDate);

    return (
    <>
      <div className="side">
        <div className='side-block'>
    
                    <div className='side-block-two'>
                        <span className='side-main-text'>{t('profile.side.title')}</span>
                        <div className='side-verif'>
                            <div className='side-verif-text'>
                                <span><img src={phoneImg} width={24} alt='.' className='img-side' />{t('profile.side.text-two')}</span>
                                {userProfile.userProfile.response.profile.phoneStatus === 0 ?
                                        <a href='/profile/edit-profile' className='button-title'>{t('profile.side.button-one')}</a>
                                :
                                    <img src={check} width={24} alt='.'/>
                                }
                            </div>
                            <div className='side-verif-text'>
                                <span><img src={mail} width={24} alt='.' className='img-side'/>{t('profile.side.text-three')}</span>
                                {userProfile.userProfile.response.profile.mailStatus === 0 ?
                                        <a href='/profile/edit-profile' className='button-title'>{t('profile.side.button-one')}</a>
                                :
                                    <img src={check} width={24} alt='.'/>
                                }
                            </div>
                            <div className='side-verif-text'>
                                <span><img width={24} height={24} src={arrow} alt='.' className='img-side'/>{t('profile.side.text-fo')}</span>
                                {userProfile.userProfile.response.profile.customerStatus === 0 || userProfile.userProfile.response.profile.executerStatus === 0 ?
                                    <img src={close} width={24} alt='.'/>
                                :
                                    <img src={check} width={24} alt='.'/>
                                }
                            </div>
                            <span>{formattedDate}</span>
                        </div>
                    </div>
            
            <div className='side-block-two'>
                <span className='side-main-text'>{t('profile.side.text-five')}</span>
                <div className='side-verif'>
                    <div className='side-verif-text'>
                        <span><img src={photo3} width={36} alt='.' className='img-side'/>Лучший разработчик 2023</span>
                    </div>
                    <div className='side-verif-text'>
                        <span><img src={photo4} width={36} alt='.' className='img-side'/>Разработчик года в категории веб-разработка</span>
                    </div>
                </div>
            </div>
        </div>
      
      </div>
        <div className='text-main-about-mobile'>
                {userProfile.userProfile.response.executorProfile.about}
        </div>
      </>
    );
  }
)  
export default Side;