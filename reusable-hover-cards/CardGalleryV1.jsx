
export default function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="group relative w-72 h-96 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Nature"
          className="w-full h-full object-cover
                   transition-transform duration-700 ease-out
                   group-hover:scale-110"
        /> 

        <div
          className="absolute inset-0 bg-gradient-to-t
                      from-blue-500/80 via-blue-500/60 to-transparent
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500"
        /> 

        <div
          className="absolute inset-0 flex flex-col
                      justify-end p-6 text-white"
        >
          <h3
            className="text-2xl font-bold
                       translate-y-6 opacity-0
                       transition-all duration-500
                       group-hover:translate-y-0
                       group-hover:opacity-100"
          >
            Explore Nature
          </h3> 

          <p
            className="mt-2 text-sm text-gray-200
                      translate-y-6 opacity-0
                      transition-all duration-700 delay-100
                      group-hover:translate-y-0
                      group-hover:opacity-100"
          >
            Discover breathtaking landscapes and hidden gems around the world.
          </p> 

          <button
            className="mt-4 w-fit rounded-full bg-white text-black
                     px-5 py-2 text-sm font-semibold
                     translate-y-6 opacity-0
                     transition-all duration-700 delay-200
                     group-hover:translate-y-0
                     group-hover:opacity-100
                     hover:bg-gray-200"
          >
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
} 
