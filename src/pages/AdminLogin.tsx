import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const LoginForm = ({ setUser }: { setUser: (user: any) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(true);
    console.log({ email, password, rememberMe });
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-xl overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center mx-auto">
          <div className="flex items-center justify-center mb-6">
            <span className="text-3xl font-bold text-indigo-600">&#9733;</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome back!
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Enter your details to access your account.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <Label className="flex items-center text-gray-700">
                <Checkbox
                  checked={rememberMe}
                  onCheckedChange={(value) => setRememberMe(value as boolean)}
                />
                <span className="ml-2">Remember me</span>
              </Label>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Log In
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
