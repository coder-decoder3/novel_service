import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StoryCard from "./StoryCard";
import Container from "@/components/ui/Container";

interface StorySectionProps {
  title: string;
  showSeeAll?: boolean;
  stories: Array<{
    id: number;
    title: string;
    author: string;
    cover: string;
    reads: string;
    likes: string;
    parts: number;
    currentPart?: number;
    status?: "Continue" | "1 new part" | "Complete";
    genres: string[];
    mature?: boolean;
  }>;
}

const StorySection = ({ title, showSeeAll = true, stories }: StorySectionProps) => {
  return (
    <section className="py-8">
      <Container className="px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {showSeeAll && (
            <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
              See all
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StorySection;