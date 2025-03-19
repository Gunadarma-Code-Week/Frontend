"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import {
  UseFormInput,
  UseFormInputPhone,
  UseFormSelect,
} from "@/components/UseFormField";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  educationalLevel: z.string(),
  institute: z.string(),
  identityCard: z.string(),
  phone: z.string(),
});

type FormData = z.infer<typeof schema>;

const educationalLevels = [
  { id: "1", name: "SMA" },
  { id: "2", name: "D3" },
  { id: "3", name: "S1" },
  { id: "4", name: "S2" },
  { id: "5", name: "S3" },
];

export default function LoginPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      educationalLevel: "",
      institute: "",
      identityCard: "",
      phone: "",
    },
  });

  const onSubmit = async () => {};

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted">
      <div className="flex w-full lg:max-w-4xl md:max-w-xl max-w-sm flex-col gap-6 lg:my-0 my-10">
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Lengkapi Data Diri Anda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid gap-2 lg:grid-cols-2 grid-cols-1">
                      <div className="grid gap-2">
                        <UseFormInput
                          form={form}
                          name="name"
                          label="Nama Lengkap"
                          type="text"
                          placeholder="Jhon Doe"
                        />
                      </div>
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
                        <UseFormSelect
                          form={form}
                          name="educationalLevel"
                          label="Jenjang Pendidikan"
                          datas={educationalLevels}
                          placeholder="Pilih Jenjang Pendidikan"
                        />
                      </div>
                      <div className="grid gap-2">
                        <UseFormInput
                          form={form}
                          name="institute"
                          label="Institusi"
                          type="text"
                          placeholder="Universitas Gunadarma"
                        />
                      </div>
                      <div className="grid gap-2">
                        <UseFormInput
                          form={form}
                          name="identityCard"
                          label="Kartu Indentitas"
                          type="file"
                        />
                      </div>
                      <div className="grid gap-2">
                        <UseFormInputPhone
                          form={form}
                          name="phone"
                          label="Nomor Handphone"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox name="agreementOne" />
                      <p className="text-sm font-light">
                        Dengan ini, saya menyatakan dengan sesungguhnya bahwa
                        semua data yang diberikan bersifat benar.
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox name="agreementTwo" />
                      <p className="text-sm font-light">
                        Dengan ini, saya memberikan persetujuan kepada Gunadarma
                        Code Week untuk menggunakan data pribadi saya di atas
                        secara bertanggung jawab untuk mendukung keberlangsungan
                        kegiatan Gunadarma Code Week serta untuk kepentingan
                        perusahaan mitra Gunadarma Code Week.
                      </p>
                    </div>

                    <Button type="submit" className="w-full">
                      Simpan
                    </Button>
                  </form>
                </Form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
