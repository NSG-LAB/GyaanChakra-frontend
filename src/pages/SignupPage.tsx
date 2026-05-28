import { Button } from "../components/ui/button";

const SignupPage = () => {
  return (
    <div className="mx-auto max-w-md">
      <div className="glass rounded-3xl p-6">
        <h1 className="text-2xl font-semibold text-textPrimary">Join the Fleet</h1>
        <p className="mt-2 text-sm text-textSecondary">Create your engineering profile.</p>
        <form className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm text-textSecondary">
            Full Name
            <input
              type="text"
              className="rounded-xl border border-white/10 bg-transparent px-4 py-2 text-textPrimary"
              placeholder="Astra Pilot"
            />
          </label>
          <label className="grid gap-2 text-sm text-textSecondary">
            Email
            <input
              type="email"
              className="rounded-xl border border-white/10 bg-transparent px-4 py-2 text-textPrimary"
              placeholder="cadet@gyaanchakra.ai"
            />
          </label>
          <label className="grid gap-2 text-sm text-textSecondary">
            Password
            <input
              type="password"
              className="rounded-xl border border-white/10 bg-transparent px-4 py-2 text-textPrimary"
              placeholder="••••••••"
            />
          </label>
          <Button type="submit">Create Account</Button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
