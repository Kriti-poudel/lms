import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "This is a UI demo for auth page", description: "Connect to backend to enable real authentication." });
  };

  return (
    <div className="min-h-[70vh] py-16">
      <Helmet>
        <title>Login / Signup | Learning Platform</title>
        <meta name="description" content="Sign in to manage your library account or create a new account to start your reading journey." />
        <link rel="canonical" href="/auth" />
      </Helmet>

      <div className="container mx-auto px-4 max-w-3xl">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Create account</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">Sign in</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle>Create your account</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" placeholder="Taylor Reed" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" placeholder="taylor" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email2">Email</Label>
                    <Input id="email2" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password2">Password</Label>
                    <Input id="password2" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">I want to</Label>
                    <select id="role" className="w-full p-2 border rounded-md">
                      <option value="learner">Learn on this platform</option>
                      <option value="teacher">Teach and create courses</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full">Create account</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;