
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GoogleSignInButton } from "@/components/auth/GoogleSignInButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user) {
      navigate("/dashboard");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin h-12 w-12 rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/558d107c-e093-46e6-8779-b8feb0f0edbe.png" 
              alt="ANOWO Logo" 
              className="h-16 w-16" 
            />
          </div>
          <CardTitle className="text-2xl font-bold">ANOWO Analytics</CardTitle>
          <CardDescription>
            Your digital marketing performance in one place
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <GoogleSignInButton />
            <div className="text-xs text-center text-muted-foreground mt-4">
              By continuing, you agree to ANOWO Analytics's Terms of Service
              and Privacy Policy.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
