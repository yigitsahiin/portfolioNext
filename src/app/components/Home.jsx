import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Image from 'next/image';
import myPhoto from "../img/myPhoto.jpg"

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, Im <span>Yiğit</span></h1>
        <h3 className="text-animation">
          Im a <span></span>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptas delectus sit, inventore itaque esse animi sequi, magnam tempore aliquam, voluptatum dicta dolorem iure error id veritatis obcaecati eveniet qui.</p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/yi%C4%9Fit-%C5%9Fahin-928476171/"><LinkedInIcon /></a>
          <a href="https://www.instagram.com/yigitsahiiinn/"><InstagramIcon /></a>
          <a href="https://github.com/yigitsahiin"><GitHubIcon /></a>
          <a href="#"><TwitterIcon /></a>
        </div>

        <a href="#" className="btn">
          HIRE <WorkOutlineIcon />
        </a>
      </div>
      <div className="home-img">
        <Image src={myPhoto} alt="Yiğit Şahin" layout="responsive" />
      </div>
    </section>
  );
}
