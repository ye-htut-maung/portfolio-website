import profileImage from "../assets/imgs/profile_pic.jpg";

const Header = () => {
    return (
        <div className="mt-5 flex items-center justify-center">
            <div className="w-3/5 flex flex-row bg-white shadow-lg rounded-lg overflow ">
                <div className="w-2/3 mx-auto p-6 ">
                    <p className="mb-4 text-gray-800">
                        Ye Htut Maung | Computer Science and Mathematics Student
                        at CUNY Queens College
                    </p>

                    <p className="mb-4 text-gray-700">
                        I'm a junior double majoring in Computer Science and
                        Mathematics, focusing on Data Science and Statistics. My
                        interests span Data Science and Full Stack Development.
                    </p>

                    <h2 className="mb-2 text-gray-800">Current roles:</h2>
                    <ul className="list-disc pl-5 mb-4 text-gray-700">
                        <li>Computer Science Tutor at Queens College</li>
                        <li>Data Science Fellow at CUNY Tech Prep</li>
                        <li>Workshop Developer at Code for All club</li>
                    </ul>

                    <p className="mb-4 text-gray-700">
                        I'm passionate about leveraging data for insights and
                        creating user-friendly applications. My goal is to
                        contribute to projects bridging data science and
                        software engineering.
                    </p>

                    <p className="mb-4 text-gray-700">
                        Outside of tech, I enjoy ice skating and J-Pop.
                    </p>

                    <p className="text-gray-700 italic">
                        Feel free to explore my projects or reach out for
                        collaborations in data science and full stack
                        development.
                    </p>
                </div>
                <div className="md:w-1/3 flex justify-center items-start flex-shrink-0">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="rounded-full w-40 h-40 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
