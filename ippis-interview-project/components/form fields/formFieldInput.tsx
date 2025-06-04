import React from 'react'
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from '../ui/form'
import { Input } from '../ui/input'

const FormFieldInput = ({ name, label, placeholder, form, description, type = "text" }: { type?: React.HTMLInputTypeAttribute; name: string, label: string, placeholder: string, form: any, description?: string }) => {
    return (
        <FormField
            control={form.control}
            name={name}

            render={({ field }) => (
                <FormItem className='grid gap-0'>
                    <FormLabel className='mb-2'>{label}</FormLabel>
                    <FormControl>
                        <Input className='mb-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type={type} placeholder={placeholder} {...field} />
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