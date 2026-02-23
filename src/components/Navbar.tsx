const Navbar = () => {
  return (
    <div className="fixed top-0 flex justify-center items-center w-screen z-30 h-20 px-10">
      <a href="/#" className="w-20 absolute left-40">
        <img src="/star-image.png" alt="" className="object-cover " />
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-white rounded-full overflow-hidden px-5 py-3 backdrop-blur-sm navbar-shadow">
        <a href="/#AboutStarSection">About STAR</a>
        <a href="/#ProjectsSection">Projects</a>
        <a href="/#FAQSection">FAQ</a>
        <a href="/#JoinUsSection">Join Us</a>
        <a href="/#EboardSection">Eboard</a>
      </nav>
    </div>
  );
};
export default Navbar;
