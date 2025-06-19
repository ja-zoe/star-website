const Navbar = () => {
  return (
    <div className="fixed top-0 flex justify-center items-center w-screen z-20 h-20 px-10">
        <a href="/#" className="w-20 absolute left-40">
            <img src="/star-image.png" alt="" className="object-cover "/>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white rounded-full overflow-hidden px-4 py-2 backdrop-blur-sm navbar-shadow">
            <a href="/#AboutStarPage">About STAR</a>
            <a href="/#ProjectsPage">Projects</a>
            <a href="/#FAQPage">FAQ</a>
            <a href="/#JoinUsPage">Join Us</a>
        </nav>
    </div>
  )
}
export default Navbar