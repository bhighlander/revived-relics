'use client'

import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    image: null
});

const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

// need to add handleImageUpload hook

const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
};
  
  return (
    <form onSubmit={handleSubmit}>
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
                          label="Description"
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
                          // need to add onChange for imageuplaoder
                      />
                      <label htmlFor="image-upload">
                          <Button variant="contained" color="primary" component="span">
                              Upload Image
                          </Button>
                      </label>
                      <Button type="submit" variant="contained" color="primary">
                          Submit
                      </Button>
                  </form>
  )
}
