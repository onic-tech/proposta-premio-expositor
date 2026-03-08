"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mock authentication
    if ((email === "admin@onic.tech" && password === "admin") || 
        (email === "user@onic.tech" && password === "user")) {
      setTimeout(() => {
        login(email);
        toast.success("Login realizado com sucesso!");
      }, 1000);
    } else {
      setTimeout(() => {
        toast.error("Credenciais inválidas. Tente admin@onic.tech / admin ou user@onic.tech / user");
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020204] to-[#020204] px-4 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <Card className="w-full max-w-sm bg-white/5 border-white/10 backdrop-blur-md text-white relative z-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            <span className="text-primary">ONIC</span> ADMIN
          </CardTitle>
          <CardDescription className="text-gray-400 text-center">
            Entre com suas credenciais para acessar o painel.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@onic.tech"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-gray-300">Senha</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black/20 border-white/10 text-white focus-visible:ring-primary/50"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary text-black hover:bg-primary/80 font-bold" type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
