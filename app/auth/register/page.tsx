"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { UseFormInput } from "@/components/UseFormField";
import { cn } from "@/lib/utils";
import { registerService } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const username = data.email.split("@")[0];
      const cleanUsername = username.replace(
        /[!@#$%^&*(),.?":{}|<>[\]\\';'`~]/,
        ""
      );

      const newData = {
        username: cleanUsername,
        email: data.email,
        password: data.password,
        role_id: 1,
      };

      const res = await registerService(newData);

      if (res) {
        await signIn("credentials", {
          email: data.email,
          password: data.password,
          callbackUrl: "/dashboard",
        });
      }

      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const res = await signIn("google", { callbackUrl: "/dashboard" });
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Create an account</CardTitle>
              <CardDescription>
                Register with your Google account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex flex-col gap-4">
                  <Button
                    onClick={handleSignInWithGoogle}
                    variant="outline"
                    className="w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    Register with Google
                  </Button>
                </div>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
                <div className="grid gap-6">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div className="grid gap-2">
                        <UseFormInput
                          form={form}
                          name="email"
                          label="Email"
                          type="email"
                          placeholder="m@example.com"
                        />
                      </div>
                      <div className="grid gap-2">
                        <UseFormInput
                          form={form}
                          name="password"
                          label="Password"
                          type="password"
                          placeholder="Enter your password"
                        />
                      </div>

                      <div className="grid gap-2">
                        <UseFormInput
                          form={form}
                          name="confirmPassword"
                          label="Confirm Password"
                          type="password"
                          placeholder="Confirm your password"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Register
                      </Button>
                    </form>
                  </Form>
                </div>
                <div className="text-center text-sm">
                  Have an account?{" "}
                  <Link
                    href={"/auth/login"}
                    className="underline underline-offset-4"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
