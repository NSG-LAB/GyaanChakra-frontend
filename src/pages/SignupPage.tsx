import { Button } from "../components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { apiRequest } from "../services/api";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loginStore = useAuthStore((s) => s.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await apiRequest<{ user: any; accessToken: string; refreshToken: string }>(
        "/api/auth/register",
        {
          method: "POST",
          body: JSON.stringify({ name, email, password })
        }
      );

      // store access token in memory (Zustand); refresh token is stored as httpOnly cookie by the server
      loginStore(data.accessToken, data.user);
      navigate("/");
    } catch (err: any) {
      alert(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="glass rounded-3xl p-6">
        <h1 className="text-2xl font-semibold text-textPrimary">Join the Fleet</h1>
        <p className="mt-2 text-sm text-textSecondary">Create your engineering profile.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm text-textSecondary">
            Full Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="rounded-xl border border-white/10 bg-transparent px-4 py-2 text-textPrimary"
              placeholder="Astra Pilot"
              required
            />
          </label>
          <label className="grid gap-2 text-sm text-textSecondary">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="rounded-xl border border-white/10 bg-transparent px-4 py-2 text-textPrimary"
              placeholder="cadet@gyaanchakra.ai"
              required
            />
          </label>
          <label className="grid gap-2 text-sm text-textSecondary">
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="rounded-xl border border-white/10 bg-transparent px-4 py-2 text-textPrimary"
              placeholder="••••••••"
              required
            />
          </label>
          <Button type="submit" disabled={loading}>{loading ? "Creating..." : "Create Account"}</Button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
