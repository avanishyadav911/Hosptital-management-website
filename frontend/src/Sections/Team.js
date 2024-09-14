import "../index.css";
import { BsGithub, BsLinkedin, BsLink45Deg } from "react-icons/bs";
import satish from "../Assets/satish.jpg";
import arnav from "../Assets/arnav.jpg";
import avanish from "../Assets/avanish.jpg";
import NavBars from "./navbar";
import Footer from "./footer";

function Team() {
  return (
    <div>
      <NavBars />
      <section className="section-area section-sp3 team-wraper">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-secondary">Our Team</h6>
            <h2 className="title">Meet the creators</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member active">
                <div className="team-media">
                  <img src={arnav} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Arnav Saxena</h4>
                    <span className="text-secondary">MERN</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://github.com/ScripticArnav"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/arnav-saxena-170116233/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/ScripticArnav"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member active">
                <div className="team-media">
                  <img src={avanish} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Avanish Yadav</h4>
                    <span className="text-secondary">MERN</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a
                        href="https://github.com/avanishyadav911"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/avanishyadav911"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/avanish-yadav-5a6b1821a/"
                        target="_blank"
                      >
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              <div className="team-member">
                <div className="team-media">
                  <img src={satish} alt="img" />
                </div>
                <div className="team-info">
                  <div className="team-info-comntent">
                    <h4 className="title">Satish Chaurasia</h4>
                    <span className="text-secondary">MERN</span>
                  </div>
                  <ul className="social-media">
                    <li>
                      <a href="https://github.com/SalmanAjani" target="_blank">
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/salmanajani26/"
                        target="_blank"
                      >
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://salmanajani.github.io/" target="_blank">
                        <BsLink45Deg />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Team;
