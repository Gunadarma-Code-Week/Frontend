"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";
import { getProfile, validateGoogleToken } from "@/services/auth";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!clientId) {
    throw new Error("Missing Google client ID");
  }
  const { login } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("gcw_token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleGoogleLoginError = () => {
    console.error("Google login error");
  };

  const handleGoogleLoginSuccess = async (response: CredentialResponse) => {
    const idToken = response.credential;
    if (!idToken) {
      console.error("Missing Google ID token");
      return;
    }

    const resGToken = await validateGoogleToken(idToken);

    if (resGToken) {
      login(resGToken.Data.access_token);

      console.log("✅ - Google login success");

      const resProfile = await getProfile();
      if (resProfile) {
        console.log("res profile: ", resProfile);
        router.push("/dashboard");
      }
    } else {
      console.error("Google login error");
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <div className={cn("flex flex-col gap-6")}>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Welcome back</CardTitle>
                <CardDescription>
                  Login with your Google account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="flex justify-center">
                    <GoogleLogin
                      onSuccess={handleGoogleLoginSuccess}
                      onError={handleGoogleLoginError}
                      useOneTap
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
