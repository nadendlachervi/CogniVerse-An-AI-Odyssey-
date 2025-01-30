import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Heart, Gamepad } from "lucide-react";

const Explore = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Education",
      icon: <BookOpen className="w-6 h-6" />,
      companions: ["Math Tutor", "Language Tutor"],
      path: "/education",
      description: "Learn and grow with our educational companions",
    },
    {
      title: "Self Care",
      icon: <Heart className="w-6 h-6" />,
      companions: ["Wellness Coach", "Mindfulness Guide"],
      path: "/self-care",
      description: "Take care of your mental and physical well-being",
    },
    {
      title: "Fun",
      icon: <Gamepad className="w-6 h-6" />,
      companions: ["Game Master", "Creative Companion"],
      path: "/fun",
      description: "Enjoy interactive games and creative activities",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Explore CogniVerse
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="hover:shadow-xl transition-shadow bg-white/95"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {category.icon}
                  <CardTitle>{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{category.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Available Companions:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {category.companions.map((companion) => (
                      <li key={companion}>{companion}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  onClick={() => navigate(category.path)}
                  className="w-full"
                >
                  Explore {category.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;