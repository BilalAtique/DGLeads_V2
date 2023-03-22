import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Card, Input } from '@mui/material';
// components
import Iconify from '../components/iconify';

// ----------------------------------------------------------------------

export default function CalNowPage() {
    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title> Call Now | DigiLeads </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Call Now
                </Typography>
                <Container>
                    <Grid item xs={12} md={6} lg={8}>
                        <Card>
                            <form>
                                <h2>Phone</h2>
                                <Input type="text" />
                                <h2>Website Url</h2>
                                <input type="text" />
                            </form>
                        </Card>
                    </Grid>
                </Container>
            </Container>
        </>
    );
}
