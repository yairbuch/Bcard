import { Container } from '@mui/material'
import PageHeader from "./../../components/PageHeader";
import React from 'react'
import { useParams } from 'react-router-dom';


const CardEditPage = () => {
    const{ cardId }=useParams()
  return (
    <>
    <Container>
    <PageHeader title='Edit Card Page' subtitle='Here you can edits your cards'/>
      <div>
        Edit card: {cardId}
        </div>     
    </Container>
    </>
  )
}

export default CardEditPage