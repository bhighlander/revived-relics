import { Grid, Typography } from '@mui/material';
import ContactForm from '../../homeUi/contactForm';

export default function ContactPage() {


    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <Typography variant="h4">Contact Us</Typography>
                <Typography variant="body1">
                    Prices Starting At:
                    <br />
                    Simple Glue Job (&lt; 3 pieces): $35
                    <br />
                    Simple Glue Job (&gt; 3 pieces): $50
                    <br />
                    Simple Glue Job + Patchwork and Color Matching: $85
                    <br />
                    Complex Glue Job: $125
                    <br />
                    Complex Glue Job + Patchwork and Color Matching: $175
                </Typography>
                <ContactForm />
            </Grid>
            <Grid item xs={12} sm={4}>
                <img src="./logotransparent.png" alt="Logo" style={{ width: '100%' }} />
            </Grid>
        </Grid>
    );
}
