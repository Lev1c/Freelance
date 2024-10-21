import {useEffect, useState } from "react";
import ListTask from "./list-task";
import Search from "./search";
import { getMyOrders } from "../../../http/orderApi";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Main = () => {
    
  const [work,setWork] = useState();

  const [search, setSearch] = useState('');
  const [role, setRole] = useState('executor');

  const [activeFilter, setActiveFilter] = useState(false)

  const [selectedValue, setSelectedValue] = useState('all');
  const [selectedValueTwo, setSelectedValueTwo] = useState('all');

  const handleButtonClick = (value) => {
    setSelectedValueTwo('all')
    setSelectedValue(value);
  };

  const handleButtonClickTwo = (value) => {
    setSelectedValue('all')
    setSelectedValueTwo(value);
  };
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getMyOrders().then(data => setWork(data))
    .finally(() => setLoading(false))
  },[])

  if (work && work === 403) {
      window.location.replace('/');
  }

  let infoUser = JSON.parse(localStorage.getItem('info'))

  if (infoUser && infoUser.systemRole > 1) {
    window.location.replace('/');
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

  const handleExecutorClick = () => {
    setRole('executor');
  };
  
  const handleCustomerClick = () => {
    setRole('customer');
  };
  
    return (
      <div className="">
          <Search 
            search={search} 
            setSearch={setSearch}
            role={role}
            handleExecutorClick={handleExecutorClick}
            handleCustomerClick={handleCustomerClick}
          />
          <div className="container">
            <div className="container-chat">
              <ListTask 
                work={work} 
                activeFilter={activeFilter} 
                setActiveFilter={setActiveFilter} 
                role={role} 
                selectedValue={selectedValue} 
                handleButtonClick={handleButtonClick}
                selectedValueTwo={selectedValueTwo} 
                handleButtonClickTwo={handleButtonClickTwo}
              />
               <div className="filter-block">
                      <Link className="link-task " to={infoUser.customerStatus === 0 ? "/profile/verification/customer" : '/create'}>
                        {t('header.create')}
                        </Link>
               </div>
            </div>
          </div>
      </div>
    );
}
export default Main;