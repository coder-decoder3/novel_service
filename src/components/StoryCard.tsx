import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, MessageCircle } from "lucide-react";

interface StoryCardProps {
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
}

const StoryCard = ({ 
  title, 
  author, 
  cover, 
  reads, 
  likes, 
  parts, 
  currentPart, 
  status = "Continue",
  genres,
  mature = false 
}: StoryCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0">
      {/* Cover Image */}
      <div className="aspect-[3/4] relative overflow-hidden bg-muted">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Status badge */}
        {status === "1 new part" && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            New Chapter
          </Badge>
        )}
        
        {mature && (
          <Badge variant="destructive" className="absolute top-3 right-3">
            Mature
          </Badge>
        )}
        
        {/* Quick actions on hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{reads}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg line-clamp-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">by {author}</p>
        </div>

        <div className="flex flex-wrap gap-1">
          {genres.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{status}</span>
          <span>Part {currentPart || parts}</span>
        </div>

        {/* Progress bar if continuing */}
        {currentPart && currentPart < parts && (
          <div className="w-full bg-muted rounded-full h-1">
            <div 
              className="bg-primary h-1 rounded-full transition-all duration-300" 
              style={{ width: `${(currentPart / parts) * 100}%` }}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default StoryCard;