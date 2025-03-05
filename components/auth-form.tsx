"use client";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Form } from "./ui/form";
import { UseFormInput } from "./UseFormField";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { z } from "zod";
import { useForm } from "react-hook-form";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  authMethod?: "register" | "login";
  form: ReturnType<typeof useForm>;
  schema: ReturnType<typeof z.object>;
}

export function AuthForm({
  className,
  authMethod = "login",
  form,
  schema,
  ...props
}: Props) {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  type FormData = z.infer<typeof schema>;

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      if (authMethod === "register") {
        const res = await createUserWithEmailAndPassword(
          data.email,
          data.password
        );
        console.log(res);
      }

      if (authMethod === "login") {
        const res = await signInWithEmailAndPassword(data.email, data.password);
        console.log(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          {authMethod === "register" && (
            <CardTitle className="text-xl">Create an account</CardTitle>
          )}
          {authMethod === "login" && (
            <>
              <CardTitle className="text-xl">Welcome back</CardTitle>
              <CardDescription>Login with your Google account</CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                {authMethod?.slice(0, 1).toUpperCase() + authMethod?.slice(1)}{" "}
                with Google
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
                  className="space-y-8"
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
                    />
                    <Link
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  {authMethod === "register" && (
                    <div className="grid gap-2">
                      <UseFormInput
                        form={form}
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                      />
                    </div>
                  )}
                  <Button type="submit" className="w-full">
                    {authMethod?.slice(0, 1).toUpperCase() +
                      authMethod?.slice(1)}
                  </Button>
                </form>
              </Form>
            </div>
            <div className="text-center text-sm">
              {authMethod === "login"
                ? "Don't have an account? "
                : "Have an account? "}
              <Link
                href={authMethod === "login" ? "/register" : "/login"}
                className="underline underline-offset-4"
              >
                {authMethod === "login" ? "Sign up" : "Log in"}
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
