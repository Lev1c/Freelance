import EditTask from "./Edit-components/EditTask";
import photo from '../../assets/icon/Arrow_Right_LG.png'
import { Link, useParams } from "react-router-dom";
import {  getCityByName, getTaskCategories, } from "../../http/userAPI";
import { useEffect, useState } from "react";
import { setOrder, viewOrder,setCloseOrder } from "../../http/orderApi";
import { ClipLoader } from "react-spinners";
import { useTranslation } from 'react-i18next'

function Edit() {
    const { t } = useTranslation();
    const { id } = useParams();
    
    const [name, setName] = useState('')
    const [category, setCategory] = useState(0)
    const [typeOrder, setTypeOrder] = useState(0)
    const [words, setWords] = useState([]);
    const [typePlace, setTypePlace] = useState(0)
    const [city, setCity] = useState()
    const [addressPlace, setAddressPlace] = useState()
    const [typeDate, setTypeDate] = useState(0)
    const [selectedDate, setSelectedDate] = useState();
    const [dateOne, setDateOne] = useState();
    const [selectedDateTwo, setSelectedDateTwo] = useState();
    const [dateTwo, setDateTwo] = useState();
    const [startCost, setStartCost] = useState(0)
    const [endCost, setEndCost] = useState(0)
    const [typePayments, setTypePayments] = useState(0)
    const [needAgreement, setNeedAgreement] = useState(0)
    const [needCloseDocuments, setNeedCloseDocuments] = useState(0)
    const [needInsurance, setNeedInsurance] = useState(0)
    const [needCredit, setNeedCredit] = useState(0)
    const [description, setDescription] = useState('')

    const [cityId, setCityId] = useState()
    const [cityName, setCityName] = useState('');
    const [cityList, setCityList] = useState([]);
    // eslint-disable-next-line
    const [status, setStatus] = useState(false);
    // eslint-disable-next-line
    const [response, setResponse] = useState('')

    const [inputValue, setInputValue] = useState('');
    const [getTaskCategoriess, setGetTaskCategories] = useState()
    const [taskCategories, setTaskCategories] = useState()

    const [loading, setLoading] = useState(true)
    const [imgUsers, setImgUser] = useState()

    const [files, setFiles] = useState([])

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState();

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
          setFiles(prevFile => [...prevFile, {idFile: getInfo && getInfo.documents[0] && getInfo.documents[0].idFile, dataFile: base64String, nameFile:file.name}]);

        };
        reader.readAsDataURL(file);

      } else {
        setSelectedFile(null);
        setPreview();
        setFiles(prevFile => prevFile.filter(f => f.nameFile !== selectedFile));
      }

    };

    const [imgUsers2, setImgUser2] = useState()

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
          setFiles(prevFile => [...prevFile, {idFile: getInfo && getInfo.documents[1] && getInfo.documents[1].idFile,dataFile: base64String, nameFile:file.name}]);

        };
        reader.readAsDataURL(file);
      } else {
        setSelectedFile2(null);
        setPreview2();
        setFiles(prevFile => prevFile.filter(f => f.nameFile !== selectedFile2));
      }

    };

    const [imgUsers3, setImgUser3] = useState()

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
          setFiles(prevFile => [...prevFile, {idFile: getInfo && getInfo.documents[2] && getInfo.documents[2].idFile, dataFile: base64String, nameFile:file.name}]);

        };
        reader.readAsDataURL(file);
      } else {
        setSelectedFile3(null);
        setPreview3();
        setFiles(prevFile => prevFile.filter(f => f.nameFile !== selectedFile3));
      }
    };
     useEffect(() => {
      if (cityName.trim() !== '') {
        getCityByName(cityName)
          .then((response) => {
            setCityList(response.response.cities);
            setStatus(response.response.status);
          });
      }
    }, [cityName]);
    
    useEffect(() => {
       viewOrder(id)
      .then((data) => setDescriptionInfo(data))
      getTaskCategories()
      .then(categories => setGetTaskCategories(categories))
      .finally(() => setLoading(false))
      // eslint-disable-next-line
    }, [])
    // eslint-disable-next-line
    const [descriptionInfo, setDescriptionInfo] = useState("");

    let getInfo = descriptionInfo && descriptionInfo.order[0]
    
    console.log(files)

    useEffect(() => {
      setName(getInfo && getInfo.name)
      setWords(getInfo && getInfo.subCategory)
      setTaskCategories(getInfo && getInfo.category)
      setTypeOrder(2)
      setTypePlace(getInfo && getInfo.typeDate)
      setTypeDate(getInfo && getInfo.typePlace)
      setSelectedDate(getInfo && getInfo.startDate)
      setSelectedDateTwo(getInfo && getInfo.endDate)
      setStartCost(getInfo && getInfo.startCost === 0 ? '' : getInfo.startCost)
      setEndCost(getInfo && getInfo.endCost === 0 ? '' : getInfo.endCost)
      setTypePayments(getInfo && getInfo.typePayments)
      setNeedAgreement(getInfo && getInfo.needAgreement)
      setNeedCloseDocuments(getInfo && getInfo.needCloseDocuments)
      setNeedInsurance(getInfo && getInfo.needInsurance)
      setNeedCredit(getInfo && getInfo.needCredit)
      setDescription(getInfo && getInfo.description)
      setFiles(getInfo && getInfo.documents)
      setSelectedFile(getInfo && getInfo.documents[0] && getInfo.documents[0].nameFile)
      setPreview(getInfo && getInfo.documents[0] && getInfo.documents[0].pathFile)
      setSelectedFile2(getInfo && getInfo.documents[1] && getInfo.documents[1].nameFile)
      setPreview2(getInfo && getInfo.documents[1] && getInfo.documents[1].pathFile)
      setSelectedFile3(getInfo && getInfo.documents[2] && getInfo.documents[2].nameFile)
      setPreview3(getInfo && getInfo.documents[2] && getInfo.documents[2].pathFile)
    },[getInfo])

    const createOde = async () => {
      await setOrder(id, name, taskCategories, typeOrder, words,typePlace,cityId,addressPlace,typeDate,dateOne,dateTwo,startCost,endCost,typePayments,needAgreement,needCloseDocuments,needInsurance,needCredit,description,files) 
      .then((data) => setResponse(data))
    }
    const closeOrder = async () => {
      setCloseOrder(id)
    }

    if(descriptionInfo && descriptionInfo === 403) {
      window.location.replace('/')
    }

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

    const handleDelete = (index) => {
        const updatedWords = [...words];
        updatedWords.splice(index, 1);
        setWords(updatedWords);
    };

    return (
      <div className="edit">
        <div className="target">
          <div className="target-back">
            <div className="none-mt container">
              <p className="target-text">{t('edit.title')}</p>
              </div>
            </div>
          </div>
          <div className="container edit-under">
            <div className="icon-back">
              <Link to={'/target/' + id}><img src={photo} alt='.' width={36}/></Link>
            </div>
            <EditTask
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
              setCityId={setCityId}
              setDateOne={setDateOne}
              setDateTwo={setDateTwo}
            />
            <div className="button-right">
              <button className="edit-button-click" onClick={createOde}>{t('edit.save')}</button>
              <button className="edit-button-click-two" onClick={closeOrder}>{t('edit.close')}</button>
            </div>
          </div>
        </div> 
    );
  }
  
  export default Edit;