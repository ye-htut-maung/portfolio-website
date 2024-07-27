import profileImage from "../assets/imgs/profile_pic.jpg";

const Header = () => {
  return (
    <div className="pt-10 flex flex-col items-center ">
      <img
        src={profileImage}
        alt="Profile"
        className="rounded-full w-32 h-32 object-cover"
      />
      <h1 className="text-white text-6xl font-bold text-center font-jim-nightshade">
        Ye Htut Maung
      </h1>
    </div>
  );
};

export default Header;
