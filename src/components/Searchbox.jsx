
function Searchbox() {
  return (
    <form className="flex max-w-6xl mx-auto 
    justify-between items-center px-5">
        <input type="text" 
        placeholder="Search for movie..."
        className="w-full h-14 rounded-sm placeholder-gray-500 
        outline-none bg-transparent flex-1"
        />
        <button 
        className="text-amber-300
        disabled:text-gray-400"
        type="submit">Search</button>
    </form>
  )
};

export default Searchbox;