'use client'

import { Button, TextField } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function ContactForm() {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    image: null
});
const searchParams = useSearchParams()

useEffect(() => {
    setFormData((prevData) => ({
        ...prevData,
        email: searchParams.get("email") || "",
    }));
}, [searchParams])

const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

    return (
<form method="POST" action="https://formsubmit.co/bhighlandcode@gmail.com" encType="multipart/form-data">
<TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
        />
        <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
        />
        <TextField
            name="description"
            label="Detailed description of your project"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={formData.description}
            onChange={handleChange}
        />
        <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            type="file"
            name="image"
        />
        <label htmlFor="image-upload">
            <Button variant="contained" color="primary" component="span">
                Upload Image
            </Button>
        </label>
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />
    <br />
    <br />
    <Button type="submit" variant="contained" color="secondary">
            Submit
        </Button>
</form>
    )
}


export default function ContactFormWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
        </Suspense>
    )
}
