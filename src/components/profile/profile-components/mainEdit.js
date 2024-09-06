import { useEffect, useState } from "react";
import { getExecutorProfile } from "../../../http/profileApi";
import EditProfile from "./editProfile";
import { ClipLoader } from "react-spinners";

function MainEdit() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getExecutorProfile()
        .then(data => setUserProfile(data))
        .finally(() => setLoading(false))
    }, [])
    
    const [userProfile, setUserProfile] = useState('')
    if(userProfile && userProfile === 403) {
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
    return (
      <div className="Work">
        <EditProfile userProfile={userProfile}/>
      </div>
    );
  }
  
  export default MainEdit;