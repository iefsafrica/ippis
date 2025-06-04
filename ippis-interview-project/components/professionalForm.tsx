"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFieldInput from "./form fields/formFieldInput";
import { FormData } from "@/app/page";

const formSchema = z.object({
    occupation: z.string().min(1, { message: "Occupation is required" }),
    company: z.string().min(1, { message: "Company is required" }),
    experience: z.string().min(1, { message: "Experience is required" }),
    skills: z.string().min(1, { message: "Skills are required" }),
});

interface ProfessionalFormProps {
    initialData: FormData;
    onSuccess: (data: Partial<FormData>) => void;
    onBack: () => void;
}

export function ProfessionalForm({ initialData, onSuccess, onBack }: ProfessionalFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            occupation: initialData.occupation,
            company: initialData.company,
            experience: initialData.experience,
            skills: initialData.skills
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        onSuccess(values);
    }

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-2xl font-bold text-green-700 mb-6">
                    Step 3: Professional Information
                </h2>
                <p className="text-gray-600 mb-4">
                    Please provide your professional details.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                    <div className="p-6 pt-6 rounded-lg border bg-card text-card-foreground shadow-sm border-red-200 grid gap-6">
                        <FormFieldInput
                            form={form.control}
                            name="occupation"
                            label={"Occupation"}
                            placeholder={"Enter your occupation"}
                        />
                        <FormFieldInput
                            form={form.control}
                            name="company"
                            label={"Company"}
                            placeholder={"Enter your company name"}
                        />
                        <FormFieldInput
                            form={form.control}
                            name="experience"
                            label={"Years of Experience"}
                            placeholder={"Enter your years of experience"}
                            type="number"
                        />
                        <FormFieldInput
                            form={form.control}
                            name="skills"
                            label={"Skills"}
                            placeholder={"Enter your skills (comma separated)"}
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