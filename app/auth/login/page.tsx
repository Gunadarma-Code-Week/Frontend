"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const handleGoogleLoginSuccess = async (response: CredentialResponse) => {
  const idToken = response.credential;
  if (!idToken) {
    console.error("Missing Google ID token");
    return;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/validate-google-id-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ google_id_token: idToken }),
    }
  );

  if (res.ok) {
    console.log("Google login success");

    const tes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile/my`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (tes.ok) {
      const tesData = await tes.json();
      console.log("tes: ", tesData);
    }
  } else {
    console.error("Google login error");
  }
};

const handleGoogleLoginError = () => {
  console.error("Google login error");
};

export default function LoginPage() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!clientId) {
    throw new Error("Missing Google client ID");
  }

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
