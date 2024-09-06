import Description from "./Targer-components/Description";
import ListUser from "./Targer-components/ListUser";
import { useParams,} from "react-router-dom";
import { useEffect, useState } from "react";
import { viewOrder } from "../../http/orderApi";
import { useTranslation } from "react-i18next";
import { ClipLoader } from "react-spinners";
function Target() {
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation();
  // eslint-disable-next-line
  const arOptions = ['По умолчанию', 'Самые дешевые', 'Самые дорогие'];
  const { id } = useParams();

  useEffect(() => {
    viewOrder(id)
    .then((data) => setDescriptionInfo(data))
    .finally(() => setLoading(false))
  }, [id]);

  
  // eslint-disable-next-line
  const [infoUser, setInfoUser] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  
  const [value, setValue] = useState('По умолчанию');
  const [descriptionInfo, setDescriptionInfo] = useState("");

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

  let content;
  if (activeTab === "description") {
    content = <Description descriptionInfo={descriptionInfo} infoUser={infoUser} />;
  } else if (activeTab === "proposals") {
    content = <ListUser 
      descriptionInfo={descriptionInfo} 
      value={value} 
      setValue={setValue} 
    />;
  }
  
  return (
    <div className="target">
      <div className="target-back">
        <div className="none-mt container">
          <p className="target-text">{descriptionInfo && descriptionInfo.order && descriptionInfo.order[0] && descriptionInfo.order[0].name}</p>
          <div className="target-text-unde">
            <button
              className={`target-text-under ${
                activeTab === "description" ? "active-description" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              {t('target.target-back-one')}
            </button>
            { descriptionInfo && descriptionInfo.order && descriptionInfo.order[0] && descriptionInfo.order[0].customer === -1 && descriptionInfo.order[0].status <= 1 ?
              <button
                className={`target-text-under ${
                  activeTab === "proposals" ? "active-description" : ""
                }`}
                onClick={() => setActiveTab("proposals")}
              >
                {t('target.target-back-two')}
              </button>
                :
                ""
            }
            
          </div>
        </div>
      </div>
      {content}
    </div>
  );
}

export default Target;