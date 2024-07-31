import Image from 'next/image';
import projectImage from "../img/sergey.jpg"

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects-container">
        <div className="projects-box">
          <Image src={projectImage} alt="Project Image" layout="responsive" />
          <div className="projects-info">
            <h4>Analyst Projects</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde odit id quaerat sequi odio ipsam labore facilis beatae sit, quis magni, facere fugiat obcaecati? Perferendis ab deleniti possimus earum!</p>
          </div>
        </div>
        <div className="projects-box">
          <Image src={projectImage} alt="Project Image" layout="responsive" />
          <div className="projects-info">
            <h4>Project 2</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde odit id quaerat sequi odio ipsam labore facilis beatae sit, quis magni, facere fugiat obcaecati? Perferendis ab deleniti possimus earum!</p>
          </div>
        </div>
        <div className="projects-box">
          <Image src={projectImage} alt="Project Image" layout="responsive" />
          <div className="projects-info">
            <h4>Project 3</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde odit id quaerat sequi odio ipsam labore facilis beatae sit, quis magni, facere fugiat obcaecati? Perferendis ab deleniti possimus earum!</p>
          </div>
        </div>
        <div className="projects-box">
          <Image src={projectImage} alt="Project Image" layout="responsive" />
          <div className="projects-info">
            <h4>Project 4</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde odit id quaerat sequi odio ipsam labore facilis beatae sit, quis magni, facere fugiat obcaecati? Perferendis ab deleniti possimus earum!</p>
          </div>
        </div>
        <div className="projects-box">
          <Image src={projectImage} alt="Project Image" layout="responsive" />
          <div className="projects-info">
            <h4>Project 5</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde odit id quaerat sequi odio ipsam labore facilis beatae sit, quis magni, facere fugiat obcaecati? Perferendis ab deleniti possimus earum!</p>
          </div>
        </div>
        <div className="projects-box">
          <Image src={projectImage} alt="Project Image" layout="responsive" />
          <div className="projects-info">
            <h4>Project 6</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde odit id quaerat sequi odio ipsam labore facilis beatae sit, quis magni, facere fugiat obcaecati? Perferendis ab deleniti possimus earum!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
