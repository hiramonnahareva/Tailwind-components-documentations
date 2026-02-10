
const cards = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Explore Nature",
    description: "Discover beautiful places around the world.",
    buttonText: "Learn More",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "City Life",
    description: "Experience the energy of the city.",
    buttonText: "View More",
  },
  {
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    title: "Adventure",
    description: "Embark on your next adventure.",
    buttonText: "Start Now",
  },
];

export default function App() {
  return (
    <div className="flex gap-5 p-10">
      {cards.map((card, index) => (
        <HoverCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
} 

export function HoverCard({ image, title, description, buttonText }) {
  return (
    <div className="group relative w-72 h-96 rounded-xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
        <h3 className="text-xl font-bold translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-200 translate-y-4 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
          {description}
        </p>

        <button className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm translate-y-4 opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
