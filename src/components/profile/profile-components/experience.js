import { useContext, useState } from "react";
import { Context } from "../../..";
import {observer} from "mobx-react-lite";
import ModalExperienceModal from "./modalExperienceModal";
import { useTranslation } from 'react-i18next'

const Experience = observer((userProfile) => {
  const { t } = useTranslation();
  const {user} = useContext(Context)
  const [active, setActive] = useState(false)
  const arrayMonth = t('profile.education.monthNames', { returnObjects: true });
    return (
      <>
      {userProfile.userProfile.response.profile.executerStatus === 1 ?
      <div className="experience">
       <div className="profile-title">
          <span className="title">{t('profile.experience.title')}</span>

        </div>
        <div className="experience-profile">
          {user.isAuth && 
            userProfile.userProfile.response.executorExperience.length !== 0 ?
            <div>
              <div>
                {userProfile.userProfile.response.executorExperience.map(response => {
                      const startDate = response.startExperience;
                      const endDate = response.endExperience;

                      const formatMonth = (month) => {
                            const monthNames = arrayMonth;
                            const monthIndex = parseInt(month, 10) - 1;
                            return monthNames[monthIndex];
                          };
                        
                          const formatDateRange = (startDate, endDate) => {
                            const startParts = startDate.split('-');
                            const startMonth = formatMonth(startParts[1]);
                            const startYear = parseInt(startParts[0], 10);
                          
                            const endParts = endDate.split('-');
                            const endMonth = formatMonth(endParts[1]);
                            const endYear = parseInt(endParts[0], 10);
                          
                            const yearDiff = endYear - startYear;
                            const monthDiff = endParts[1] - startParts[1];
                          
                            let formattedDateRange = `${startMonth} ${startYear}`;
                          
                            if (yearDiff > 0 || monthDiff > 0) {
                              formattedDateRange += ` - ${endMonth} ${endYear}`;
                            
                              let durationString = '';
                            
                              if (yearDiff > 0) {
                                const yearString = `${yearDiff} ${declineYear(yearDiff)}`;
                                durationString += yearString;
                              
                                if (monthDiff > 0) {
                                  durationString += ' ';
                                }
                              }
                            
                              if (monthDiff > 0) {
                                const monthString = `${monthDiff} ${declineMonth(monthDiff)}`;
                                durationString += monthString;
                              }
                            
                              formattedDateRange += ` (${durationString})`;
                            }
                          
                            return formattedDateRange;
                          };
                        
                          const declineYear = (year) => {
                            if (year === 1) {
                              return t('specialists.list-spec.years.one')
                            } else if (year >= 2 && year <= 4) {
                              return t('specialists.list-spec.years.two');
                            } else {
                              return t('specialists.list-spec.years.three');
                            }
                          };
                        
                          const declineMonth = (month) => {
                            if (month === 1) {
                              return t('profile.education.month.one');
                            } else if (month >= 2 && month <= 4) {
                              return t('profile.education.month.two');
                            } else {
                              return t('profile.education.month.three');
                            }
                          };
                        
                          const formattedDateRange = formatDateRange(startDate, endDate);
                          
                    return (
                      <>
                        <div>
                          <div className="profile-title">
                            <span className="span-experience">{response.nameExperience}</span>
                          
                          </div>
                          <span className="under-education">{formattedDateRange}</span>
                        </div>
                        <span className="about-experience">{response.descriptionExperience}</span>
                       
                        
                      </>
                    )
                  })}
                
              </div>
            </div>
            :
            <span className="mt">{t('profile.education.text-two')}</span>
          }
        </div>
      </div>
      :
      <></>
      }
      
      <ModalExperienceModal active={active} setActive={setActive}/>
    </>
    );
  }
)
export default Experience;