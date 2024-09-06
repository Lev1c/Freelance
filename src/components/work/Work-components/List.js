import ListFilter from "./List-filter";
import ListTask from "./List-task";
import { useContext, useEffect, useState } from 'react'
import Search from "./Search";
import { getOrderList } from "../../../http/orderApi";
import { getCityByName, getTaskCategories } from "../../../http/userAPI";
import { useTranslation } from "react-i18next";
import { Context } from "../../..";


function List() {
    const { t } = useTranslation();
    const { user } = useContext(Context);
    const [activeFilter, setActiveFilter] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [work, setWork] = useState()
    const [counteriesPerPage] = useState(5)
    
    const [loading, setLoading] = useState(true)
   //Sorting
    const arOptions = t('work.list-task.sort', { returnObjects: true });
    const [value, setValue] = useState(1);
    // eslint-disable-next-line
    const [valueId, setValueId] = useState(0);


    const [minSearchPrice, setMinSearchPrice] = useState('')
    const [maxSearchPrice, setMaxSearchPrice] = useState('')

   //Поиск
    const [search, setSearch] = useState('' || String(user && (user._idCategory && user._idCategory.length) && user._idCategory))
    if (search === 'undefined') {
      setSearch('')
    }


    
    // list filter checkbox
    const [isProjectChecked, setIsProjectChecked] = useState(false);
    const [isVacancyChecked, setIsVacancyChecked] = useState(false);
    const [isCompetitionChecked, setIsCompetitionChecked] = useState(false);
    const [fixedPayment, setFixedPayment] = useState(false);
    const [hourlyPay, setHourlyPay] = useState(false);

    const [filterTypePlace, setFilterTypePlace] = useState('')
    
    const [city, setCity] = useState()
    const [cityId, setCityId] = useState()
    const [filterTypeOrder, setFilterTypeOrder] = useState()
    // eslint-disable-next-line
    const [filterCategory, setFilterCategory] = useState([])
    
    const [filterStartCost, setFilterStartCost] = useState()
    const [filterEndCost, setFilterEndCost] = useState()
    // eslint-disable-next-line
    const [filterFindKeyword, setFilterFindKeyword] = useState()
    // eslint-disable-next-line
    const [filterSort, setFilterSort] = useState()

    const [cityName, setCityName] = useState('');
    const [cityList, setCityList] = useState([]);
    const [status, setStatus] = useState(false);

    const [getTaskCategoriess, setGetTaskCategories] = useState()
    const [taskCategories, setTaskCategories] = useState([])
    
    const handleCheckboxChange = (value) => {
        if (taskCategories.includes(value)) {
          // Если значение уже присутствует в массиве, удаляем его
          const updatedFilterTypeOrder = taskCategories.filter((item) => item !== value);
          
          setTaskCategories(updatedFilterTypeOrder);
        } else {
          // Если значение отсутствует в массиве, добавляем его
          const updatedFilterTypeOrder = [...taskCategories, value];
          setTaskCategories(updatedFilterTypeOrder);
        }
        
    };
    
    
    useEffect(() => {
        getOrderList(filterTypePlace,filterTypeOrder,cityId,taskCategories,filterStartCost,filterEndCost,search,value)
        .then(data => setWork(data))
        .then(() => setLoading(false))
        // eslint-disable-next-line
    }, [filterTypePlace,filterTypeOrder,city,taskCategories,filterStartCost,filterEndCost,value,getTaskCategoriess])
    
    useEffect(() => {
      if (user && Number(user._idCategory) && !taskCategories.includes(user._idCategory)) {
          setTaskCategories(() => [user._idCategory]);
        }
        // eslint-disable-next-line
    }, [value, user])

    useEffect(() => {
      getTaskCategories().then(categories => setGetTaskCategories(categories))
    },[])

    const handleReset = () => {
      setFilterTypePlace('')
      setFilterTypeOrder()
      setCityId()
      setTaskCategories([])
      setFilterStartCost('')
      setFilterEndCost('')
      setFilterFindKeyword()
      setCityName('')
      setSearch('')
    }

    const hangleSearch = () => {
      getOrderList(filterTypePlace,filterTypeOrder,cityId,filterCategory,filterStartCost,filterEndCost,search,value)
      .then(data => setWork(data))
    }

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            hangleSearch();
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
          setCurrentPage(1)
      }, [
          minSearchPrice,
          maxSearchPrice,
          search,
          isProjectChecked,
          isVacancyChecked,
          isCompetitionChecked,
          fixedPayment,
          hourlyPay
      ]);
     
     
    
   //Sorting
    const options = arOptions.map((text) => {
      return <option key={text.id} value={text.id} onChange={(e) => setValueId(e.target.value)}>{text.name}</option>;
    });

    

    let listWork = work;

    const click = () => {
        setMinSearchPrice("");
        setMaxSearchPrice("");
        setIsProjectChecked(false);
        setIsVacancyChecked(false);
        setIsCompetitionChecked(false);
        setFixedPayment(false);
        setHourlyPay(false);
    };


    //время
   
    //search page

    const lastCountryIndex = currentPage * counteriesPerPage
    const firstCounrtyIndex = lastCountryIndex - counteriesPerPage

    //вывод страницы
    const currentWork = listWork && listWork.slice(firstCounrtyIndex, lastCountryIndex)

    



    // пагинация
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(listWork && (listWork.length / counteriesPerPage)); i++) {
        pageNumbers.push(i)
    }

    const paginate = pageNumbers => setCurrentPage(pageNumbers)

    let lastPage
    if (currentPage) {
        lastPage = currentPage + 2
    }

    let fisrtPage
    if (currentPage) {
       fisrtPage = currentPage - 3
       if (currentPage === 1 ) {
          fisrtPage = currentPage - 1
       }
       if (currentPage === 2) {
          fisrtPage = currentPage - 2
       }
    }
    
    let workList = pageNumbers.slice(fisrtPage, lastPage)

    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)

    let lastPageBlock = Math.ceil(listWork && (listWork.length / 5))
    
    return (
        <>
            <Search search={search} setSearch={setSearch} hangleSearch={hangleSearch} handleInputKeyDown={handleInputKeyDown}/>
            <div className="container">
                <div className="list">
                    <ListFilter
                        minSearchPrice={minSearchPrice}
                        setMinSearchPrice={setMinSearchPrice}
                        maxSearchPrice={maxSearchPrice}
                        setMaxSearchPrice={setMaxSearchPrice}
                        isProjectChecked={isProjectChecked}
                        setIsProjectChecked={setIsProjectChecked}
                        isVacancyChecked={isVacancyChecked}
                        setIsVacancyChecked={setIsVacancyChecked}
                        isCompetitionChecked={isCompetitionChecked}
                        setIsCompetitionChecked={setIsCompetitionChecked}
                        fixedPayment={fixedPayment}
                        setFixedPayment={setFixedPayment}
                        hourlyPay={hourlyPay}
                        setHourlyPay={setHourlyPay}
                        click={click}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        filterStartCost={filterStartCost}
                        setFilterStartCost={setFilterStartCost}
                        filterEndCost={filterEndCost}
                        setFilterEndCost={setFilterEndCost}
                        filterTypeOrder={filterTypeOrder}
                        setFilterTypeOrder={setFilterTypeOrder}
                        handleCheckboxChange={handleCheckboxChange}
                        setValueId={setValueId}
                        filterCategory={filterCategory}
                        city={city}
                        setCity={setCity}
                        cityId={cityId}
                        setCityId={setCityId}
                        cityList={cityList}
                        setCityList={setCityList}
                        setCityName={setCityName}
                        status={status}
                        cityName={cityName}
                        handleReset={handleReset}
                        getTaskCategoriess={getTaskCategoriess}
                        taskCategories={taskCategories}
                        setTaskCategories={setTaskCategories}
                    />
                    <ListTask
                        currentPage={currentPage}
                        options={options}
                        work={work} 
                        value={value} 
                        setValue={setValue} 
                        currentWork={currentWork}
                        paginate={paginate}
                        workList={workList}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        lastPageBlock={lastPageBlock}
                        listWork={listWork}
                        loading={loading}
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                        filterTypePlace={filterTypePlace}
                        filterTypeOrder={filterTypeOrder}
                        city={city}
                        filterCategory={filterCategory}
                        filterStartCost={filterStartCost}
                        filterEndCost={filterEndCost}
                        
                    />
                </div>
            </div>
        </>
    );
  }
  
  export default List;