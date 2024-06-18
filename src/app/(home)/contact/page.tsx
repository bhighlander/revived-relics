import { Grid, Typography } from '@mui/material';
import ContactFormWrapper from '../../homeUi/contactForm';

export default function ContactPage() {
    return (
        <Grid container spacing={2} className='contact-page'>
            <Grid item xs={12} md={8} className='contact-column'>
                <Grid container spacing={2}>
                    <Grid item xs={12} className='contact-price-container shadow-md'>
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
                    </Grid>
                    <Grid item xs={12} className='contact-form-wrapper'>
                        <ContactFormWrapper />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} className='contact-logo'>
                <img src="./logotransparent.png" alt="Logo" className='logo-image' />
            </Grid>
        </Grid>
    );
}
