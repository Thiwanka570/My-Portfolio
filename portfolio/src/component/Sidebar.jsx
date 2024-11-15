import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
  <div
    className={`fixed md:inset-y-0 md:left-0 bottom-0 w-full md:w-auto flex flex-col 
      items-center justify-center p-4 text-white z-50`}
  >
    <ul className="flex space-x-4 md:space-y-4 md:space-x-0 md:flex-col">
      <li className="flex items-center justify-center">
        <MdOutlineMail />
      </li>
      <li className="flex items-center justify-center">
        <FaGithub />
      </li>
      <li className="flex items-center justify-center">
        <FaLinkedin />
      </li>
      <li className="flex items-center justify-center">
        <FaTwitter />
      </li>
      <li className="flex items-center justify-center">
        <FaInstagram />
      </li>
    </ul>
  </div>

</div>

  
  );
}

export default Sidebar;
