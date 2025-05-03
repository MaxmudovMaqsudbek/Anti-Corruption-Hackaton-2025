import { Link, useNavigate } from "react-router-dom";
import HeroAnimation from "../shared/Hero-Animation";
import { BiShield } from "react-icons/bi";

export default function Home() {
  const navigate = useNavigate();
  const handleClickToCheckData = (e) => {
    e.preventDefault();
    navigate('/creatingrequest');
  }
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b-gray-200 shadow-sm transition-colors duration-300">
        <div className=" flex items-center justify-between h-16 px-4 md:px-6">
          <Link to={'/'} className="flex items-center gap-2">
            <BiShield className="w-6 h-6 text-teal-500" />
            <span className="font-bold">ANTICORRUPTION HACKATHON 2025</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to={'/creatingrequest'} className="text-lg font-bold hover:text-teal-500">
              Checking Data
            </Link>
            <Link to={'/checkingdata'} className="text-lg font-bold hover:text-teal-500">
              Results
            </Link>
            
          </nav>
          <button onClick={handleClickToCheckData} className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded text-white font-extrabold ">Start now</button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white py-16">
          <div className="absolute inset-0 opacity-10 pattern-geometric"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Innovate for <span className="text-teal-500">Transparency</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                Our system detects corruption with behavioral analytics, auction flow tracing, and irregular cost spike monitoring.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button onClick={handleClickToCheckData} className="border-teal-500 text-teal-500 hover:bg-teal-50">
                    Try It Now
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <HeroAnimation/>
              </div>
            </div>
          </div>
        </section>
    </main>
    </div>
  )
}
