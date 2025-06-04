"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Info, Loader2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import FormFieldInput from "./form fields/formFieldInput";
import { FormData } from "@/app/page";
import { useState } from "react";

// First step schema (only BVN and NIN)
const firstStepSchema = z.object({
    bvn: z.string()
        .min(11, { message: "BVN must be exactly 11 digits" })
        .max(11, { message: "BVN must be exactly 11 digits" })
        .regex(/^\d+$/, { message: "BVN must contain only numbers" }),
    nin: z.string()
        .min(11, { message: "NIN must be exactly 11 digits" })
        .max(11, { message: "NIN must be exactly 11 digits" })
        .regex(/^\d+$/, { message: "NIN must contain only numbers" }),
});

// Complete schema (all fields)
const fullSchema = firstStepSchema.extend({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    dateOfBirth: z.string().min(1, { message: "Date of birth is required" })
});

interface VerificationFormProps {
    initialData: FormData;
    onSuccess: (data: Partial<FormData>) => void;
}

export function VerificationForm({ initialData, onSuccess }: VerificationFormProps) {
    const [step, setStep] = useState<1 | 2>(1);
    const [isFetching, setIsFetching] = useState(false);
    const [fetchedData, setFetchedData] = useState<{
        firstName: string;
        lastName: string;
        dateOfBirth: string;
    } | null>(null);

    const form = useForm<z.infer<typeof fullSchema | typeof firstStepSchema>>({
        resolver: zodResolver(step === 1 ? firstStepSchema : fullSchema),
        defaultValues: {
            bvn: initialData.bvn,
            nin: initialData.nin,
            firstName: initialData.firstName,
            lastName: initialData.lastName,
            dateOfBirth: initialData.dateOfBirth
        },
    });

    // Simulate API call to fetch user data
    const fetchUserData = async (bvn: string, nin: string) => {
        setIsFetching(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock response - in a real app, this would be an API call
        const mockResponse = {
            firstName: "John", // Would come from API in real app
            lastName: "Doe",  // Would come from API in real app
            dateOfBirth: "1990-01-01" // Would come from API in real app
        };

        setFetchedData(mockResponse);
        setIsFetching(false);
        return mockResponse;
    };

    const handleFirstStepSubmit = async (values: z.infer<typeof firstStepSchema>) => {
        const userData = await fetchUserData(values.bvn, values.nin);

        // Update form with fetched data
        form.setValue("firstName", userData.firstName);
        form.setValue("lastName", userData.lastName);
        form.setValue("dateOfBirth", userData.dateOfBirth);

        setStep(2);
    };

    const handleSecondStepSubmit = (values: z.infer<typeof fullSchema>) => {
        onSuccess({
            bvn: values.bvn,
            nin: values.nin,
            firstName: values.firstName,
            lastName: values.lastName,
            dateOfBirth: values.dateOfBirth
        });
    };

    const onSubmit = async (values: z.infer<typeof fullSchema | typeof firstStepSchema>) => {
        if (step === 1) {
            await handleFirstStepSubmit(values as z.infer<typeof firstStepSchema>);
        } else {
            handleSecondStepSubmit(values as z.infer<typeof fullSchema>);
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-2xl font-bold text-green-700 mb-6">
                    Step 1: Identity Verification
                </h2>
                <p className="text-gray-600 mb-4">
                    {step === 1
                        ? "Please provide your BVN and NIN for verification"
                        : "Verify your personal information"}
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                    <div className="p-6 pt-6 rounded-lg border bg-card text-card-foreground shadow-sm border-red-200 grid gap-6">
                        {/* Always show BVN and NIN */}
                        <FormFieldInput
                            form={form.control}
                            maxLength={11}
                            type="text"
                            name="bvn"
                            label={"Bank Verification Number (BVN)"}
                            placeholder={"Enter your 11-digit BVN"}
                        />
                        <FormFieldInput
                            form={form.control}
                            type="text"
                            maxLength={11}
                            name="nin"
                            label={"National Identification Number (NIN)"}
                            placeholder={"Enter your 11-digit NIN"}
                        />

                        {/* Show these fields only in step 2 */}
                        {step === 2 && fetchedData && (
                            <>
                                <FormFieldInput
                                    form={form.control}
                                    name="firstName"
                                    label={"First Name"}
                                    placeholder={""}
                                    readOnly
                                />
                                <FormFieldInput
                                    form={form.control}
                                    name="lastName"
                                    label={"Last Name"}
                                    placeholder={""}
                                    readOnly
                                />
                                <FormFieldInput
                                    form={form.control}
                                    type="date"
                                    name="dateOfBirth"
                                    label={"Date of Birth"}
                                    placeholder=""
                                    readOnly
                                />
                            </>
                        )}
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                        <div className="flex">
                            <Info className="lucide lucide-circle-alert h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                            <div className="text-base text-yellow-700">
                                <p className="font-medium">Important</p>
                                <p>
                                    {step === 1
                                        ? "Please ensure your BVN and NIN are correct. We'll use them to fetch your information."
                                        : "Please verify your personal information. This cannot be changed later."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button
                            className="bg-green-700"
                            type="submit"
                            disabled={isFetching}
                        >
                            {isFetching ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Fetching data...
                                </>
                            ) : step === 1 ? (
                                "Fetch My Details"
                            ) : (
                                "Verify & Continue"
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}