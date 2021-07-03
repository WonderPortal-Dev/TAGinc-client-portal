import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthButton from '../components/AuthButton';
import { UserContext } from '../contexts/UserContext';
// import material ui
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
} from '@material-ui/core';
import useStyles from './styles';
import Contact from './Contact';
// import image
// import allertImg from './img/IT-Consulting.jpeg';

const Home = () => {
  const { user, dispatch } = useContext(UserContext);
  const history = useHistory();
  //import styles
  const classes = useStyles();

  useEffect(() => {
    // console.log('user', user.decodedToken);

    if (user.type) {
      if (user.type === 'admin') history.push('/admin');
      if (user.type === 'client') history.push(`/client/${user.company.name}`);
      if (user.type === 'user') history.push(`/user/${user.name}`);
    }
  }, [user]);

  return (
    <>
      <div>
        Home page
        <button onClick={() => history.push('/admin2')}>
          ClientPage from first attempt
        </button>
        <button onClick={() => history.push('/admin')}>admin</button>
        <button onClick={() => history.push('/client/ABCorp')}>client</button>
        <button onClick={() => history.push('/user/randy')}>user</button>
        <button onClick={() => console.log('user', user)}>show user</button>
        <AuthButton />
      </div>
      <CssBaseline />
      <div>
        <Container maxWidth="md" height="25%" className={classes.background}>
          <Typography variant="h2" align="center" color="textPrimary">
            The Allert Group
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            We provide customized IT solutions to enhance communication,
            productivity, security and profitability so your company is equipped
            to attain its goals.
          </Typography>
        </Container>
      </div>
      <div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid key={1} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.squarespace-cdn.com/content/v1/57d8aa67f7e0abbf443c0c4b/1475530219939-1K3CAF4ALYD9PJZO41HH/image-asset.jpeg?format=500w"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    STRATEGIC CONSULTING
                  </Typography>
                  <Typography align="center">
                    We research, advise and implement the best way to manage
                    your IT system.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid key={2} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.squarespace-cdn.com/content/v1/57d8aa67f7e0abbf443c0c4b/1475530239740-QP7HGP3ETJ40YM7GUFRH/image-asset.jpeg?format=500w"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    MANAGED SERVICES
                  </Typography>
                  <Typography align="center">
                    We'll manage your IT infrastructure so you can run your
                    business.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid key={3} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.squarespace-cdn.com/content/v1/57d8aa67f7e0abbf443c0c4b/1475530271825-1ZR3FW16KKXMCSZ43DSC/image-asset.jpeg?format=500w"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="center"
                  >
                    DESKTOP & USER SUPPORT
                  </Typography>
                  <Typography align="center">
                    We provide on going support for your business, both remotely
                    and on ground.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div>
        <Container maxWidth="md">
          <Contact />
        </Container>
      </div>
      <div>
        <Container maxWidth="md">
          <footer className={classes.footer}>
            <Grid container spacing={4} maxWidth="md">
              <Grid key={1} item xs={6} s={6} m={6}>
                <Card>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      THE ALLERT GROUP
                    </Typography>
                    <Typography align="center">South Ozone Park </Typography>
                    <Typography align="center">Queens, NY 11420</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid key={2} item xs={6} s={6} m={6}>
                <Card>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      CONTACT US:
                    </Typography>
                    <Typography align="center">1 (646) 396-1329</Typography>
                    <Typography align="center">
                      sales@theallertgroup.com
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </footer>
        </Container>
      </div>
    </>
  );
};

export default Home;
