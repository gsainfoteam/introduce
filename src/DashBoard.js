import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Toolbar, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Footer from './Footer';
import { firstListItems, secondListItems, thirdListItems } from './listItems';
import {
  firstArticle,
  secondArticle,
  thirdArticle,
  fourthArticle,
  fifthArticle,
  sixthArticle,
  seventhArticle,
} from './Article';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(0),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const DashBoard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden,
            )}
          >
            <i className="material-icons">menu</i>
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            GSA Infoteam
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <i class="material-icons">close</i>
          </IconButton>
        </div>
        <Divider />
        <List>{firstListItems}</List>
        <Divider />
        <List>{secondListItems}</List>
        <Divider />
        <List>{thirdListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <span
                id="first"
                style={{
                  display: 'block',
                  height: 112,
                  marginTop: -112,
                  visibility: 'hidden',
                }}
              />
              <Paper className={classes.paper}>{firstArticle}</Paper>
            </Grid>
            <Grid item xs={12}>
              <span
                id="second"
                style={{
                  display: 'block',
                  height: 112,
                  marginTop: -112,
                  visibility: 'hidden',
                }}
              />
              <Paper className={classes.paper}>{secondArticle}</Paper>
            </Grid>
            <Grid item xs={12}>
              <span
                id="third"
                style={{
                  display: 'block',
                  height: 112,
                  marginTop: -112,
                  visibility: 'hidden',
                }}
              />
              <Paper className={classes.paper}>{thirdArticle}</Paper>
            </Grid>
            <Grid item xs={12}>
              <span
                id="fourth"
                style={{
                  display: 'block',
                  height: 112,
                  marginTop: -112,
                  visibility: 'hidden',
                }}
              />
              <Paper className={classes.paper}>{fourthArticle}</Paper>
            </Grid>
            <Grid item xs={12}>
              <span
                id="fifth"
                style={{
                  display: 'block',
                  height: 112,
                  marginTop: -112,
                  visibility: 'hidden',
                }}
              />
              <Paper className={classes.paper}>{fifthArticle}</Paper>
            </Grid>
            <Grid item xs={12}>
              <span
                id="sixth"
                style={{
                  display: 'block',
                  height: 112,
                  marginTop: -112,
                  visibility: 'hidden',
                }}
              />
              <Paper className={classes.paper}>{sixthArticle}</Paper>
            </Grid>
            <Grid item xs={12}>
              <span
                id="seventh"
                style={{
                  display: 'block',
                  height: 112,
                  marginTop: -112,
                  visibility: 'hidden',
                }}
              />
              <Paper className={classes.paper}>{seventhArticle}</Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default DashBoard;
