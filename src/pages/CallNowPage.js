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

            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Call Now
                </Typography>
                <Container sx={{ width: '50%' }}>
                    <Card>
                        <form>
                            <Typography variant='h4'>Phone</Typography>
                            <Input type="text" />
                            <Typography variant='h4'>Website Url</Typography>
                            <Input type="text" />
                        </form>
                    </Card>
                </Container>
            </Container>
        </>
    );
}
