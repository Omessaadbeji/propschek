import "./App.css";
import { HandleName } from "./HandleName";
import Profile from "./profile/Profile.js";
import myImage from "./profile/profile.png";
import ProfilePhoto from "./profile/ProfilePhoto";
function App() {
  const profileInfo = {
    fullName: "Omessaad ELBEJI",
    image: <img src={myImage} alt="profile" />,
    Bio: "I'm an electrical engineerin, I'm passionate with web developpement",
    Profession: "Ingeneer",
  };
  const handleName = (e) => {
    e.preventDefault();
    alert(`${profileInfo.fullName}`);
  };
  return (
    <>
      <div className="carte">
        <ProfilePhoto style={{}}>{profileInfo.image}</ProfilePhoto>
        <Profile
          fullName={profileInfo.fullName}
          bio={profileInfo.Bio}
          profession={profileInfo.Profession}
        />
      </div>
      <HandleName handleName={handleName} />
    </>
  );
}

export default App;
