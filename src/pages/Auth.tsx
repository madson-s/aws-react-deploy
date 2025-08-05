import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";
import { ForgotPassword } from "@/components/auth/ForgotPassword";

interface AuthProps {
  onBack?: () => void;
}

export default function Auth({ onBack }: AuthProps) {
  const [currentView, setCurrentView] = useState<'login' | 'signup' | 'forgot'>('login');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary"
        style={{ background: 'var(--gradient-background)' }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Auth Forms */}
          {currentView === 'login' && (
            <LoginForm 
              onToggleForm={() => setCurrentView('signup')} 
              onForgotPassword={() => setCurrentView('forgot')}
            />
          )}
          
          {currentView === 'signup' && (
            <SignupForm onToggleForm={() => setCurrentView('login')} />
          )}
          
          {currentView === 'forgot' && (
            <ForgotPassword onBack={() => setCurrentView('login')} />
          )}
        </div>
      </div>
    </div>
  );
}