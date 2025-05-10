import img from "../assets/img.png";
function HeaderComponent() {
  return (
    <>
      {/* header */}
      <div className=" flex justify-between ">
        <div className=" flex items-center justify-between gap-x-28 mt-3 ">
          <div className="flex flex-row   items-center">
            <img
              src={img}
              alt="Hostel logo"
              className="w-8 h-8 rounded-full object-cover mr-2"
            />
            <h1 className="font-bold text-3xl">Hostel Book</h1>
          </div>
          <div className="flex flex-row   ">
            <ul className="flex flex-row gap-6 text-gray-600">
              <li>Home</li>
              <li>About</li>
              <li>Blogs</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-x-10 text-gray-600">
          <a href="#">Login</a>
          <button className="bg-blue-400 text-white px-3.5 py-1">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
