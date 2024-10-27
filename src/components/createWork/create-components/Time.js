import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import { format } from 'date-fns';
import { useTranslation } from "react-i18next";

function Time({setDateOne,dateOne,dateTwo,setDateTwo,selectedDate, setSelectedDate,selectedDateTwo, setSelectedDateTwo,setTypeDate,typeDate}) {
    const { t } = useTranslation();
    const handleDateChange = (date) => {
      const formattedDate = format(date, 'yyyy.MM.dd');
      setDateOne(formattedDate);
      setSelectedDate(date);
    };
    
    const handleDateChangeTwo = (date) => {
      const formattedDate = format(date, 'yyyy.MM.dd');
      setDateTwo(formattedDate);
      setSelectedDateTwo(date);
    };
    console.log(dateOne)
    console.log(dateTwo)
    return (
      <div className="create">
            <h1 className="create-work-title">{t('create-work.time.title-one')}</h1>
            <p className="mb-25">{t('create-work.time.title-two')}</p>
            <div className='label-radio'>
                <input 
                  id="radio-4"
                  type='radio' 
                  name='name2'
                  value={1}
                  setValue={1}
                  onChange={(event) => setTypeDate(event.target.value)} 
                  />
                <label htmlFor="radio-4">{t('create-work.time.text-one')}</label>
            </div>
            <div className='label-radio '>
                <input 
                  id="radio-3" 
                  type='radio' 
                  name='name2'
                  value={2}
                  setValue={2}
                  onChange={(event) => setTypeDate(event.target.value)} 
                />
                <label htmlFor="radio-3">{t('create-work.time.text-two')}</label>
            </div>
            <div className='label-radio mb-25'>
                <input 
                  id="radio-5" 
                  type='radio' 
                  name='name2'
                  value={3}
                  setValue={3}
                  onChange={(event) => setTypeDate(event.target.value)} 
                />
                <label htmlFor="radio-5">{t('create-work.time.text-three')}</label>
            </div>
            <div className="input-date">
              {// eslint-disable-next-line
                  typeDate == 2 ? 
                  <></>
                  :
                  <div className="input-block-edit">
                    <h4>{t('create-work.time.text-fo')}</h4>
                    <DatePicker 
                      showIcon
                      type="text"
                      id="datepicker"
                      selected={selectedDate ? new Date(selectedDate) : null} 
                      maxDate={new Date()}
                      locale={ru}
                      onChange={handleDateChange} 
                      dateFormat="dd.MM.yyyy"
                      placeholderText="25.12.1990"
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                      autoComplete="off"
                    />
                </div>
              }
                
                {// eslint-disable-next-line
                typeDate == 1 ?
                  <></>
                  :
                  <div className="input-block-edit">
                      <h4>{t('create-work.time.text-five')}</h4>
                      <DatePicker 
                      showIcon
                      type="text"
                      id="datepicker"
                      selected={selectedDateTwo ? new Date(selectedDateTwo) : null} 
                      
                      locale={ru}
                      onChange={handleDateChangeTwo} 
                      dateFormat="dd.MM.yyyy"
                      placeholderText="25.12.1990"
                      showYearDropdown
                      showMonthDropdown
                      dropdownMode="select"
                      autoComplete="off"
                    />
                  </div>
                }
                
            </div>
      </div>
    );
  }
  
  export default Time;