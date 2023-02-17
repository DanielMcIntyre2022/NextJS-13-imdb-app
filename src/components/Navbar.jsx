import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex justify-center">
        <NavbarItem title="Trending" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
};

export default Navbar;