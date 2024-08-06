import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">John Doe</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-blue-400 hover:text-blue-300">About</a></li>
            <li><a href="#skills" className="text-blue-400 hover:text-blue-300">Skills</a></li>
            <li><a href="#projects" className="text-blue-400 hover:text-blue-300">Projects</a></li>
            <li><a href="#contact" className="text-blue-400 hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-700 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#about" className="text-blue-400 hover:text-blue-300">About</a></li>
            <li><a href="#skills" className="text-blue-400 hover:text-blue-300">Skills</a></li>
            <li><a href="#projects" className="text-blue-400 hover:text-blue-300">Projects</a></li>
            <li><a href="#contact" className="text-blue-400 hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
