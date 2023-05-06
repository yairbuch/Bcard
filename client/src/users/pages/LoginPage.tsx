import Container from '@mui/material/Container'
import PageHeader from '../../components/PageHeader'
import React from 'react'
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

const LoginPage = () => {
    // const user = true;
    const user = false;
    if(user) return <Navigate replace to={ROUTES.ROOT}/>
  return (
    <Container>
     <PageHeader title='Login Page' subtitle='In order to login please fill the login form and click the submit button'/>   
    </Container>
  )
}

export default LoginPage