import React from "react";
import PropTypes from "prop-types";
export default function Profile({ fullName, bio, profession }) {
  return (
    <div className="prof">
      <div style={{ display: "flex" }}>
        <h1 style={{ color: "white" }}>FullName:</h1>
        <h2>{fullName}</h2>
      </div>
      <div style={{ display: "flex" }}>
        <h1 style={{ color: "white" }}>Bio:</h1>
        <h2>{bio}</h2>
      </div>
      <div style={{ display: "flex" }}>
        <h1 style={{ color: "white" }}>Profession :</h1>
        <h2>{profession}</h2>
      </div>
    </div>
  );
}
Profile.defaultProps = {
  fullName: "Omessaad ",
  bio: "I'm Ingeneer & web developper ",
  profession: "GOmyCode Stuedent",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
