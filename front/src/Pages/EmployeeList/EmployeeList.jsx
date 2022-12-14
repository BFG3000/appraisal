import React, { useEffect, useState } from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import SaveIcon from '@material-ui/icons/Save';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import { Employees } from './dummyData';
import MUIDataTable from 'mui-datatables';
import { Button } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        ShadowJesus
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingLeft: 24, // keep right padding when drawer closed
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
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 36,
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
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
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

const EmployeeList = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setEmployeesList(Employees);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MuiTable: {
          root: {
            direction: 'rtl',
          },
        },

        MUIDataTableBodyCell: {
          root: {
            textAlign: 'right',
          },
        },
        MuiTablePagination: {
          actions: {
            direction: 'ltr',
          },
        },
      },
    });
  const columns = [
    {
      name: 'employee_name',
      label: 'الاسم',
    },
    {
      name: 'employee_code',
      label: 'كود الموظف',
    },
    {
      name: 'branch_name',
      label: 'الفرع',
    },
    {
      name: 'sector_name',
      label: 'القطاع',
    },
    {
      name: '',
      label: '',
      options: {
        customBodyRender(value) {
          return (
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button variant='contained' color='primary' size='small' className={classes.button} endIcon={<SaveIcon />} dir='ltr'>
                اهداف
              </Button>
              <Button variant='contained' color='primary' size='small' className={classes.button} endIcon={<SaveIcon />} dir='ltr'>
                تقييم
              </Button>
            </div>
          );
        },
      },
    },
  ];

  const options = {
    download: false,
    print: false,
    filter: true,
    searchOpen: true,
    responsive: 'simple',
    resizableColumns: false,
    selectableRows: 'none',
    elevation: 0,
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge='start' color='inherit' aria-label='open drawer' onClick={handleDrawerOpen} className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
            <MenuIcon />
          </IconButton>
          <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
            نظام التقييمات
          </Typography>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}>
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div dir='ltr'>
                  <MuiThemeProvider theme={getMuiTheme()}>
                    {/* @ts-ignore */}
                    <MUIDataTable title={''} data={employeesList} columns={columns} options={options} />
                  </MuiThemeProvider>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default EmployeeList;
