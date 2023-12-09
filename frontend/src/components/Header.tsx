import CompileButton from "./CompileButton";

function Header() {
  return (
    <div id="header" className="py-2 px-5 flex justify-between items-center">
      <h2 className="font-semibold text-xl">
        Super <span className="text-yellow-300">language!</span>
      </h2>
      <CompileButton />
    </div>
  );
}

export default Header;
