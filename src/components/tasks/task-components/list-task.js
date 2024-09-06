import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next'

const ListTask = ({ work, activeFilter, setActiveFilter, role, handleButtonClick, selectedValue, selectedValueTwo, handleButtonClickTwo }) => {
  const { t } = useTranslation();
  // eslint-disable-next-line
  let task = work.order.filter(res => {return(res)})
  const filterTasks = (task) => {
    // eslint-disable-next-line
    if (selectedValue === 'all') {
      // eslint-disable-next-line
      return role === 'executor' ? task.customer == -1 : true;
    }
    if (selectedValue === 'published') {
      // eslint-disable-next-line
      return role === 'executor' ? (task.customer == -1 && (task.status == 1 || task.status == 2 || task.status == 3)) : true
    }
    if (selectedValue === 'completed') {
      // eslint-disable-next-line
      return role === 'executor' ? (task.customer == -1 && task.status == 4) : true
    }
    if (selectedValue === 'archive') {
      // eslint-disable-next-line
      return role === 'executor' ? (task.customer == -1 && task.status == 0) : true
    }
    if (selectedValue === 'disputes') {
      // eslint-disable-next-line
      return role === 'executor' ? (task.customer == -1 && task.status == 5) : true
    }
    return true;
  };

  const filterTasksTwo = (task) => {
    if (selectedValueTwo === 'all') {
      // eslint-disable-next-line
      return role === 'customer' ? task.executor == -1 : true;
    }
    if (selectedValueTwo === 'published') {
      // eslint-disable-next-line
      return  role === 'customer' ? (task.executor == -1 && (task.status == 1 || task.status == 2 || task.status == 3)) : true
    }
    if (selectedValueTwo === 'canceled') {
      // eslint-disable-next-line
      return role === 'customer' ? (task.executor == -1 && task.status == 4) : true
    }
    if (selectedValueTwo === 'disputes') {
      // eslint-disable-next-line
      return role === 'customer' ? (task.executor == -1 && task.status == 5) : true
    }
    return true;
  };

  return (
    <div className='main-list-task'>
      <div className='list-task-ul'>
        <ul className='ul-side-list-task'>
          {role === 'executor' ? (
            <>
              <li className={`list-side-list-task ${selectedValue === 'all' ? 'list-task-pag' : ''}`}>
                <button onClick={() => handleButtonClick('all')}>{t('task.list.text-one')}</button>
              </li>
              <li className={`list-side-list-task ${selectedValue === 'published' ? 'list-task-pag' : ''}`}>
                <button onClick={() => handleButtonClick('published')}>{t('task.list.text-two')}</button>
              </li>
              <li className={`list-side-list-task ${selectedValue === 'completed' ? 'list-task-pag' : ''}`}>
                <button onClick={() => handleButtonClick('completed')}>{t('task.list.text-three')}</button>
              </li>
              <li className={`list-side-list-task ${selectedValue === 'archive' ? 'list-task-pag' : ''}`}>
                <button onClick={() => handleButtonClick('archive')}>{t('task.list.text-fo')}</button>
              </li>
              <li className={`list-side-list-task ${selectedValue === 'disputes' ? 'list-task-pag' : ''}`}>
                <button onClick={() => handleButtonClick('disputes')}>{t('task.list.text-five')}</button>
              </li>
            </>
          ) : (
            <>
              <li className={`list-side-list-task ${selectedValueTwo === 'all' ? 'list-task-pag' : ''}`}>
                <button onClick={() => handleButtonClickTwo('all')}>{t('task.list.text-one')}</button>
              </li>
              <li className={`list-side-list-task ${selectedValueTwo === 'published' ? 'list-task-pag' : ''}`}>
                <button onClick={() => handleButtonClickTwo('published')}>{t('task.list.text-six')}</button>
              </li>
              <li className={`list-side-list-task ${selectedValueTwo === 'canceled' ? 'list-task-pag' : ''}`}>
                <button onClick={() => handleButtonClickTwo('canceled')}>{t('task.list.text-seven')}</button>
              </li>
              <li className={`list-side-list-task ${selectedValueTwo === 'disputes' ? 'list-task-pag' : ''}`}>
                <button onClick={() => handleButtonClickTwo('disputes')}>{t('task.list.text-five')}</button>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className='list-task'>
        <div className='history-pagination'></div>

        {role === 'customer' ?
          work.order &&
          work.order
            .filter(filterTasksTwo)
            .map(response => (
              <Link to={'/target/' + response.orderId} key={response.orderId} className='link-list-task'>
                <div className='list-task-card'>

                  <div className='list-task-info'>
                    <h2>{response.name}</h2>
                    <span>{response.format}</span>
                  </div>
                  <div className='list-task-card-info'>
                    <span>{response.startCost > 0 && response.endCost > 0 &&
                            <>
                                <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                                <span className=''>-</span>
                                <span className='block-list-task-text-price mr'>{response.endCost}₸</span>
                            </>
                        }
                        {response.startCost > 0 && response.endCost <= 0 &&
                            <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                        }
                        {response.endCost > 0 && response.startCost <= 0 &&
                            <span className='block-list-task-text-price mr'>{response.endCost}₸</span>
                        }
                        {// eslint-disable-next-line
                        response.endCost == 0 && response.startCost == 0 &&
                            <span className='block-list-task-text-price mr'>{response.startCost}₸</span>
                        }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 0 && <>{t('task.list.text-info-one')}</>
                      }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 1 && <>{t('task.list.text-info-two')}</>
                      }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 2 && <>{t('task.list.text-info-three')}</>
                      }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 3 && <>{t('task.list.text-info-fo')}</>
                      }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 4 && <>{t('task.list.text-info-five')}</>
                      }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 5 && <>{t('task.list.text-info-six')}</>
                      }
                    </span>
                  </div>
                </div>
              </Link>
            ))
        :
          work.order &&
          work.order
            .filter(filterTasks)
            .map(response => (
              <Link to={'/target/' + response.orderId} key={response.orderId} className='link-list-task'>
                <div className='list-task-card'>
                  
                  <div className='list-task-info'>
                    <h2>{response.name}</h2>
                    <span>{response.format}</span>
                  </div>
                  <div className='list-task-card-info'>
                    <span>{response.startCost > 0 && response.endCost > 0 &&
                            <>
                                <span className='block-list-task-text-price'>{response.startCost}₸</span>
                                <span className=''>-</span>
                                <span className='block-list-task-text-price'>{response.endCost}₸</span>
                            </>
                        }
                        {response.startCost > 0 && response.endCost <= 0 &&
                            <span className='block-list-task-text-price'>{response.startCost}₸</span>
                        }
                        {response.endCost > 0 && response.startCost <= 0 &&
                            <span className='block-list-task-text-price'>{response.endCost}₸</span>
                        }
                        {// eslint-disable-next-line
                        response.endCost == 0 && response.startCost == 0 &&
                            <span className='block-list-task-text-price'>{response.startCost}₸</span>
                        }
                      </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 0 && <>{t('task.list.text-info-one')}</>
                      }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 1 && <>{t('task.list.text-info-two')}</>
                      }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 2 && <>{t('task.list.text-info-three')}</>
                      }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 3 && <>{t('task.list.text-info-fo')}</>
                      }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 4 && <>{t('task.list.text-info-five')}</>
                      }
                    </span>
                    <span className='under-text-info-list'>
                      {// eslint-disable-next-line
                        response.status == 5 && <>{t('task.list.text-info-six')}</>
                      }
                    </span>
                  </div>
                </div>
              </Link>
            ))
        }
        
      </div>
    </div>
  );
};

export default ListTask;