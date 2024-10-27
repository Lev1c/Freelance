import Main from "./main";
import Side from "./side";

import {observer} from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Portfolio from "./portfolio";
import Experience from "./experience";
import Education from "./education";
import Comment from "./comment";
import { viewExecutorProfile } from "../../../http/profileExecuterApi";
import { getTaskCategories } from "../../../http/userAPI";
import { ClipLoader } from "react-spinners";

const Separation = observer(() => {
    const {id} = useParams()
    const [loading, setLoading] = useState(true);
    const [taskCategories, setTaskCategories] = useState([]);
    const [userProfile, setUserProfile] = useState('');
    const [matchedService, setMatchedService] = useState(null);

    useEffect(() => {
      viewExecutorProfile(id)
        .then(data => setUserProfile(data))
        .finally(() => setLoading(false));
    }, [id]);

    useEffect(() => {
      getTaskCategories()
        .then((data) => setTaskCategories(data));
    }, []);

    if (userProfile && userProfile === 403) {
      window.location.replace('/');
    }

    useEffect(() => {
      if (!loading && userProfile && taskCategories.length > 0) {
        const categoryId = userProfile.response.executorProfile.category;
        const matched = taskCategories.find(service => service.id === categoryId);
        setMatchedService(matched);
      }
    }, [loading, userProfile, taskCategories]);

    console.log(matchedService);

    if (loading) {
      return (
        <div className="loader">
          <div className='block-loader'>
            <ClipLoader size={20} color={'#646464'}/>
          </div>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="separation">
            <div className="main-profile">
              <Main userProfile={userProfile} matchedService={matchedService}/>
              <Side userProfile={userProfile}/>
            </div>
            <div className="block-profile">
              <div className="block-profile-portfolio">
                  <Portfolio userProfile={userProfile}/>
              </div>
              <div className="block-profile-comment">
                  <Comment userProfile={userProfile}/>
              </div>
              <div className="block-profile-experience">
                  <Experience userProfile={userProfile}/>
              </div>
              <div className="block-profile-education">
                  <Education userProfile={userProfile}/>
              </div>
            </div>
            
        </div>
      </div>
    );
  }
) 
export default Separation;