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

const linksContent = [
  {
    linkName: "Twitter Link",
    id: "twitter",
    link: "https://twitter.com/JmaverickA?s=09",
  },
  {
    linkName: "Zuri Team",
    id: "btn__zuri",
    link: "https://training.zuri.team/",
  },
  {
    linkName: "Zuri Books",
    id: "books",
    link: "http://books.zuri.team/",
    title: "You'll fnd books about coding and designs here",
  },
  {
    linkName: "Python Books",
    id: "btn__python",
    link: "https://books.zuri.team/python-for-beginners?ref_id=JeremiahLateef",
    title:
      "Stuck in python? Purchase this book to help you understand the fundamentals of coding",
  },
  {
    linkName: "Background Check for Coders",
    id: "pitch",
    link: "https://background.zuri.team",
    title:
      "Worried about who you're hiring? Leave that to us, we'll help screen the best for your organization!",
  },
  {
    linkName: "Design Books",
    id: "book__design",
    link: "https://books.zuri.team/design-rules",
    title:
      "Download the free books to take your design skills to a higher level",
  },
];

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
          JeremiahLateef
        </h2>
      </div>
    </React.Fragment>
  );
};
const Links = (props) => {
  const { linkName, link, id, title } = props.links;
  return (
    <div className="links-header">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="links-btn"
        title={title}
        id={id}
      >
        {linkName}
      </a>
    </div>
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
        {linksContent.map((link) => {
          return <Links key={link.id} links={link} />;
        })}
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