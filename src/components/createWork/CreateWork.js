import { useEffect, useState } from "react";
import arrowLeftS from '../../assets/icon/Arrow_Left_S.png'
import arrowLeftR from '../../assets/icon/Arrow_Left_R.png'
import arrowLeftSM from '../../assets/icon/Arrow_Left_SM.png'
import arrowLeftSr from '../../assets/icon/Arrow_Left_Sr.png'
import Create from "./create-components/Create";
import Map from "./create-components/Map";
import Time from "./create-components/Time";
import Money from "./create-components/Money";
import Document from "./create-components/Document";
import About from "./create-components/About";
import {getCityByName, getSubTaskCategories, getSubTaskCategoriesByName, getTaskCategories } from "../../http/userAPI";
import { addOrder } from "../../http/orderApi";
import { useTranslation } from "react-i18next";
import { ClipLoader } from "react-spinners";

const PAGES = [
  { component: Create },
  { component: Map },
  { component: Time },
  { component: Money },
  { component: Document },
  { component: About },
];

const CreateWork = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [isChecked] = useState(false);
  const [image, setImage] = useState(arrowLeftSr);
  const [imageTwo, setImageTwo] = useState(arrowLeftS);

  const { t } = useTranslation();

  const CurrentPage = PAGES[pageIndex].component;

  const goBack = () => {
    setPageIndex(pageIndex - 1);
    
  };

  const goForward = () => {
    setPageIndex(pageIndex + 1);
    setImage(arrowLeftSr)
  };

  const [name, setName] = useState('')
  const [category, setCategory] = useState(0)

  const [typeOrder, setTypeOrder] = useState(0)
  const [city, setCity] = useState()
  const [cityId, setCityId] = useState()
  const [cityName, setCityName] = useState('');
  const [cityList, setCityList] = useState([]);
  const [status, setStatus] = useState(false);
  const [typePlace, setTypePlace] = useState(0)
  const [addressPlace, setAddressPlace] = useState()
  const [typeDate, setTypeDate] = useState(0)
  const [selectedDate, setSelectedDate] = useState();
  const [dateOne, setDateOne] = useState();
  const [selectedDateTwo, setSelectedDateTwo] = useState();
  const [dateTwo, setDateTwo] = useState();
  const [startCost, setStartCost] = useState()
  const [endCost, setEndCost] = useState()
  const [typePayments, setTypePayments] = useState(0)
  const [needAgreement, setNeedAgreement] = useState(0)
  const [needCloseDocuments, setNeedCloseDocuments] = useState(0)
  const [needInsurance, setNeedInsurance] = useState(0)
  const [needCredit, setNeedCredit] = useState(0)
  const [description, setDescription] = useState('')

  const [response, setResponse] = useState('')
  // eslint-disable-next-line
  const [active, setActive] = useState(false)

  const [getTaskCategoriess, setGetTaskCategories] = useState()
  const [taskCategories, setTaskCategories] = useState(0)

  const [words, setWords] = useState();
  // eslint-disable-next-line
  const [getWords, setGetWords] = useState([]);
  const [inputValue, setInputValue] = useState();

  const [listWord, setListWord] = useState()

  const [loading, setLoading] = useState(true)
  const [imgUsers, setImgUser] = useState()

  const [files, setFiles] = useState([])

  const [selectedFile, setSelectedFile] = useState(null);
  const [descriptionOne, setDescriptionOne] = useState()
  const [preview, setPreview] = useState();

  const handleDescriptionChange = (event) => {
    const updatedDescription = event.target.value;
    setDescriptionOne(updatedDescription);

    // Создаем копию массива files, чтобы изменять состояние без мутаций
    const updatedFiles = [...files];

    // Проверяем, существует ли объект с индексом 0 в массиве
    if (updatedFiles[0]) {
      // Обновляем description в объекте с индексом 0
      updatedFiles[0].description = updatedDescription;

      // Обновляем состояние массива files
      setFiles(updatedFiles);
    }
  };
  
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
        setFiles(prevFile => prevFile.filter(f => f.nameFile !== selectedFile));
        setFiles(prevFile => [...prevFile, {dataFile: base64String, nameFile:file.name, description: descriptionOne}]);
        
      };
      reader.readAsDataURL(file);
      
    } else {
      setSelectedFile(null);
      setPreview();
      setFiles(prevFile => prevFile.filter(f => f.nameFile !== selectedFile));
    }
    
  };

  const handleDescriptionChangeTwo = (event) => {
    const updatedDescription = event.target.value;
    setDescriptionTwo(updatedDescription);

    // Создаем копию массива files, чтобы изменять состояние без мутаций
    const updatedFiles = [...files];

    // Проверяем, существует ли объект с индексом 0 в массиве
    if (updatedFiles[1]) {
      // Обновляем description в объекте с индексом 0
      updatedFiles[1].description = updatedDescription;

      // Обновляем состояние массива files
      setFiles(updatedFiles);
    }
  };

  const [imgUsers2, setImgUser2] = useState()

  const [descriptionTwo, setDescriptionTwo] = useState()

  const [selectedFile2, setSelectedFile2] = useState(null);
  const [preview2, setPreview2] = useState();

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
        setFiles(prevFile => prevFile.filter(f => f.nameFile !== selectedFile2));
        setFiles(prevFile => [...prevFile, {dataFile: base64String, nameFile:file.name, description: descriptionTwo}]);
        
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile2(null);
      setPreview2();
      setFiles(prevFile => prevFile.filter(f => f.nameFile !== selectedFile2));
    }
    
  };

  const handleDescriptionChangeThree = (event) => {
    const updatedDescription = event.target.value;
    setDescriptionThree(updatedDescription);

    // Создаем копию массива files, чтобы изменять состояние без мутаций
    const updatedFiles = [...files];

    // Проверяем, существует ли объект с индексом 0 в массиве
    if (updatedFiles[2]) {
      // Обновляем description в объекте с индексом 0
      updatedFiles[2].description = updatedDescription;

      // Обновляем состояние массива files
      setFiles(updatedFiles);
    }
  };

  const [imgUsers3, setImgUser3] = useState()

  const [descriptionThree, setDescriptionThree] = useState()

  const [selectedFile3, setSelectedFile3] = useState(null);
  const [preview3, setPreview3] = useState();

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
        setFiles(prevFile => prevFile.filter(f => f.nameFile !== selectedFile3));
        setFiles(prevFile => [...prevFile, {dataFile: base64String, nameFile:file.name, description: descriptionThree}]);
        
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile3(null);
      setPreview3();
      setFiles(prevFile => prevFile.filter(f => f.nameFile !== selectedFile3));
    }
  };

  const createOde = async () => {
    await addOrder(name, taskCategories, typeOrder, words,typePlace,cityId,addressPlace,typeDate,dateOne,dateTwo,startCost,endCost,typePayments,needAgreement,needCloseDocuments,needInsurance,needCredit,description,files) 
    .then((data) => setResponse(data))
  }

  useEffect(() => {
      getTaskCategories().then(categories => setGetTaskCategories(categories))
      getSubTaskCategories(taskCategories).then(data => {data.response.data ? setWords(data && data.response.data.map(res => res.name)) : setWords('')})
      .finally(() => setLoading(false))
  }, [taskCategories])

  useEffect(() => {
    getSubTaskCategoriesByName(inputValue).then(data => setListWord(data.response.subCategoriesName))
  }, [inputValue])

  useEffect(() => {
      if (cityName.trim() !== '') {
        getCityByName(cityName)
          .then((response) => {
            setCityList(response.response.cities);
            setStatus(response.response.status);
          });
      }
    }, [cityName]);

 if (loading) {
      return (
        <div className="loader">
          <div className='block-loader'>
            <ClipLoader size={20} color={'#646464'}/>
          </div>
        </div>
      )
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setWords([...words, inputValue.trim()]);
      setInputValue('');
    }
  };

  let infoUsers = JSON.parse(localStorage.getItem('info'))
    
  if (infoUsers && infoUsers.systemRole > 1) {
    window.location.replace('/');
  }

  const handleDelete = (index) => {

      const updatedWords = [...words];
      updatedWords.splice(index, 1);
      setWords(updatedWords);
  };

  const changeFruit = (newFruit) => {
      setTaskCategories(newFruit)
    }

  if(response && response.response.status === true) {
    window.location.replace('/task')
  }

  const clc = () => {
    createOde()
  }

  return (
    <div className="none-mt-two container create-work">
      <div className="pag-con">
        {PAGES.map((_, index) => (
          <div className="pagination">
          <div
            key={index}
            className={`pagVerifE${ (pageIndex >= index) ? pageIndex : ""}`}
          />
          </div>
        ))}
      </div>
      <CurrentPage
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleKeyPress={handleKeyPress}
        words={words}
        handleDelete={handleDelete}
        selectedDate={selectedDate}
        selectedDateTwo={selectedDateTwo}
        setSelectedDate={setSelectedDate}
        setSelectedDateTwo={setSelectedDateTwo}
        name={name}
        setName={setName}
        category={category}
        typeOrder={typeOrder}
        typePlace={typePlace}
        city={city}
        addressPlace={addressPlace}
        typeDate={typeDate}
        startCost={startCost}
        endCost={endCost}
        typePayments={typePayments}
        needAgreement={needAgreement}
        needCloseDocuments={needCloseDocuments}
        needInsurance={needInsurance}
        needCredit={needCredit}
        description={description}
        changeFruit={changeFruit}
        setCategory={setCategory}
        setTypeOrder={setTypeOrder}
        setTypePlace={setTypePlace}
        setCity={setCity}
        setAddressPlace={setAddressPlace}
        setTypeDate={setTypeDate}
        setStartCost={setStartCost}
        setEndCost={setEndCost}
        setTypePayments={setTypePayments}
        setNeedAgreement={setNeedAgreement}
        setNeedCloseDocuments={setNeedCloseDocuments}
        setNeedInsurance={setNeedInsurance}
        setNeedCredit={setNeedCredit}
        setDescription={setDescription}
        getTaskCategoriess={getTaskCategoriess}
        setGetTaskCategoriess={setGetTaskCategories}
        taskCategories={taskCategories}
        setTaskCategories={setTaskCategories}
        handleFileChange={handleFileChange}
        handleFileChange2={handleFileChange2}
        handleFileChange3={handleFileChange3}
        imgUsers={imgUsers}
        preview={preview}
        imgUsers2={imgUsers2}
        preview2={preview2}
        imgUsers3={imgUsers3}
        preview3={preview3}
        cityName={cityName}
        setCityName={setCityName}
        cityList={cityList}
        setCityList={setCityList}
        status={status}
        setStatus={setStatus}
        cityId={cityId}
        setCityId={setCityId}
        dateOne={dateOne}
        setDateOne={setDateOne}
        dateTwo={dateTwo}
        setDateTwo={setDateTwo}
        listWord={listWord}
        setWords={setWords}
        descriptionOne={descriptionOne}
        setDescriptionOne={setDescriptionOne}
        descriptionTwo={descriptionTwo}
        setDescriptionTwo={setDescriptionTwo}
        descriptionThree={descriptionThree}
        setDescriptionThree={setDescriptionThree}
        handleDescriptionChange={handleDescriptionChange}
        handleDescriptionChangeTwo={handleDescriptionChangeTwo}
        handleDescriptionChangeThree={handleDescriptionChangeThree}
        active={active}
      />
      <div className="but-block">
        {pageIndex === 0 ?
        <>
        <button
          onClick={goBack}
          id="btn1"
          className="btn-register-disable"
          disabled
          onMouseEnter={() => setImage(arrowLeftSM)}
          onMouseLeave={() => setImage(arrowLeftSr)}
        >
          {t('create-work.back')}
        </button>
        </>
        :
        <button
          onClick={goBack}
          id="btn1"
          className="btn-register"
          onMouseEnter={() => setImage(arrowLeftSM)} 
          onMouseLeave={() => setImage(arrowLeftSr)}
        >
          <img src={image} alt='.' width={24}/>
          {t('create-work.back')}
        </button>
        }
        
        {(isChecked || pageIndex === PAGES.length - 1) ?
          <button
            onClick={clc}
            id="btn1"
            className="btn-register"
            onMouseEnter={() => setImageTwo(arrowLeftR)}
            onMouseLeave={() => setImageTwo(arrowLeftS)}
          >
            {t('create-work.create-work')}
            <img src={imageTwo} alt='.' width={24}/>
          </button>
          :
          <button
          onClick={goForward}
          id="btn1"
          className="btn-register"
          disabled={isChecked || pageIndex === PAGES.length - 1}
          onMouseEnter={() => setImageTwo(arrowLeftR)}
            onMouseLeave={() => setImageTwo(arrowLeftS)}
        >
          {t('create-work.forward')}
          <img src={imageTwo} alt='.' width={24}/>
        </button>
        }
        
      </div>
    </div>
  );
};

export default CreateWork;