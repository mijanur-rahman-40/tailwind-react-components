import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return <React.Fragment>
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-bold text-xl">Biznet</span>
      </div>

      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <Link
            to="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-cyan-300 hover:text-sky-500 mr-4"
          >
            Your Business
          </Link>
          <Link
            to="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-cyan-200 hover:text-white mr-4"
          >
            Networking
          </Link>
          <Link
            to="#"
            className="block mt-4 sm:inline-block sm:mt-0 text-cyan-200 hover:text-white"
          >
            Blog
          </Link>
        </div>
        <div>
          <Link
            to="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-500  border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
          >Login
          </Link>
        </div>
      </div>
    </nav>

    <div className="container mt-5 mx-auto px-2">
      {/* <!-- BUTTON COMPONENT --> */}
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
      >
        Find Friends
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 ml-2 rounded"
      >
        Find Groups
      </button>
      {/* <!-- ALERT COMPONENT --> */}
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5"
        role="alert"
      >
        <strong className="font-bold">Alert!</strong>
        <span className="block sm:inline">Please update your password</span>
      </div>
    </div>

    {/* <!--CARD COMPONENT-- > */}
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div className="flex-shrink-0">
        <img src="https://avatars.githubusercontent.com/u/49589030?s=400&u=ef8467f81464f0a68719c2962cd0a412794e5153&v=4" alt="" className="h-12 w-12 rounded-full" />
      </div>
      <div className="ml-6">
        <h4 className="text-xl text-gray-900">Mijanur Rahman</h4>
        <p className="text-base text-gray-600">You have a new message!</p>
      </div>
    </div>

    {/* <!--CARD COLUMNS-- > */}
    <div className="container mt-5 mx-auto px-2">
      {/* <!-- Flex on med screens and up --> */}
      <div className="md:flex">
        <div
          className="flex-1 text-gray-700 text-center bg-gray-100 px-5 py-5 m-2 rounded"
        >
          <div className="lg:flex lg:items-center">
            <div className="lg:flex-shrink-0">
              <img className="rounded-lg lg:w-64" src="https://i.ibb.co/mJJNkTJ/img2.jpg" alt="" />
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-6">
              <div
                className="uppercase tracking-wide text-sm text-indigo-600 font-bold"
              >
                Networking
              </div>
              <Link
                to="#"
                className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
              >Finding connections to help your business grow
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex-1 text-gray-700 text-center bg-gray-100 px-5 py-5 m-2 rounded"
        >
          <div className="lg:flex lg:items-center">
            <div className="lg:flex-shrink-0">
              <img className="rounded-lg lg:w-64" src="https://i.ibb.co/w4wGYvQ/img1.jpg
" alt="" />
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-6">
              <div
                className="uppercase tracking-wide text-sm text-indigo-600 font-bold"
              >
                Marketing
              </div>
              <Link
                to="#"
                className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
              >Finding customers for your new business
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
}

export default App;