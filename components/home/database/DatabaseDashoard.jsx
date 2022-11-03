/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import dashStyle from "./DatabaseDashboard.module.scss";
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "Womens", label: "Womens", checked: false },
      { value: "Mens", label: "Mens", checked: false },
      { value: "Accessories", label: "Accessories", checked: false },
      { value: "Shoes", label: "Shoes", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DatabaseDashoard() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white ">
      <header className="bg-white shadow">
        <div className=" mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight font-bold text-gray-900 text-center">
            Database
          </h1>
        </div>
      </header>

      {filters.map((section) => (
        <Disclosure
          as="div"
          key={section.id}
          className="border-t border-gray-200 px-2 py-6  border border-gray-900"
        >
          <>
            <div className=" text-lg flex items-center">
              {section.options.map((option, optionIdx) => (
                <div class="">
                  <div>
                    <div class="form-check">
                      <input
                        id={`filter-mobile-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="form-check-input appearance-none h-4 w-4 border border-gray-900 rounded-sm bg-white checked:bg-blue-600 checked:border-black-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer mx-4"
                        value=""
                      />
                      <label
                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                        className="ml-3 min-w-0 flex-1 text-gray-500"
                      >
                        {option.label}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* bkj,b */}
          </>
        </Disclosure>
      ))}

      <div className="grid grid-cols-6">
        <div className="col-span-5 ml-10 ">
          <div
            data-bs-spy="scroll"
            data-bs-target="#scrollspy1"
            data-bs-offset="200"
            className={dashStyle.example}
          >
            <section id="example-1">
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-4 border-gray-200">
                <dt className="text-sm font-medium text-gray-500">
                  logo image
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Name of brand
                </dd>
              </div>
            </section>
            <section id="example-2">
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-4 border-gray-200">
                <dt className="text-sm font-medium text-gray-500">
                  logo image
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Name of brand
                </dd>
              </div>
            </section>
            <section id="example-2">
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  logo image
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Name of brand
                </dd>
              </div>
            </section>
            <section id="example-2">
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  logo image
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Name of brand
                </dd>
              </div>
            </section>
            <section id="example-2">
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  logo image
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Name of brand
                </dd>
              </div>
            </section>
            <section id="example-2">
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  logo image
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Name of brand
                </dd>
              </div>
            </section>{" "}
            <section id="example-2">
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  logo image
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  Name of brand
                </dd>
              </div>
            </section>
          </div>
        </div>

        <div>
          <div id="scrollspy1" class="sticky-top pl-3 text-sm">
            <ul className="nav nav-pills menu-sidebar max-w-min">
              {alphabet.map((x) => (
                <li className="py-1">
                  <a className="nav-link" href='#${x}'>
                    {x}
                  </a>
                </li>
              ))}

          
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
