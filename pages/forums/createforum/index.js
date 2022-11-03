import Button from "../../../components/buttons/Button";
import { useState } from "react";
import { useRouter } from "next/router";


export default function CreateForum () {
  const [form, setForm] = useState({
    request_data: {
      title: "some clothing item",
      body: "I need some pants to match my outfit",
      search_tags: ["accessories"],
    },
    user_id: 1,
  });

  const createItem = async (form) => {
    await fetch("http://127.0.0.1:5000/forums", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(form),
    });
  };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem(form);
    router.push("/dashboard");
  };

  return (
    <div className="min-h-full flex items-center justify-center flex-col py-12 px-4 sm:px-6 lg:px-8 ">
      <header className="">
        <div className=" mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight font-bold text-gray-900 text-center">
            Create Forum Post
          </h1>
        </div>
      </header>
      <form onSubmit={handleSubmit} class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="project-title"
            >
              Title
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="project-title"
              type="text"
              placeholder="What are you looking for?"
            />
            {/* <p class="text-gray-600 text-xs italic">
            </p> */}
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Post
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="Text1"
              cols="40"
              rows="5"
              placeholder="describe more about what you are looking for
              (max 500 characters)"
              maxlength="500"
            ></textarea>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-client"
            >
              Search Tags
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="search-tags"
              type="text"
              placeholder="tags"
            />
          </div>
        </div>
        <Button type="submit">Post</Button>
      </form>
    </div>
  );
};


