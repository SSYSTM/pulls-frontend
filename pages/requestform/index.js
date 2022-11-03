import { useState } from "react";
import DropDownList from "../../components/login/request-form/Dropdown";

export default function RequestForm() {
  const defaultformFields = {
    email: "",
    firstname: "",
    lastname: "",
    city: "",
    instagram: "",
    website: "",
  };
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, firstname, lastname, city, instagram, website } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5"></div>
      </div>

      <div className="mt-10 px-4 max-w-2xl ">
        <div className="">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 text-center">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Request An Account
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter your information to request an account
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2 ">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        onChange={handleChange}
                        name="firstname"
                        value={firstname}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        onChange={handleChange}
                        name="lastname"
                        value={lastname}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email-address"
                        autoComplete="email"
                        onChange={handleChange}
                        name="email"
                        value={email}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        required
                        onChange={handleChange}
                        name="city"
                        value={city}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="instagram"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Instagram
                      </label>
                      <input
                        type="text"
                        required
                        onChange={handleChange}
                        name="instagram"
                        value={instagram}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Website
                      </label>
                      <input
                        type="text"
                        required
                        onChange={handleChange}
                        name="website"
                        value={website}
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Request!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
}
