"use client"

import { FormData } from "@/app/page";
import { Button } from "@/components/ui/button";

interface ConfirmationProps {
    data: FormData;
    onClick: () => void
}

export function Confirmation({ data, onClick }: ConfirmationProps) {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-2xl font-bold text-green-700 mb-6">
                    Registration Complete!
                </h2>
                <p className="text-gray-600 mb-4">
                    `Thank you for submitting your information. Here's what we received:`
                </p>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm border-green-200 grid md:grid-cols-2 gap-4">
                <div>

                    <h3 className="font-semibold text-lg">Personal Information</h3>
                    <p><span className="font-medium">Name:</span> {data.firstName} {data.lastName}</p>
                    <p><span className="font-medium">BVN:</span> {data.bvn}</p>
                    <p><span className="font-medium">NIN:</span> {data.nin}</p>
                    <p><span className="font-medium">Date of Birth:</span> {data.dateOfBirth}</p>
                </div>

                <div>

                    <h3 className="font-semibold text-lg mt-4">Address Information</h3>
                    <p><span className="font-medium">Address:</span> {data.address}</p>
                    <p><span className="font-medium">City:</span> {data.city}, {data.state} {data.zipCode}</p>
                    <p><span className="font-medium">Country:</span> {data.country}</p>
                </div>

                <div>

                    <h3 className="font-semibold text-lg mt-4">Professional Information</h3>
                    <p><span className="font-medium">Occupation:</span> {data.occupation}</p>
                    <p><span className="font-medium">Company:</span> {data.company}</p>
                    <p><span className="font-medium">Experience:</span> {data.experience} years</p>
                    <p><span className="font-medium">Skills:</span> {data.skills}</p>
                </div>
                <div>

                    <h3 className="font-semibold text-lg mt-4">Preferences</h3>
                    <p><span className="font-medium">Newsletter:</span> {data.newsletter ? "Subscribed" : "Not subscribed"}</p>
                    <p><span className="font-medium">Notifications:</span> {data.notifications ? "Enabled" : "Disabled"}</p>
                </div>

            </div>

            <div className="flex justify-center">
                <Button className="bg-green-700" onClick={onClick}>
                    Finish
                </Button>
            </div>
        </div>
    );
}