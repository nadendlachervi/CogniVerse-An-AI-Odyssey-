import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Calculator, Languages } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Education = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCompanion, setSelectedCompanion] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [mathExpression, setMathExpression] = useState("");

  const handleMathSolve = () => {
    try {
      // Simple math expression evaluator - in production, use a proper math library
      const result = eval(mathExpression);
      toast({
        title: "Solution",
        description: `${mathExpression} = ${result}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Please enter a valid mathematical expression",
        variant: "destructive",
      });
    }
  };

  const handleLanguageQuery = () => {
    // In production, this would connect to an AI service
    toast({
      title: "Language Tutor",
      description: "I'll help you learn any language! (AI integration pending)",
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
              Education Companions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!selectedCompanion ? (
              <div className="grid md:grid-cols-2 gap-6">
                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCompanion("math")}
                >
                  <CardContent className="pt-6 text-center">
                    <Calculator className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold">Math Tutor</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Solve mathematical problems
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCompanion("language")}
                >
                  <CardContent className="pt-6 text-center">
                    <Languages className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold">Language Tutor</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Learn new languages
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

                {selectedCompanion === "math" ? (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Math Tutor</h3>
                    <Input
                      placeholder="Enter a mathematical expression (e.g., 2 + 2)"
                      value={mathExpression}
                      onChange={(e) => setMathExpression(e.target.value)}
                    />
                    <Button onClick={handleMathSolve} className="w-full">
                      Solve
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Language Tutor</h3>
                    <Input
                      placeholder="Ask a language learning question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                    <Button onClick={handleLanguageQuery} className="w-full">
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

export default Education;