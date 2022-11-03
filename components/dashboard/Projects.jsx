import projectsStyle from "./Projects.module.scss";
import Button from "../buttons/Button";
import { useEffect, useState } from "react";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState("");

  useEffect(() => {
    // change userid
    fetch(`http://127.0.0.1:5000/projects?user_id=1`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.res.all_user_projects);
      });
  }, []);
  // make a get request to projects

  console.log(projects);
  return (
    <div className="w-full py-4 pt-4 text-center flex justify-center flex-col ">
      <h2 className="text-xl">Projects</h2>

      <div className="mx-auto w-full max-w-md rounded-2xl p-2 ">
        {Object.values(projects).map((value, index) => {
          return (
            <div key={index}>
              <li>{value.client}</li>
            </div>
          );
        })}

        <Link href="/projectdashboard/prodash">Vogue Italia</Link>
      </div>
      <div className="flex space-x-4 justify-center bg-slate-50 p-10 mt-auto w-full">
        <Button>View All</Button>{" "}
        <Button>
          <Link href="/projects/createproject">New Project</Link>
        </Button>
        {/* create a form to post a new project */}
      </div>
    </div>
  );
};

export default Projects;
