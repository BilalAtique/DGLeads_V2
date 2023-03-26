import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Typography, Grid, Card, Button } from '@mui/material';
import { DefaultCopyField } from '@eisberg-labs/mui-copy-field';
import CallIcon from '@mui/icons-material/Call';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

// components

// ----------------------------------------------------------------------

export default function CallFirst() {
    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title> Call Now | DigiLeads </title>
            </Helmet>

            <Container>
                <Typography variant="h4" >
                    Call Now
                </Typography>
            </Container>
            <Container sx={{ width: '70%' }} >
                <Card sx={{ my: 6, py: 2 }} >
                    <Grid>
                        <Grid>
                            <Grid container
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="center"
                                sx={{ pz: 5 }}>
                                <Grid>
                                    <Typography variant='h5' sx={{ px: 1 }}>Phone</Typography>
                                    <DefaultCopyField sx={{ my: 2, pz: 1 }} label="Click on copy Button" value={"+30 6907724914"} />
                                </Grid>
                                <Grid>
                                    <Typography variant='h5' sx={{ px: 1 }}> Webiste URL</Typography>
                                    <DefaultCopyField sx={{ my: 2, pz: 1 }} label="Click on copy Button" value={"www.letsgetdigi.com"} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container
                            direction="row"
                            justifyContent="space-around"
                            rowGap={5}
                            alignItems="center"
                            sx={{ py: 3, px: 3 }}>
                            <Button size='large' variant="contained" startIcon={<CallIcon />}>
                                Answered
                            </Button>
                            <Button size='large' variant="outlined" startIcon={<DeleteOutlineIcon />}>
                                Wrong Number
                            </Button>
                            <Button size='large' variant="contained" startIcon={<VoicemailIcon />}>
                                Voice Mail
                            </Button>
                            <Button size='large' variant="outlined" startIcon={<NoAccountsIcon />}>
                                No Answer
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>
    );
}
