import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { PhoneInput } from "./ui/phone-input";

interface Props<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  datas?: Datas[];
  defaultValue?: string;
}

interface Datas {
  id: string;
  name: string;
  regency?: null;
}

export function UseFormInput<T extends FieldValues>({
  form,
  name,
  label,
  type,
  placeholder,
}: Props<T>) {
  const { errors } = form.formState;
  const errorMessage = errors[name]?.message as string;
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {type === "file" ? (
              <Input
                type={type}
                placeholder={placeholder}
                className="form-input bg-gray-100 dark:text-white sm:bg-transparent"
                {...field}
                onChange={(e) => {
                  // Handle file input khusus
                  field.onChange(e.target.files);
                }}
              />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                className="form-input bg-gray-100 dark:text-white sm:bg-transparent"
                {...field}
              />
            )}
          </FormControl>
          <FormDescription className="text-red-400">
            {errorMessage}
          </FormDescription>
        </FormItem>
      )}
    />
  );
}

export function UseFormInputPhone<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
}: Props<T>) {
  const { errors } = form.formState;
  const errorMessage = errors[name]?.message as string;
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <PhoneInput
              defaultCountry="ID"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormDescription className="text-red-400">
            {errorMessage}
          </FormDescription>
        </FormItem>
      )}
    />
  );
}

// export function UseFormDate({ form, errors, name, label }: Props) {
//   return (
//     <FormField
//       control={form.control}
//       name={name}
//       render={({ field }) => {
//         return (
//           <FormItem>
//             <FormLabel>{label}</FormLabel>
//             <FormControl>
//               {<DatePicker date={field.value} setDate={field.onChange} />}
//             </FormControl>
//             <FormDescription className="text-red-400">{errors}</FormDescription>
//           </FormItem>
//         );
//       }}
//     />
//   );
// }

export function UseFormSelect<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  datas = [],
}: Props<T>) {
  const { errors } = form.formState;
  const errorMessage = errors[name]?.message as string;
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  ref={field.ref}
                  className="border border-gray-300 bg-gray-100 text-gray-800 w-full"
                >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {datas.map((data) => (
                      <SelectItem key={data.id} value={data.id}>
                        {data.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormDescription>{errorMessage}</FormDescription>
          </FormItem>
        );
      }}
    />
  );
}
