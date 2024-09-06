import { useState } from "react";
import Legal from "./verifCustomer-component/legal";
import YuroInformation from "./verifCustomer-component/yuroInformation";
import BankDetails from "./verifCustomer-component/bankDetails";
import Upload from "./verifCustomer-component/upload";
import arrowLeftS from '../../assets/icon/Arrow_Left_S.png'
import arrowLeftR from '../../assets/icon/Arrow_Left_R.png'
import arrowLeftSM from '../../assets/icon/Arrow_Left_SM.png'
import arrowLeftSr from '../../assets/icon/Arrow_Left_Sr.png'
import { setCustomerProfile, uploadCustomerDoc, uploadCustomerDoc2, uploadCustomerDoc3, uploadCustomerDoc4, uploadCustomerDoc5} from "../../http/profileApi";
import { useTranslation } from "react-i18next";

const PAGES = [
  { component: Legal },
  { component: YuroInformation },
  { component: BankDetails },
  { component: Upload },
];



const VerifCustomer = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [isChecked] = useState(false);
  const { t } = useTranslation();
  const CurrentPage = PAGES[pageIndex].component;

  const goBack = () => {
    setPageIndex(pageIndex - 1)
  }

  const goForward = () => {
    setPageIndex(pageIndex + 1)
    setImage(arrowLeftSr)
    setImageTwo(arrowLeftR)
  }

  const [image, setImage] = useState(arrowLeftSM);
  const [imageTwo, setImageTwo] = useState(arrowLeftS);
  const [typeExecutor, setTypeExecutor] = useState('')
  const [nameOrg, setNameOrg] = useState('')
  const [inn, setInn] = useState('')
  const [regAddress, setRegAddress] = useState('')
  const [bankBik, setBankBik] = useState('')
  const [bankAccount, setBankAccount] = useState('')

  const [imgUsers, setImgUser] = useState()

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [typeOfDoc, setTypeOfDoc] = useState()

  const [imgUsers2, setImgUser2] = useState()

  const [selectedFile2, setSelectedFile2] = useState(null);
  const [preview2, setPreview2] = useState('');
  const [typeOfDoc2, setTypeOfDoc2] = useState()

  const [imgUsers3, setImgUser3] = useState()

  const [selectedFile3, setSelectedFile3] = useState(null);
  const [preview3, setPreview3] = useState('');
  const [typeOfDoc3, setTypeOfDoc3] = useState()

  const [imgUsers4, setImgUser4] = useState()

  const [selectedFile4, setSelectedFile4] = useState(null);
  const [preview4, setPreview4] = useState('');
  const [typeOfDoc4, setTypeOfDoc4] = useState()

  const [imgUsers5, setImgUser5] = useState()

  const [selectedFile5, setSelectedFile5] = useState(null);
  const [preview5, setPreview5] = useState('');
  const [typeOfDoc5, setTypeOfDoc5] = useState()

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
        setTypeOfDoc(1)
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
        setTypeOfDoc2(2)
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
        setTypeOfDoc3(3)
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile3(null);
      setPreview3('');
    }
  };

  const handleFileChange4 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile4(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setPreview4(base64String);
        const base64StringImg = reader.result;
        setImgUser4(base64StringImg);
        setTypeOfDoc4(4)
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile4(null);
      setPreview4('');
    }
  };

  const handleFileChange5 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile5(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setPreview5(base64String);
        const base64StringImg = reader.result;
        setImgUser5(base64StringImg);
        setTypeOfDoc5(5)
        
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedFile5(null);
      setPreview5('');
    }
  };

  const [response, setResponse] = useState()

  

  const clickPost = async () => {
    await setCustomerProfile(typeExecutor,nameOrg,inn,regAddress,bankBik,bankAccount).then(data => setResponse(data))
    await uploadCustomerDoc(selectedFile, preview, typeOfDoc)
    await uploadCustomerDoc2(selectedFile2, preview2, typeOfDoc2)
    await uploadCustomerDoc3(selectedFile3, preview3, typeOfDoc3)
    await uploadCustomerDoc4(selectedFile4, preview4, typeOfDoc4)
    await uploadCustomerDoc5(selectedFile5, preview5, typeOfDoc5)
  }

  if(response && response.status === true) {
    window.location.replace('/profile/edit-customer')
  }

  return (
    <div className="none-mt-two container create-work">
      <div className="pag-con">
        {PAGES.map((_, index) => (
          <div className="pagination">
          <div
            key={index}
            className={`pagVerifE${(pageIndex === index) || (pageIndex >= index) ? pageIndex : ""}`}
          />
          </div>
        ))}
      </div>
      <CurrentPage 
        typeExecutor={typeExecutor}
        setTypeExecutor={setTypeExecutor}
        nameOrg={nameOrg}
        setNameOrg={setNameOrg}
        inn={inn}
        setInn={setInn}
        regAddress={regAddress}
        setRegAddress={setRegAddress}
        bankBik={bankBik}
        setBankBik={setBankBik}
        bankAccount={bankAccount}
        setBankAccount={setBankAccount}
        handleFileChange={handleFileChange}
        handleFileChange2={handleFileChange2}
        handleFileChange3={handleFileChange3}
        handleFileChange4={handleFileChange4}
        handleFileChange5={handleFileChange5}
        imgUsers={imgUsers}
        selectedFile={selectedFile}
        preview={preview}
        imgUsers2={imgUsers2}
        selectedFile2={selectedFile2}
        preview2={preview2}
        imgUsers3={imgUsers3}
        selectedFile3={selectedFile3}
        preview3={preview3}
        imgUsers4={imgUsers4}
        selectedFile4={selectedFile4}
        preview4={preview4}
        imgUsers5={imgUsers5}
        selectedFile5={selectedFile5}
        preview5={preview5}
        
      />
      <div className="but-block">
        {pageIndex === 0 ?
        <>
        <button
          onClick={goBack}
          id="btn1"
          className="btn-register-disable"
          disabled
        >
          {t('verif.back')}
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
          {t('verif.back')}
        </button>
        }

        {pageIndex === PAGES.length - 1 ?
            <button
              id="btn5"
              className="btn-register"
              onClick={clickPost}
              onMouseEnter={() => {
                setImageTwo(arrowLeftR)
              }}
              onMouseLeave={() => {
                setImageTwo(arrowLeftS)
              }}
            >
              {t('verif.post-button')}
              <img src={imageTwo} alt='.' width={24}/>
            </button>
          :
          <button
            id="btn1"
            onClick={goForward}
            className="btn-register"
            disabled={isChecked || pageIndex === PAGES.length - 1}
            onMouseEnter={() => {
              setImageTwo(arrowLeftR)
            }}
            onMouseLeave={() => {
              setImageTwo(arrowLeftS)
            }}
          >
            {t('verif.forward')}
            <img src={imageTwo} alt='.' width={24}/>
          </button>
        }
      </div>
    </div>
  );
};

export default VerifCustomer;