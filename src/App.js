import React, { useState } from 'react';
import { FaGoogle, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
};

const socialButtonVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
    },
  },
};

const SearchBar = ({ handleSearch, darkMode }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit}>
        <input
          className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-full px-5 py-3 w-96 focus:outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}
          type="text"
          placeholder="Buscar en Google o escribir una URL"
          value={searchValue}
          onChange={handleChange}
        />
        <motion.button
          className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-full px-5 py-3 ml-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}
          variants={buttonVariants}
          whileHover="hover"
          type="submit"
        >
          Buscar con Google
        </motion.button>
      </form>
    </div>
  );
};

const SocialButton = ({ icon, name, link, darkMode }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center border ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-700'} rounded-full w-12 h-12 m-2`}
      variants={socialButtonVariants}
      whileHover="hover"
    >
      {icon}
      <span className="sr-only">{name}</span>
    </motion.a>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = (searchValue) => {
    console.log(`Buscando por ${searchValue}`);
    // Implementar la funcionalidad de búsqueda aquí
  };

  return (
    <motion.div
      className={`flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-400 to-purple-500'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className={`text-blue-600 text-9xl mb-10 ${darkMode ? 'text-white' : 'text-gray-700'}`}
          variants={buttonVariants}
          whileHover="hover"
        >
          <FaGoogle />
        </motion.div>
        <motion.h1
          className={`font-bold text-gray-700 text-5xl mb-5 ${darkMode ? 'text-white' : ''}`}
          variants={buttonVariants}
          whileHover="hover"
        >
          Bienvenido a Google
        </motion.h1>
        <motion.p
          className={`font-medium text-gray-700 text-lg ${darkMode ? 'text-white' : ''}`}
          variants={buttonVariants}
          whileHover="hover"
        >
          Busca en la web o explora tus sitios favoritos
        </motion.p>
        <SearchBar handleSearch={handleSearch} darkMode={darkMode} />
        <div className="flex justify-center mt-5">
          <SocialButton
            icon={<FaTwitter />}
            name="Twitter"
            link="https://twitter.com/"
            darkMode={darkMode}
          />
          <SocialButton
            icon={<FaInstagram />}
            name="Instagram"
            link="https://www.instagram.com/deivid_gm25/"
            darkMode={darkMode}
          />
          <SocialButton
            icon={<FaFacebook />}
            name="Facebook"
            link="https://www.facebook.com/davicho.miranda.182/"
            darkMode={darkMode}
          />
        </div>
        <div className="flex justify-center mt-5">
          <motion.button
            className={`text-gray-700 font-medium mr-5 ${darkMode ? 'text-white' : ''}`}
            variants={buttonVariants}
            whileHover="hover"
          >
            Me siento con suerte
          </motion.button>
          <motion.button
            className={`text-gray-700 font-medium ${darkMode ? 'text-white' : ''}`}
            variants={buttonVariants}
            whileHover="hover"
            type="submit"
            onClick={() => handleSearch('')}
          >
            Buscar con Google
          </motion.button>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className={`flex items-center justify-center border ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-700'} rounded-full w-12 h-12 m-2 focus:outline-none`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            <span className="sr-only">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

