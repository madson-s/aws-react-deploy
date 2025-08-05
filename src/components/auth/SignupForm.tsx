import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon, CheckIcon } from "lucide-react";

interface SignupFormProps {
  onToggleForm: () => void;
}

export function SignupForm({ onToggleForm }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword !== "";
  const isValidPassword = formData.password.length >= 6;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordsMatch) {
      console.log("Passwords don't match");
      return;
    }
    console.log("Signup attempt:", formData);
    // Aqui seria a lógica de cadastro
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-glass/50 backdrop-blur-xl border-glass-border shadow-2xl">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Criar Conta
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Crie sua conta para começar
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-secondary/50 border-glass-border focus:border-primary transition-colors"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-secondary/50 border-glass-border focus:border-primary transition-colors"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-secondary/50 border-glass-border focus:border-primary transition-colors pr-10"
                required
                minLength={6}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <EyeIcon className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
            {formData.password && (
              <p className={`text-xs flex items-center gap-1 ${isValidPassword ? 'text-green-500' : 'text-red-500'}`}>
                <CheckIcon className={`h-3 w-3 ${isValidPassword ? 'opacity-100' : 'opacity-50'}`} />
                Mínimo 6 caracteres
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar senha</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="bg-secondary/50 border-glass-border focus:border-primary transition-colors pr-10"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <EyeIcon className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
            {formData.confirmPassword && (
              <p className={`text-xs flex items-center gap-1 ${passwordsMatch ? 'text-green-500' : 'text-red-500'}`}>
                <CheckIcon className={`h-3 w-3 ${passwordsMatch ? 'opacity-100' : 'opacity-50'}`} />
                As senhas coincidem
              </p>
            )}
          </div>
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-glow"
            disabled={!passwordsMatch || !isValidPassword}
          >
            Criar Conta
          </Button>
        </form>
        
        <div className="text-center">
          <span className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Button
              variant="link"
              className="p-0 h-auto font-medium text-primary hover:text-accent transition-colors"
              onClick={onToggleForm}
            >
              Entrar
            </Button>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}