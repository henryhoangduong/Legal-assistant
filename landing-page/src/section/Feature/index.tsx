import { Box, styled, Typography } from '@mui/material'
import { useIsVisible } from '../../hook/useIsVisible'
import { useRef } from 'react'
import { Card } from '../../components/Card'

export const Feature = () => {
  const ref = useRef()
  const isVisible = useIsVisible(ref)
  if (isVisible) {
    console.log(ref)
  }
  return (
    <FeatureWrapper>
      <Typography>Feature</Typography>
      <Box
        ref={ref}
        height="50%"
        width="100%"
        position="relative"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        top="30%"
        left="-100%"
        padding="10px 100px 10px 100px"
        className={isVisible ? 'slide show' : 'slide'}
      >
        <Card
          name="Ask AI Lawyer"
          shortDesc="Legal research never been easier. Have a conversation with your virtual assistant, gain insights and simple answers to your complex questions in real-time."
          img="https://framerusercontent.com/images/F0VMRaZ45uMTDnhmy8uIkurDI8.jpg?scale-down-to=1024"
        />
        <Card
          name="Ask AI Lawyer"
          shortDesc="Legal research never been easier. Have a conversation with your virtual assistant, gain insights and simple answers to your complex questions in real-time."
          img="https://framerusercontent.com/images/NRN9R0CVLL8w2Ff6V277NlWHs.jpg?scale-down-to=1024"
        />
        <Card
          name="Ask AI Lawyer"
          shortDesc="Legal research never been easier. Have a conversation with your virtual assistant, gain insights and simple answers to your complex questions in real-time."
          img="	https://framerusercontent.com/images/eKUDo71PZfhYIjJLsYPONeoagpY.jpg?scale-down-to=1024"
        />
        <Card
          name="Ask AI Lawyer"
          shortDesc="Legal research never been easier. Have a conversation with your virtual assistant, gain insights and simple answers to your complex questions in real-time."
          img="https://framerusercontent.com/images/F0VMRaZ45uMTDnhmy8uIkurDI8.jpg?scale-down-to=1024"
        />
      </Box>
    </FeatureWrapper>
  )
}

const FeatureWrapper = styled(Box)(
  ({ theme }) => `
    display:flex;
    flex-direction: column;
    align-items:center;
    height:100vh;
    background: ${theme.palette.primary.main};
    & .slide{
    transition: all 1.5s;
    }
    & .show{
    left:0;
    }
`
)
