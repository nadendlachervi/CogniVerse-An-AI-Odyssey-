import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Heart, Gamepad } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    {
      title: "Education",
      icon: <BookOpen className="w-6 h-6" />,
      path: "/education",
      companions: ["Math Tutor", "Language Tutor"],
    },
    {
      title: "Self Care",
      icon: <Heart className="w-6 h-6" />,
      path: "/self-care",
      companions: ["Wellness Coach", "Mindfulness Guide"],
    },
    {
      title: "Fun",
      icon: <Gamepad className="w-6 h-6" />,
      path: "/fun",
      companions: ["Game Master", "Creative Companion"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-8">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-8 bg-white/90"
        >
          ← Back
        </Button>

        <Card className="bg-white/95">
          <CardHeader>
            <CardTitle className="text-4xl text-center text-primary">
              Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!showCategories ? (
              <Button
                onClick={() => setShowCategories(true)}
                className="w-full text-lg py-8 bg-primary/90 hover:bg-primary"
              >
                What's on your mind?
              </Button>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Card
                    key={category.title}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => navigate(category.path)}
                  >
                    <CardContent className="pt-6">
                      <div className="text-center">
                        {category.icon}
                        <h3 className="text-xl font-semibold mt-4 mb-2">
                          {category.title}
                        </h3>
                        <ul className="text-sm text-gray-600">
                          {category.companions.map((companion) => (
                            <li key={companion}>{companion}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;