import Separation from "./profile-components/separation";
import {observer} from "mobx-react-lite";

const Profile = observer((data) => {
    
    return (
      <div className="profile">
          <Separation/>
      </div>
    );
  }
)
export default Profile;