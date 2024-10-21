import { useState } from "react";
import ListFilter from "./List-filter";
import ListSpec from "./List-spec";
import { useEffect } from "react";
import Search from "./Search";
import { getExecutorList } from "../../../http/profileExecuterApi";
import { getCountry, getTaskCategories } from "../../../http/userAPI";
import { ClipLoader } from "react-spinners";

function List() {
    const [loading, setLoading] = useState(true)

    const [curentPage, setCurentPage] = useState(1)
    const [work, setWork] = useState()
    const [counteriesPerPage] = useState(6)

    const [online, setOnline] = useState(false)

    //Sorting
    const arOptions = ['По умолчанию', 'Самые дешевые', 'Самые дорогие'];
    const [value, setValue] = useState('По умолчанию');

    const [minSearchPrice, setMinSearchPrice] = useState('')
    const [maxSearchPrice, setMaxSearchPrice] = useState('')
    const [minSearchComment, setMinSearchComment] = useState('')
    const [maxSearchComment, setMaxSearchComment] = useState('')

    const [listCountry, setListCountry] = useState('')
    const [listRegion, setListRegion] = useState('')
    const [listCity, setListCity] = useState('')

    const [listCountryId, setListCountryId] = useState(0)
    const [listRegionId, setListRegionId] = useState(0)
    const [listCityId, setListCityId] = useState()

    const [country, setCountry] = useState('')
    const [countryId, setCountryId] = useState('')
    const [region, setRegion] = useState('')
    const [city, setCity] = useState('')
    //Поиск
    const [search, setSearch] = useState('')
    const [searchCounrty, setSearchCounrty] = useState('')

    const [activeFilter, setActiveFilter] = useState(false)

    const [filterSubCategory, setFilterSubCategory] = useState('')
    // eslint-disable-next-line
    const [filterCategory, setFilterCategory] = useState('')
    const [filterCountFeedbackStart, setFilterCountFeedbackStart] = useState()
    const [filterCountFeedbackEnd, setFilterCountFeedbackEnd] = useState()
    const [filterRate, setFilterRate] = useState('')

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
        getExecutorList(search, filterSubCategory, taskCategories,filterCountFeedbackStart,filterCountFeedbackEnd,filterRate,listCityId, online)
        .then(data => setWork(data))
        getCountry()
        .then(country => setListCountry(country))
        .then(() => setLoading(false))
    }, [search, filterSubCategory, taskCategories,filterCountFeedbackStart,filterCountFeedbackEnd,filterRate,listCityId, online])
    
    useEffect(() => {
      getTaskCategories().then(categories => setGetTaskCategories(categories))
    },[])
    
    const options = arOptions.map((text, index) => {
         return <option key={index}>{text}</option>;
    })
   
    let listWork = work
    
    
    useEffect(() => {
        setCurentPage(1)
    }, [minSearchPrice, maxSearchPrice, minSearchComment, maxSearchComment, search, searchCounrty])

    

    if (loading) {
      return (
        <div className="loader">
          <div className='block-loader'>
            <ClipLoader size={20} color={'#646464'}/>
          </div>
        </div>
      )
    }
    
    //сброс фильтов
    const handleReset = () => {
      setTaskCategories([])
      setFilterCountFeedbackStart('')
      setFilterCountFeedbackEnd('')
      setFilterRate('')
      setOnline(false)
    }
   
    //search page

    const lastCountryIndex = curentPage * counteriesPerPage
    const firstCounrtyIndex = lastCountryIndex - counteriesPerPage
   
    //вывод страницы
    const currentCounrty = listWork && listWork.slice(firstCounrtyIndex, lastCountryIndex)


    // пагинация
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(listWork && (listWork.length / counteriesPerPage)); i++) {
        pageNumbers.push(i)
    }

    const paginate = pageNumbers => setCurentPage(pageNumbers)

    let lastPage
    if (curentPage) {
        lastPage = curentPage + 2
    }

    let fisrtPage
    if (curentPage) {
       fisrtPage = curentPage - 3
       if (curentPage === 1 ) {
          fisrtPage = curentPage - 1
       }
       if (curentPage === 2) {
          fisrtPage = curentPage - 2
       }
    }
    
    let workList = pageNumbers.slice(fisrtPage, lastPage)

    const nextPage = () => setCurentPage(prev => prev + 1)
    const prevPage = () => setCurentPage(prev => prev - 1)

    let lastPageBlock = Math.ceil(listWork &&( listWork.length / 6))


    let listC = [...listCountry]
    listC = listC.filter((item) => {
      if (country && ! item.name.toLowerCase().includes(country.toLowerCase())) {
        return false;
      }
      return true
    })

    let listR
    if (listRegion) {
      listR = [...listRegion]
    } else {
      listR = [listRegion]
    }
    listR = listR.filter((item) => {
      if (region && ! item.name.toLowerCase().includes(region.toLowerCase())) {
        return false;
      }
      return true
    })

    let listCit

    if (listCity) {
      listCit = [...listCity]
    } else {
      listCit = [listCity]
    }
    listCit = listCit.filter((item) => {
      if (city && ! item.name.toLowerCase().includes(city.toLowerCase())) {
        return false;
      }
      return true
    })

    return (
    <>
    <Search search={search} setSearch={setSearch}/>
        <div className="container">
            <div className="list">
                <ListFilter
                    minSearchPrice={minSearchPrice}
                    setMinSearchPrice={setMinSearchPrice} 
                    maxSearchPrice={maxSearchPrice}
                    setMaxSearchPrice={setMaxSearchPrice}
                    minSearchComment={minSearchComment}
                    setMinSearchComment={setMinSearchComment}
                    maxSearchComment={maxSearchComment}
                    setMaxSearchComment={setMaxSearchComment}
                    searchCounrty={searchCounrty}
                    setSearchCounrty={setSearchCounrty}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    country={country}
                    setCountry={setCountry}
                    region={region}
                    setRegion={setRegion}
                    city={city}
                    setCity={setCity}
                    listC={listC}
                    listR={listR}
                    listCit={listCit}
                    setCountryId={setCountryId}
                    countryId={countryId}
                    setListRegion={setListRegion}
                    listRegion={listRegion}
                    listCity={listCity}
                    setListCity={setListCity}
                    listCountryId={listCountryId}
                    setListCountryId={setListCountryId}
                    listRegionId={listRegionId}
                    setListRegionId={setListRegionId}
                    listCityId={listCityId}
                    setListCityId={setListCityId}
                    setWork={setWork}
                    online={online}
                    setOnline={setOnline}
                    filterCountFeedbackStart={filterCountFeedbackStart}
                    filterCountFeedbackEnd={filterCountFeedbackEnd}
                    setFilterCountFeedbackStart={setFilterCountFeedbackStart}
                    setFilterCountFeedbackEnd={setFilterCountFeedbackEnd}
                    setFilterRate={setFilterRate}
                    filterRate={filterRate}
                    setFilterSubCategory={setFilterSubCategory}
                    getTaskCategoriess={getTaskCategoriess}
                    taskCategories={taskCategories}
                    setTaskCategories={setTaskCategories}
                    handleCheckboxChange={handleCheckboxChange}
                    handleReset={handleReset}
                />
                <ListSpec
                    curentPage={curentPage}
                    options={options}
                    work={work} 
                    value={value} 
                    setValue={setValue} 
                    currentCounrty={currentCounrty}
                    paginate={paginate}
                    workList={workList}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    lastPageBlock={lastPageBlock}
                    listWork={listWork}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
            </div>
        </div>
        
    </>
    );
  }
  
  export default List;