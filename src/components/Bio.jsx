import profileImage from "../assets/imgs/profile_pic.jpg";

const Bio = () => {
    return (
        <div className="mt-6 flex items-center justify-center px-4">
            <div className="w-full md:w-4/5 flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:w-1/3 flex justify-center items-center p-4 md:p-6">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64 object-cover"
                    />
                </div>
                <div className="w-full md:w-2/3 mx-auto p-6 ">
                    <p className="mb-4 text-gray-800 text-lg font-bold text-center md:text-left">
                        Ye Htut Maung | Computer Science and Mathematics Student
                        at CUNY Queens College
                    </p>

                    <p className="mb-4 text-gray-700 text-center md:text-left">
                        I'm a junior double majoring in Computer Science and
                        Mathematics, focusing on Data Science and Statistics. My
                        interests span Data Science and Full Stack Development.
                    </p>

                    <h2 className="mb-2 text-gray-800 text-center md:text-left font-bold">
                        Current roles:
                    </h2>
                    <ul className="list-disc pl-5 mb-4 text-gray-700 font-bold">
                        <li>Computer Science Tutor at Queens College</li>
                        <li>Data Science Fellow at CUNY Tech Prep</li>
                        <li>Workshop Developer at Code for All club</li>
                    </ul>

                    <p className="mb-4 text-gray-700 text-center md:text-left">
                        I'm passionate about leveraging data for insights and
                        creating user-friendly applications. My goal is to
                        contribute to projects bridging data science and
                        software engineering.
                    </p>

                    <p className="mb-4 text-gray-700 text-center md:text-left">
                        Outside of tech, I enjoy ice skating and J-Pop.
                    </p>

                    <p className="text-gray-700 italic text-center md:text-left">
                        Feel free to explore my projects or reach out for
                        collaborations in data science and full stack
                        development.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bio;
