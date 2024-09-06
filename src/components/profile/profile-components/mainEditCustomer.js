import { useEffect, useState } from "react";
import { getCustomerProfile } from "../../../http/profileApi";
import EditProfileCustomer from "./editProfileCustomer";
import { ClipLoader } from "react-spinners";

function MainEditCustomer() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCustomerProfile()
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
        <EditProfileCustomer userProfile={userProfile}/>
      </div>
    );
  }
  
  export default MainEditCustomer;