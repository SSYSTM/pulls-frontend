import Button from "../../../components/buttons/Button";
import { useState } from "react";

const Projects = () => {
     const [form, setForm] = useState({
       request_data: {
         name: "another thing",
         client: "me",
         production_date: " Oct 5th 2020",
         description: "This is my 3rd project",
         connected_user_contacts: [1, 2, 3],
         connected_press_contacts: [1, 2, 3],
       },
       user_id: 1,
     });
     
       const createItem = async (form) => {
         await fetch("http://127.0.0.1:5000/projects", {
           method: "POST",
           headers: { "Content-Type": "Application/json" },
           body: JSON.stringify(form),
         });
       };

       const handleChange = (e) => {
         setForm({ ...form, [e.target.name]: e.target.value });
       };

       const handleSubmit = (e) => {
         e.preventDefault();
         createItem(form);
         alert('project created')
       };

  return (
    <div className="min-h-full flex items-center justify-center flex-col py-12 px-4 sm:px-6 lg:px-8 ">
      <form onSubmit={handleSubmit}  class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="project-name"
            >
              Project Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="project-name"
              type="text"
              placeholder="Name Your Project"
            />
            <p class="text-gray-600 text-xs italic">
              **this will also be the subject to your email
            </p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-client"
            >
              Client
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-client"
              type="text"
              placeholder="Client Name"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="project-window"
            >
              Project Window{" "}
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="project-window"
              type="text"
              placeholder="Project Window"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              About
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="Text1"
              cols="40"
              rows="5"
              placeholder="describe what this project is about"
            ></textarea>
          </div>
        </div>
        <Button type="submit">Post</Button>
      </form>
    </div>
  );
};

export default Projects;
