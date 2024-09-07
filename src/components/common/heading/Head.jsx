import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
const Heading = () => {
  return (
    <div>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>HA.Learning</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>
          <div className="social">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon"/>
            <FaYoutube className="icon" />
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heading;
