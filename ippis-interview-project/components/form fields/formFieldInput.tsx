import React from 'react'
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from '../ui/form'
import { Input } from '../ui/input'

const FormFieldInput = ({ name, label, placeholder, form, description, type = "text" }: { type?: React.HTMLInputTypeAttribute; name: string, label: string, placeholder: string, form: any, description?: string }) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input className='' type={type} placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormDescription>
                        {description}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
export default FormFieldInput