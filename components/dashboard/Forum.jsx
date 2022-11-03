import forumStyle from "./Forum.module.scss";
import Button from "../buttons/Button";
import { useState, useEffect } from "react";
import Link from "next/link";

const Forum = () => {
   const [forum, setForum] = useState("");

   useEffect(() => {
     // change userid
     fetch(`http://127.0.0.1:5000/forums?user_id=1`)
       .then((response) => response.json())
       .then((data) => {
         setForum(data.res.all_forums);
       });
   }, []);

  return (
    <div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <h2 className="text-center text-xl">
        Forum{" "}
        <Link href="forums/createforum">
          <svg
            className="cursor-pointer inline w-5"
            xmlns="http://www.w3.org/2000/svg"
            // className={forumStyle.plus}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </Link>
      </h2>
      {/* forum posts */}
      {Object.values(forum).map((value, index) => {
        return (
          <div className="bg-slate-50 my-4 p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4">
            {/* <div className="shrink-0">
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div> */}
            <div className="">
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="text-xl font-medium text-black inline-block">
                {value.title}
              </div>
              <p className="text-slate-500">{value.body}</p>
              <div className="px-4 py-1 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                {value.created_timestamp}
              </div>
            </div>
            <div class="px-6 pt-4 pb-2 flex flex-row">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        );
      })}

      <div className="flex justify-center mt-4">
        <Button>
          <Link href="/forums/allforums">See More</Link>
        </Button>
      </div>
    </div>
  );
};

export default Forum;
