import React from "react";
import ProfileImage from "./Images/profile1.jpg";

import SlackLogo from "./SVG/slack.svg";
import GitHubLogo from "./SVG/github-icon.svg";
import ZuriLogo from "./SVG/zuri-logo.svg";
import ShareMobile from "./SVG/share.svg";
import ShareDesktop from "./SVG/share-button.svg";
import IngressiveLogo from "./SVG/I4G.svg";
import Camera from "./SVG/camera.svg";
import "./App.css";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="image-cont">
        <img
          src={ProfileImage}
          alt="Adebiyi John"
          className="profile-image"
          id="profile__img"
        />
        <img src={Camera} alt="camera" className="camera-img" />
      </div>
      <div className="header">
        <h1 className="title-header username">Adebiyi John</h1>
        <h2 className="slack-title" id="slack">
          Adebiyi07
        </h2>
      </div>
    </React.Fragment>
  );
};

function App() {
  return (
    <section className="App">
      <div className="section-center">
        <div className="share-cont">
          <img src={ShareDesktop} alt="share button" className="share mobile" />
          <img src={ShareMobile} alt="share button" className="share desktop" />
        </div>

        <Profile />

        <div className="btns">
          <a href="https://twitter.com/JmaverickA?s=09">
            <button id="twitter">Twitter Link</button>
          </a>
          <a
            href="https://training.zuri.team/"
            target="_blank"
            rel="noreferrer"
          >
            <button id="btn__zuri">Zuri Team</button>
          </a>
          <a href=" http://books.zuri.team" target="_blank" rel="noreferrer">
            <button id="books">Zuri Books</button>
          </a>
          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=<Adebiyi07>"
            target="_blank"
            rel="noreferrer"
          >
            <button id="book__python">Python Books</button>
          </a>
          <a
            href=" https://background.zuri.team"
            target="_blank"
            rel="noreferrer"
          >
            <button id="pitch">Background Check For Coders</button>
          </a>
          <a
            href="https://books.zuri.team/design-rules"
            target="_blank"
            rel="noreferrer"
          >
            <button id="book__design">Design Books</button>
          </a>
        </div>

        <div className="icons-container">
          <div className="icon-cont">
            <img src={SlackLogo} alt="slack logo" className="logo" />
          </div>
          <div className="icon-cont">
            <img src={GitHubLogo} alt="GitHub logo" className="logo" />
          </div>
        </div>

        <footer className="footer">
          <div className="zuri-cont">
            <img src={ZuriLogo} alt="Zuri Internship Logo" className="zuri" />
          </div>
          <p className="footer-text">HNG Internship 9 Frontend Task</p>
          <div className="ing-cont">
            <img
              src={IngressiveLogo}
              alt="Ingressive for Good Logo"
              className="zuri"
            />
          </div>
        </footer>
      </div>
    </section>
  );
}

export default App;
