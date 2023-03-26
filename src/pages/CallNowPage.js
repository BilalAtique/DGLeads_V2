import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Card, Button } from '@mui/material';
// components
import { DefaultCopyField } from '@eisberg-labs/mui-copy-field';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { alignProperty } from '@mui/material/styles/cssUtils';

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
                <Container sx={{ width: '40%' }}>
                    <Card sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column', py: 3 }}>
                        <Typography variant='h5' >Phone</Typography>
                        <DefaultCopyField sx={{ my: 3 }} label="Click on copy Button" value={"+30 6907724914"} />
                        <Typography variant='h5'> Webiste URL</Typography>
                        <DefaultCopyField sx={{ my: 3 }} label="Click on copy Button" value={"www.letsgetdigi.com"} />
                        <Typography variant='h5' sx={{ mb: 3 }}> Call Now </Typography>
                        <Link to='/callf'>
                            < Button >
                                <Icon icon="carbon:phone-filled" height="50px" width="50px" color='#0a45a3' />
                            </Button>
                        </Link>
                    </Card>
                </Container>
            </Container >
        </>
    );
}


// import {CopyField} from '@eisberg-labs/mui-copy-field';

// <CopyField
//   label="Click on copy Button"
//   value={"Enter text"}
//   onCopySuccess={console.log}
//   onCopyError={console.log}
//   copyTooltip={"Some copy tooltip. Default is Copy"}
// />
