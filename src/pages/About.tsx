import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sparkles, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/95">
          <CardHeader>
            <CardTitle className="text-4xl text-center text-primary mb-6">
              About CogniVerse
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Brain className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    CogniVerse is your all-in-one AI learning companion platform,
                    designed to make education, self-care, and fun seamlessly
                    integrate into your daily life. We bring together specialized AI
                    companions to support your journey in various domains.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
                  <p className="text-gray-600">
                    From educational tutors in mathematics and languages to
                    wellness coaches and creative companions, our AI companions are
                    here to guide, teach, and support you. Each interaction earns
                    you achievements, points, and badges as you progress.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    We envision a world where learning is personalized,
                    engaging, and accessible to everyone. Through our AI
                    companions, we're making this vision a reality, one
                    interaction at a time.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
