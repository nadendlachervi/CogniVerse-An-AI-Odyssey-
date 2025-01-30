import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Gamepad, Palette } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Fun = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCompanion, setSelectedCompanion] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");

  const handleGameQuery = () => {
    // In production, this would connect to an AI service
    toast({
      title: "Game Master",
      description: "Let's play something fun! (AI integration pending)",
    });
  };

  const handleCreativeQuery = () => {
    // In production, this would connect to an AI service
    toast({
      title: "Creative Companion",
      description: "Let's create something amazing! (AI integration pending)",
    });
  };

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
              Fun Companions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!selectedCompanion ? (
              <div className="grid md:grid-cols-2 gap-6">
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCompanion("game")}
                >
                  <CardContent className="pt-6 text-center">
                    <Gamepad className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold">Game Master</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Play interactive games
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCompanion("creative")}
                >
                  <CardContent className="pt-6 text-center">
                    <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold">Creative Companion</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Explore your creativity
                    </p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="space-y-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedCompanion(null)}
                  className="mb-4"
                >
                  ← Back to Companions
                </Button>

                {selectedCompanion === "game" ? (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Game Master</h3>
                    <Input
                      placeholder="What would you like to play?"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                    <Button onClick={handleGameQuery} className="w-full">
                      Play
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Creative Companion</h3>
                    <Input
                      placeholder="What would you like to create?"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                    <Button onClick={handleCreativeQuery} className="w-full">
                      Create
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Fun;