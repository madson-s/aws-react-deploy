import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, CheckCircle } from "lucide-react";

interface ForgotPasswordProps {
  onBack: () => void;
}

export function ForgotPassword({ onBack }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request:", email);
    setIsSubmitted(true);
    // Aqui seria a lógica de recuperação de senha
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-glass/50 backdrop-blur-xl border-glass-border shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            E-mail Enviado!
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enviamos as instruções para recuperar sua senha para <strong>{email}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>Verifique sua caixa de entrada e siga as instruções no e-mail.</p>
            <p>Não esqueça de verificar a pasta de spam!</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="w-full border-glass-border bg-glass/30 backdrop-blur-sm hover:bg-glass/50 transition-colors"
            >
              Tentar outro e-mail
            </Button>
            <Button 
              onClick={onBack}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-glow"
            >
              Voltar ao Login
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-glass/50 backdrop-blur-xl border-glass-border shadow-2xl">
      <CardHeader className="space-y-4">
        <div className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Esqueci Minha Senha
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Digite seu e-mail e enviaremos instruções para recuperar sua senha
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reset-email">E-mail</Label>
            <Input
              id="reset-email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-secondary/50 border-glass-border focus:border-primary transition-colors"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-glow"
          >
            Enviar Instruções
          </Button>
          
          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              Lembrou da senha?{" "}
              <Button
                type="button"
                variant="link"
                className="p-0 h-auto font-medium text-primary hover:text-accent transition-colors"
                onClick={onBack}
              >
                Voltar ao login
              </Button>
            </span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}