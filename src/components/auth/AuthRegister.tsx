
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "@/lib/firebase";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const AuthRegister: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Account created!",
        description: "You can now log in and place orders.",
      });
      navigate("/shop");
    } catch (error: any) {
      let errMsg =
        error.code === "auth/email-already-in-use"
          ? "Email already in use."
          : error.message;
      toast({
        title: "Registration failed",
        description: errMsg,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form
        className="bg-white border shadow rounded-lg p-6 w-full max-w-sm space-y-4"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl font-bold text-center mb-2">Create an Account</h2>
        <Input
          type="email"
          placeholder="Email"
          required
          autoComplete="username"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          className="w-full"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Registering..." : "Register"}
        </Button>
        <div className="text-sm pt-2 text-center">
          Already have an account?{" "}
          <a className="text-red-600 underline hover:text-red-700" href="/login">
            Log in
          </a>
        </div>
      </form>
    </div>
  );
};

export default AuthRegister;
