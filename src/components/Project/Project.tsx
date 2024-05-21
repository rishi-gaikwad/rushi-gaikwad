import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

     

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://disney-hotstar-three.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Disney-Hotstar</h3>
              <p>
              Creating a clone of a platform like Disney+ Hotstar involves several components and functionalities. Here's a comprehensive project description for a Disney+ Hotstar clone.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React js</li>
                <li>Html</li>
                <li>Css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://search-git-hub-username.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Search-GitHub-Username </h3>
              <p>
                The GitHub Logo SVG project provides users with a scalable version of the GitHub logo in SVG format. It ensures clarity and consistency across digital platforms, allowing easy integration into websites, applications, and other projects. Accessible via GitHub's Brand Assets page, it offers versatility for customization while maintaining brand integrity. Future developments may include updates to the logo design and enhanced branding guidelines.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React js</li>
                <li>Html</li>
                <li>Tailwind Css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

         <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://react-todo-app-steel-alpha.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Todo App</h3>
              <p>
              The To-Do List Web Application provides users with a convenient way to manage their tasks and stay organized. By leveraging modern web technologies and best practices in software development, the application offers a reliable and efficient solution for task management.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Html</li>
                <li>Tailwind css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}