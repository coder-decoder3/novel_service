import Header from "@/components/Header";
import FeaturedStory from "@/components/FeaturedStory";
import StorySection from "@/components/StorySection";
import Container from "@/components/ui/Container";

const yourStories = [
  {
    id: 1,
    title: "Her FORBIDDEN Curves",
    author: "RomanceWriter",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop",
    reads: "1.2M",
    likes: "324K",
    parts: 25,
    currentPart: 6,
    status: "Continue" as const,
    genres: ["Romance", "Mature"],
    mature: true
  },
  {
    id: 2,
    title: "Finally Know The Guy You Love",
    author: "HeartStrings",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
    reads: "856K",
    likes: "201K",
    parts: 12,
    currentPart: 2,
    status: "1 new part" as const,
    genres: ["Romance", "Teen Fiction"]
  },
  {
    id: 3,
    title: "HIS MAID",
    author: "DarkRomance",
    cover: "https://images.unsplash.com/photo-1494790108755-2616c0763ba5?w=300&h=450&fit=crop",
    reads: "2.1M",
    likes: "578K",
    parts: 30,
    currentPart: 1,
    status: "Continue" as const,
    genres: ["Romance", "Drama"],
    mature: true
  },
  {
    id: 4,
    title: "The Dark Prince",
    author: "FantasyQueen",
    cover: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=450&fit=crop",
    reads: "1.8M",
    likes: "445K",
    parts: 35,
    currentPart: 1,
    status: "Continue" as const,
    genres: ["Fantasy", "Romance"]
  },
  {
    id: 5,
    title: "FORBIDDEN FLAMES: MY FATHER'S FRIEND",
    author: "TabooTales",
    cover: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=450&fit=crop",
    reads: "3.2M",
    likes: "892K",
    parts: 45,
    currentPart: 40,
    status: "Continue" as const,
    genres: ["Romance", "Mature"],
    mature: true
  },
  {
    id: 6,
    title: "Sweet Temptation",
    author: "SugarRush",
    cover: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=450&fit=crop",
    reads: "674K",
    likes: "158K",
    parts: 18,
    currentPart: 2,
    status: "Continue" as const,
    genres: ["Romance", "Contemporary"]
  }
];

const topPicks = [
  {
    id: 7,
    title: "The Vampire's Kiss",
    author: "BloodMoon",
    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
    reads: "4.5M",
    likes: "1.2M",
    parts: 52,
    status: "Complete" as const,
    genres: ["Vampire", "Romance"],
    mature: true
  },
  {
    id: 8,
    title: "My Brother's Best Friend",
    author: "ForbiddenLove",
    cover: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=450&fit=crop",
    reads: "2.8M",
    likes: "634K",
    parts: 28,
    status: "Continue" as const,
    genres: ["Romance", "Teen Fiction"]
  },
  {
    id: 9,
    title: "The CEO's Contract Wife",
    author: "BusinessRomance",
    cover: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=450&fit=crop",
    reads: "1.9M",
    likes: "412K",
    parts: 33,
    status: "Continue" as const,
    genres: ["Romance", "Drama"]
  },
  {
    id: 10,
    title: "Kissing is the Easy Part",
    author: "YAAuthor",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
    reads: "1.5M",
    likes: "287K",
    parts: 24,
    status: "Continue" as const,
    genres: ["Teen Fiction", "Romance"]
  },
  {
    id: 11,
    title: "The Mafia's Possession",
    author: "DarkDesires",
    cover: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=450&fit=crop",
    reads: "3.7M",
    likes: "956K",
    parts: 41,
    status: "Continue" as const,
    genres: ["Mafia", "Romance"],
    mature: true
  },
  {
    id: 12,
    title: "High School Sweethearts",
    author: "TeenDreams",
    cover: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=450&fit=crop",
    reads: "987K",
    likes: "201K",
    parts: 19,
    status: "Continue" as const,
    genres: ["Teen Fiction", "Romance"]
  }
];

const genres = [
  { name: "Romance", icon: "💖" },
  { name: "Fanfiction", icon: "📚" },
  { name: "LGBTQ+", icon: "🏳️‍🌈" },
  { name: "Wattpad Originals", icon: "📖" },
  { name: "Werewolf", icon: "🐺" },
  { name: "New Adult", icon: "🧑" },
  { name: "Fantasy", icon: "🪄" },
  { name: "Short Story", icon: "✍️" },
  { name: "Teen Fiction", icon: "🧒" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FeaturedStory />
      <StorySection title="Your stories" stories={yourStories} />
      <StorySection title="Top picks for you" stories={topPicks} />
      {/* Browse genres section */}
      <section className="py-8">
        <Container>
          <h2 className="text-2xl font-bold mb-4">Browse genres</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
            {genres.map((genre) => (
              <button
                key={genre.name}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow text-base font-semibold whitespace-nowrap border border-gray-200 hover:bg-gray-100 transition-colors flex-shrink-0 min-w-0 max-w-xs"
                style={{ maxWidth: 180 }}
              >
                <span className="text-xl">{genre.icon}</span>
                <span className="truncate block" style={{ maxWidth: 110 }}>{genre.name}</span>
              </button>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Index;
