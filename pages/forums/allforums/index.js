import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PaginationBar from "../../../components/navigation/PaginationBar";
import SideNavbar from "../../../components/navigation/SideNav";

const AllForums = () => {
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
    <div className="min-h-full flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <header className="bg-white shadow">
        <div className=" mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight font-bold text-gray-900 text-center">
            Forums
          </h1>
        </div>
      </header>
      <div className="grid grid-cols-6">
        <div>
          <SideNavbar hassearchbar={true}/>
        </div>
        <div className="col-span-5 mx-4 flex flex-col justify-center items-center ">
          {Object.values(forum).map((value, index) => {
            return (
              <div className="bg-slate-50 my-4 p-6 bg-white rounded-xl shadow-lg flex flex-col  w-full">
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
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-1 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                      {value.created_timestamp}
                    </div>
                    <div class="px-6 pt-4 pb-2 ">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <PaginationBar />
    </div>
  );
};

export default AllForums;
