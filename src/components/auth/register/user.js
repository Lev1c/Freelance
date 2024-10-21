import AddPhoto from '../../../assets/icon/AddPhoto.png'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";

const User = ({value,activeMiddleName,activeGender,activeBirthday ,activeName, setGender, name, setName, middleName, setMiddleName, surname, setSurname, birthday, setBirthday, preview,imgUsers, handleFileChange}) => {
    const { t } = useTranslation();

    const isOver18 = (date) => {
        if (!date) return false; // Если дата не выбрана, считаем, что пользователь не достиг 18 лет
        const today = new Date();
        const birthDate = new Date(date);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
    
        // Учитываем месяц рождения и текущий месяц
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            // eslint-disable-next-line
          age--;
        }
    
        return age >= 18;
      };
    
      const handleBirthdayChange = (date) => {
        if (isOver18(date)) {
          setBirthday(date);
        } else {
          // Пользователю меньше 18 лет - не сохраняем дату рождения
          setBirthday(null);
          alert("Доступ разрешен только для пользователей старше 18 лет.");
        }
      };
   
    const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 18);
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 100); 
    return (
        <div className=" ">
            <div className="skills">
                <div className="skills-search user">
                    <div class="add-photo">
	                	<label class="add-photo two">
	                	   	<input type="file" name="file[]" onChange={handleFileChange}/>
                            <img src={imgUsers} alt='.' id='phot' className='reg-user-img' width={221} height="auto"/>
                            <div className='add-photo-block' >
                                <img src={AddPhoto} alt='.' className='reg-user-img-add' width={40}/>
                            </div>
 	                	</label>
	                </div>  
                    <h2>{t('register.user.title-one')}</h2>
                    <p>{t('register.user.title-two')}</p>
                    <div className='user-info'>
                        <div className="input-date">
                            <div className="input-block-edit">
                                <h4>{t('register.user.text-one')}</h4>
                                <input 
                                    className={activeName ? "input-date-input-error" : "input-date-input"}
                                    type="text"
                                    placeholder={t('register.user.input-text')}
                                    value={name}
                                    setValue={name}
                                    onChange={(event)=> setName(event.target.value)}
                                />
                            </div>
                            <div className="input-block-edit">
                                <h4>{t('register.user.text-two')}</h4>
                                <input 
                                    className={activeMiddleName ? "input-date-input-error" : "input-date-input"}
                                    type="text" 
                                    placeholder={t('register.user.input-text-two')}
                                    value={surname}
                                    setValue={surname}
                                    onChange={(event)=> setSurname(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-date">
                            <div className="input-block-edit">
                                <h4>{t('register.user.text-three')}</h4>
                                <input 
                                    className="input-date-input" 
                                    type="text" 
                                    placeholder={t('register.user.input-text-three')}
                                    value={middleName}
                                    setValue={middleName}
                                    onChange={(event)=> setMiddleName(event.target.value)}
                                />
                            </div>
                            <div className="input-block-edit">
                                    <h4>{t('register.user.text-fo')}</h4>
                                    <DatePicker
                                    showIcon
                                    type="text"
                                    selected={birthday}
                                    maxDate={minDate} 
                                    minDate={maxDate}
                                    locale="ru"
                                    onChange={handleBirthdayChange}
                                    dateFormat="dd.MM.yyyy"
                                    placeholderText="25.12.1990"
                                    showYearDropdown
                                    showMonthDropdown
                                    dropdownMode="select"
                                    autoComplete="off"
                                    id={activeBirthday ? "datepicker-error" : "datepicker"}
                                    />
                                </div>
                            </div>               
                        <div>
                        </div>
                        <div className="">
                            <h4>{t('register.user.text-five')}{activeGender ? <span>*</span> : ""}</h4>
                            <div className='radio-edit-profile'>
                                <div className="label-radio">
                                    <input 
                                        id="radio-8" 
                                        type="radio" 
                                        name="name4"
                                        value={1}
                                        setValue={1}
                                        onChange={(event) => setGender(event.target.value)} 
                                    />
                                    <label htmlFor="radio-8">{t('register.user.gender-one')}</label>
                                </div>
                                <div className="label-radio" id='left'>
                                    <input 
                                        id="radio-9" 
                                        type="radio" 
                                        name="name4" 
                                        value={2}
                                        setValue={2}
                                        onChange={(event) => setGender(event.target.value)} 
                                    />
                                    <label htmlFor="radio-9">{t('register.user.gender-two')}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-skills">
                    
                </div>
             </div>
        </div>
    );
}
  
export default User;
