import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="p-3 flex flex-col md:flex-row items-center justify-center"
            style={{
                borderTop: "5px solid #424242",
                borderBottom: "1px solid #e8e8e8",
            }}
        >
            <div className="w-full md:w-3/5 flex justify-between items-center">
                <h1 className="text-lg md:text-xl">Ye Htut Maung</h1>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                    </button>
                </div>
                <div
                    className={`${
                        isOpen
                            ? "block absolute top-10 right-3 bg-white"
                            : "hidden"
                    } md:flex flex-col md:flex-row gap-2 text-center mt-2 md:mt-0`}
                >
                    <a
                        className="md:hover:underline p-3 md:p-1 block md:inline-block"
                        href="#"
                    >
                        Blog
                    </a>
                    <a
                        className="md:hover:underline p-3 md:p-1 block md:inline-block"
                        href="https://drive.google.com/file/d/1IisSsRG3vA1pGVd7FV3-EErH_pHHtUSv/view?usp=sharing"
                    >
                        Resume
                    </a>
                    <a
                        className="md:hover:underline p-3 md:p-1 block md:inline-block"
                        href="https://www.linkedin.com/in/ye-htut-maung/"
                    >
                        Linkedin
                    </a>
                    <a
                        className="md:hover:underline p-3 md:p-1 block md:inline-block"
                        href="https://github.com/ye-htut-maung"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
