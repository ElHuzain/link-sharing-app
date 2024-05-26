import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
// @ts-ignore
const UserDetailsInput = ({ form }) => {
    return (
        <div className="bg-light-gray p-4 space-y-4 p-[20px]">
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 items-center'>
                        <FormLabel className="w-full font-normal !text-body-m text-gray">Username</FormLabel>
                        <FormControl>
                            <Input className="w-full px-4" placeholder="Enter your username" {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem className='grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 items-center'>
                        <FormLabel className="w-full font-normal !text-body-m text-gray">Description</FormLabel>
                        <FormControl>
                            <Input className="px-4" placeholder="Short description.." {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
        </div>
    )
}

export default UserDetailsInput