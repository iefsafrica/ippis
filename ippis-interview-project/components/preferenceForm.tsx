"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { FormData } from "@/app/page";

const formSchema = z.object({
    newsletter: z.boolean(),
    notifications: z.boolean(),
    terms: z.boolean().refine(val => val, {
        message: "You must accept the terms and conditions",
    }),
});

interface PreferencesFormProps {
    initialData: FormData;
    onSuccess: (data: Partial<FormData>) => void;
    onBack: () => void;
}

export function PreferencesForm({ initialData, onSuccess, onBack }: PreferencesFormProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newsletter: initialData.newsletter,
            notifications: initialData.notifications,
            terms: initialData.terms
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        onSuccess(values);
    }

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-2xl font-bold text-green-700 mb-6">
                    Step 4: Preferences
                </h2>
                <p className="text-gray-600 mb-4">
                    Please set your preferences and accept the terms.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                    <div className="p-6 pt-6 rounded-lg border bg-card text-card-foreground shadow-sm border-red-200 grid gap-6">
                        <FormField
                            control={form.control}
                            name="newsletter"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Subscribe to newsletter
                                        </FormLabel>
                                        <FormDescription>
                                            Receive updates and promotions via email
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="notifications"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Enable notifications
                                        </FormLabel>
                                        <FormDescription>
                                            Receive important account notifications
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Accept terms and conditions
                                        </FormLabel>
                                        <FormDescription>
                                            You must accept to continue
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-between">
                        <Button variant="outline" type="button" onClick={onBack}>
                            Back
                        </Button>
                        <Button className="bg-green-700" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}