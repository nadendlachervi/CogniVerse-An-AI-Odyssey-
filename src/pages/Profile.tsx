import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star, Award, Trophy } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/95">
          <CardHeader>
            <CardTitle className="text-4xl text-center text-primary">
              My Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Learning Progress */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Learning Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Mathematics</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Language Learning</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Mindfulness</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Stars Earned</h4>
                  <p className="text-3xl font-bold text-primary">247</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Badges</h4>
                  <p className="text-3xl font-bold text-primary">15</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Trophy className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Points</h4>
                  <p className="text-3xl font-bold text-primary">1,580</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Achievements */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Recent Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Math Master</h4>
                    <p className="text-sm text-gray-600">
                      Completed 10 advanced math problems
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Mindfulness Guru</h4>
                    <p className="text-sm text-gray-600">
                      30-day meditation streak
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;