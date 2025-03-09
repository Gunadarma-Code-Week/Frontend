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
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function NewPasswordPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async () => {};

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader className="">
              <CardTitle className="text-xl">Set a New Password</CardTitle>
              <CardDescription>
                Enter your new password and confirm it to set a new password.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid gap-2">
                      <UseFormInput
                        form={form}
                        name="password"
                        label="password"
                        type="password"
                        placeholder="Enter your new password"
                      />
                    </div>
                    <div className="grid gap-2">
                      <UseFormInput
                        form={form}
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm your new password"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Set New Password
                    </Button>
                  </form>
                </Form>
                <div className=" text-sm">
                  <Link
                    href={"/login"}
                    className="flex gap-1 hover:text-black/90 duration-150"
                  >
                    <ArrowLeft className="size-5" />
                    Back to Login
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
