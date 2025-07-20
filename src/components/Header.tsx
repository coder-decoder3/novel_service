import { Search, ChevronDown, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu and Logo */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl hidden sm:block">NovelHub</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Button variant="ghost" className="flex items-center gap-1">
              Browse
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="flex items-center gap-1">
              Community
              <ChevronDown className="h-4 w-4" />
            </Button>
          </nav>

          {/* Search */}
          <div className="flex-1 max-w-md mx-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search stories..." 
              className="pl-10 bg-muted/30 border-muted focus:bg-background"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:flex">
              Write
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant">
              Try Premium
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full p-2">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;