import React from 'react'
import { Grid, FormGroup, TextareaAutosize, Box, Button } from '@mui/material'
import Header from '../components/Header'
import FooterRosa from '../components/FooterRosa'

export default function EditSpaces() {
  return (
    <>
      <Grid container l={12} className="100-vh">
        <Box
          className="header-edit-spaces"
          sx={{
            mt: 0,
            bgcolor: '#E2A0FF',
            height: '10rem',
            width: '100%',
          }}
        >
          <Header />
        </Box>
        <Grid
          container
          className="Form-container"
          style={{
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FormGroup
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#00000',
              width: '22rem',
              height: '25rem',
              borderRadius: '1rem',
              border: '2px solid #ea20ff',
              lineHeight: '1px',
              marginTop: '4rem',
            }}
          >
            <Box style={{ lineHeight: '1px' }}>
              <p>Nom de l'espai:</p>
              <input
                type="text"
                style={{
                  width: 'auto',
                  fontSize: '1.1rem',
                  borderRadius: '1rem',
                  border: '0.1rem solid grey',
                }}
              />
            </Box>
            <Box style={{ lineHeight: '1px' }}>
              <p>Fotografia (url):</p>
              <input
                type="text"
                style={{
                  color: '#000000',
                  width: 'auto',
                  fontSize: '1.1rem',
                  borderRadius: '10px',
                  border: '1px solid grey',
                }}
              />
            </Box>
            <Box style={{ lineHeight: '1px' }}>
              <p>Ubicació:</p>
              <input
                type="text"
                style={{
                  color: '#000000',
                  width: 'auto',
                  fontSize: '1.1rem',
                  borderRadius: '10px',
                  border: '1px solid grey',
                }}
              />
            </Box>

            <Box style={{ lineHeight: '1px' }}>
              <p>Aforament:</p>
              <input
                type="text"
                style={{
                  fontSize: '1.1rem',
                  borderRadius: '10px',
                  border: '1px solid grey',
                }}
              />
            </Box>
            <Box style={{ lineHeight: '1px' }}>
              <p>Descripció:</p>
              <TextareaAutosize
                maxRows={6}
                aria-label="maximum height"
                placeholder="Escriu una breu descripció..."
                defaultValue=""
                style={{
                  fontFamily: 'Consolas',
                  fontSize: '1.1rem',
                  marginTop: 0,
                  borderRadius: '10px',
                  border: '1px solid grey',
                }}
              />
            </Box>
          </FormGroup>
          <Grid item className="Buttons-row" style={{ margin: '2rem 2rem' }}>
            <Button
              style={{
                backgroundColor: '#E2A0FF',
                width: '6rem',
                height: '1.8rem',
                borderRadius: '40px',
                color: 'black',
                textTransform: 'capitalize',
                fontSize: '1rem',
                fontWeight: '200',
                border: '2.5px solid grey',
              }}
            >
              Afegir +
            </Button>
            <Button
              style={{
                backgroundColor: '#E2A0FF',
                width: '6rem',
                height: '1.8rem',
                borderRadius: '40px',
                color: 'black',
                textTransform: 'capitalize',
                fontSize: '1rem',
                fontWeight: '200',
                border: '2.5px solid grey',
                margin: '0.8rem',
              }}
            >
              Editar
            </Button>
            <Button
              style={{
                backgroundColor: '#E2A0FF',
                width: '6rem',
                height: '1.8rem',
                borderRadius: '40px',
                color: 'black',
                textTransform: 'capitalize',
                fontSize: '1rem',
                fontWeight: '200',
                border: '2.5px solid grey',
                margin: '0.8rem',
              }}
            >
              Eliminar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <FooterRosa />
    </>
  )
}
