import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Heart, Brain } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SelfCare = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCompanion, setSelectedCompanion] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const handleWellnessQuery = () => {
    // In production, this would connect to an AI service
    toast({
      title: "Wellness Coach",
      description: "I'm here to support your well-being! (AI integration pending)",
    });
  };

  const handleMindfulnessQuery = () => {
    // In production, this would connect to an AI service
    toast({
      title: "Mindfulness Guide",
      description: "Let's practice mindfulness together! (AI integration pending)",
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
              Self Care Companions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!selectedCompanion ? (
              <div className="grid md:grid-cols-2 gap-6">
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCompanion("wellness")}
                >
                  <CardContent className="pt-6 text-center">
                    <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold">Wellness Coach</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Support for your well-being journey
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCompanion("mindfulness")}
                >
                  <CardContent className="pt-6 text-center">
                    <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold">Mindfulness Guide</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Practice mindfulness and meditation
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

                {selectedCompanion === "wellness" ? (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Wellness Coach</h3>
                    <Input
                      placeholder="Ask about wellness and self-care"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button onClick={handleWellnessQuery} className="w-full">
                      Ask
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Mindfulness Guide</h3>
                    <Input
                      placeholder="Ask about mindfulness practices"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button onClick={handleMindfulnessQuery} className="w-full">
                      Ask
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

export default SelfCare;