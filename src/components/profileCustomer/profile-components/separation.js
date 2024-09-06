import Main from "./main";
import Side from "./side";

import {observer} from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./comment";
import { viewCustomerProfile } from "../../../http/profileExecuterApi";
import { ClipLoader } from "react-spinners";

const Separation = observer(() => {
    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        viewCustomerProfile(id)
        .then(data => setUserProfile(data))
        .finally(() => setLoading(false))
    }, [id])
    // eslint-disable-next-line
    if (id == -1) {
      window.location.replace('/task')
    }
    
    const [userProfile, setUserProfile] = useState('')
    
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
              <Main userProfile={userProfile}/>
              <Side userProfile={userProfile}/>
            </div>
            <div className="block-profile">
              <div className="block-profile-portfolio">
                  <Comment userProfile={userProfile}/>
              </div>
            </div>
            
        </div>
      </div>
    );
  }
) 
export default Separation;