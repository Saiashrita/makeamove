function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
            <h1 className="text-2xl font-bold">
                MakeAMove
            </h1>

            <ul className="flex gap-6">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;