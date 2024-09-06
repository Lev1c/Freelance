import { useEffect, useState } from "react";
import EditProfileExecutor from "./editProfileExecutor";
import { getExecutorProfile } from "../../../http/profileApi";
import { ClipLoader } from "react-spinners";

function MainEditExecutor() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getExecutorProfile()
        .then(data => setUserProfile(data))
        .finally(() => setLoading(false))
    }, [])
    
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
      <div className="Work">
        <EditProfileExecutor userProfile={userProfile}/>
      </div>
    );
  }
  
  export default MainEditExecutor;