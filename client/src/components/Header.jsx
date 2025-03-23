import React from "react";

function Header() {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
                {/* LOGO */}
                <div className="font-bold text-xl">
                    <a href="#">LG HOME CONSTRUCTION</a>
                </div>

                {/* NAVIGATION */}

                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Services</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Portfolio</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">About Us</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;