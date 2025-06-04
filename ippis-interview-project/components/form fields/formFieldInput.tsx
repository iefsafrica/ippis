import React from 'react'
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from '../ui/form'
import { Input } from '../ui/input'

const FormFieldInput = ({ name, label, placeholder, form, description, maxLength, type = "text", readOnly = false }: { readOnly?: boolean; type?: React.HTMLInputTypeAttribute; name: string, label: string, placeholder: string, form: any, description?: string, maxLength?: number }) => {
    return (
        <FormField
            control={form.control}
            name={name}

            render={({ field }) => (
                <FormItem className='grid gap-0'>
                    <FormLabel className='mb-2 text-base'>{label}</FormLabel>
                    <FormControl>
                        <Input readOnly={readOnly} maxLength={maxLength} className='py-2 mb-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' type={type} placeholder={placeholder} {...field} />
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