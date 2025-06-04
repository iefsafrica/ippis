"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import {
    Form,

} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FormFieldInput from "./form fields/formFieldInput"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function VerificationForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (

        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-green-700 mb-6">
                    Step 1: Identity Verification
                </h2>
                <p className="text-gray-600 mb-4">
                    Please provide your Bank Verification Number (BVN) and National Identification Number (NIN) for verification.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="p-6 pt-6 rounded-lg border bg-card text-card-foreground shadow-sm border-red-200 space-y-2">

                        <FormFieldInput
                            form={form.control}
                            name="bvn" label={"Bank Verification Number (BVN)"} placeholder={"Enter your 11-digit BVN"}
                        />
                        <FormFieldInput
                            form={form.control}
                            name="nin" label={"National Identification Number (NIN)"} placeholder={"Enter your 11-digit NIN"}
                        />
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                        <div className="flex">
                            <Info className="lucide lucide-circle-alert h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                            <div className="text-sm text-yellow-700">
                                <p className="font-medium">Important</p>
                                <p>
                                    Please ensure that you enter your correct BVN and NIN. These will be used to verify your identity and cannot be changed later.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">

                        <Button type="submit"> Verify & Continue</Button>
                    </div>
                </form>
            </Form>
        </div>
    )

}

export default VerificationForm