import { SocialIcon } from "react-social-icons";
import '../../Styles/HomePageStyles/SocialMediaStyle.css'


const socialMedia = [
  {
    id: 1,
    name: "FACEBOOK",
    icon: <SocialIcon url="https://www.facebook.com/scsconcordia" />,
  },
  {
    id: 2,
    name: "INSTAGRAM",
    icon: <SocialIcon url="https://www.instagram.com/scs.concordia/" />,
  },
  {
    id: 3,
    name: "LINKEDIN",
    icon: <SocialIcon url="https://www.linkedin.com/company/scs-concordia/" />,
  },
  {
    id: 4,
    name: "DISCORD",
    icon: <SocialIcon url="https://discord.gg/kERagW3G" />,
  },
];

const SocialMediaArray = () => {
  return (
    <div className="SocialMediaContainer">
      {socialMedia.map((social) => {
        return (
          <div key={social.id} className="SocialMediaCard">
            <div className="SocialMediaName">{social.name}</div>
            <div className="SocialMediaIcon">{social.icon}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMediaArray;
