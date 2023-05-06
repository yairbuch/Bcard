import Container from '@mui/material/Container'
import React from 'react'
import { Navigate } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import ROUTES from '../../routes/routesModel'

const SignupPage = () => {
// const user =true;
const user =false;
    if(user) return <Navigate replace to={ROUTES.ROOT}/>
  return (
   <Container>
      <PageHeader
        title="Signup Page"
        subtitle="In order to register, fill out the form and click the submit button"
      />
    </Container>
  )
}

export default SignupPage