import { Menu } from "lucide-react";

function Navbar() {
    return (
        <nav className="w-full bg-black/95 backdrop-blur-md border-b border-gray-900 text-white fixed top-0 left-0 z-50">

            <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-4">

                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex flex-col leading-none cursor-pointer select-none">

                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-white">
                                Make<span className="text-blue-400">AMove</span>
                            </h1>


                            <p className="mt-1 text-sm font-medium tracking-[0.2em] uppercase text-gray-500">
                                Move Stronger Together
                            </p>
                        </div>

                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden xl:flex items-center gap-12 text-sm font-medium text-gray-300">

                        <li className="hover:text-white transition cursor-pointer">
                            Home
                        </li>

                        <li className="hover:text-white transition cursor-pointer">
                            Programs
                        </li>

                        <li className="hover:text-white transition cursor-pointer">
                            Activities
                        </li>

                        <li className="hover:text-white transition cursor-pointer">
                            Community
                        </li>

                        <li className="hover:text-white transition cursor-pointer">
                            Pricing
                        </li>

                        <li className="hover:text-white transition cursor-pointer">
                            Contact
                        </li>

                    </ul>

                    {/* Right Section */}
                    <div className="hidden lg:flex items-center gap-12">

                        {/* Phone */}
                        <div className="flex flex-col leading-tight text-right whitespace-nowrap">


                            <a
                                href="tel:+919307214914"
                                className="inline-flex items-center justify-center rounded-full border border-blue-700 bg-blue-900/20 px-5 py-2 text-sm font-semibold text-blue-400 hover:bg-blue-700 hover:text-white transition duration-300 whitespace-nowrap"
                            >
                                Contact +91 98765 43210
                            </a>


                        </div>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919307214914"
                            className="inline-flex items-center justify-center rounded-full border border-blue-700 bg-blue-900/20 px-5 py-2 text-sm font-semibold text-blue-400 hover:bg-blue-700 hover:text-white transition duration-300 whitespace-nowrap"
                        >
                            WhatsApp
                        </a>

                        {/* CTA */}
                        <button className="bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold transition duration-300 whitespace-nowrap">
                            Join Now
                        </button>

                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2 rounded-md hover:bg-gray-900 transition">
                        <Menu size={28} />
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;