"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFieldInput from "./form fields/formFieldInput";
import { FormData } from "@/app/page";

const formSchema = z.object({
    address: z.string().min(1, { message: "Address is required" }),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
    zipCode: z.string().min(1, { message: "Zip code is required" }),
    country: z.string().min(1, { message: "Country is required" }),
});

interface AddressFormProps {
    initialData: FormData;
    onSuccess: (data: Partial<FormData>) => void;
    onBack: () => void;
}

export function AddressForm({ initialData, onSuccess, onBack }: AddressFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            address: initialData.address,
            city: initialData.city,
            state: initialData.state,
            zipCode: initialData.zipCode,
            country: initialData.country
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        onSuccess(values);
    }

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-2xl font-bold text-green-700 mb-6">
                    Step 2: Address Information
                </h2>
                <p className="text-gray-600 mb-4">
                    Please provide your current address information.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                    <div className="p-6 pt-6 rounded-lg border bg-card text-card-foreground shadow-sm border-red-200 grid gap-6">
                        <FormFieldInput
                            form={form.control}
                            name="address"
                            label={"Street Address"}
                            placeholder={"Enter your street address"}
                        />
                        <FormFieldInput
                            form={form.control}
                            name="city"
                            label={"City"}
                            placeholder={"Enter your city"}
                        />
                        <FormFieldInput
                            form={form.control}
                            name="state"
                            label={"State/Province"}
                            placeholder={"Enter your state or province"}
                        />
                        <FormFieldInput
                            form={form.control}
                            name="zipCode"
                            label={"Zip/Postal Code"}
                            placeholder={"Enter your zip or postal code"}
                        />
                        <FormFieldInput
                            form={form.control}
                            name="country"
                            label={"Country"}
                            placeholder={"Enter your country"}
                        />
                    </div>
                    <div className="flex justify-between">
                        <Button variant="outline" type="button" onClick={onBack}>
                            Back
                        </Button>
                        <Button className="bg-green-700" type="submit">
                            Continue
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}