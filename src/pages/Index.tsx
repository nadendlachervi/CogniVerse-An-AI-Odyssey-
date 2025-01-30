import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Brain, BookOpen, Compass, User } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-float">
          <h1 className="text-6xl font-bold text-white mb-4">
            Welcome to CogniVerse
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Your Gateway to AI-Powered Learning Companions
          </p>
          <div className="space-x-4">
            <Button
              onClick={() => navigate("/login")}
              className="bg-white text-primary hover:bg-white/90"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <Card 
            className="p-6 hover:shadow-lg transition-shadow bg-white/95 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <div className="text-center">
              <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
              <p className="text-gray-600">
                Access all your AI companions
              </p>
            </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-shadow bg-white/95 cursor-pointer"
            onClick={() => navigate("/about")}
          >
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">About</h3>
              <p className="text-gray-600">
                Learn about CogniVerse
              </p>
            </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-shadow bg-white/95 cursor-pointer"
            onClick={() => navigate("/explore")}
          >
            <div className="text-center">
              <Compass className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Explore</h3>
              <p className="text-gray-600">
                Discover companions
              </p>
            </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-shadow bg-white/95 cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <div className="text-center">
              <User className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Profile</h3>
              <p className="text-gray-600">
                View achievements
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;