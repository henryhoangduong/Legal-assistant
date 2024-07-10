import { Box, styled, Typography } from '@mui/material'
import { FC } from 'react'
interface CardType {
  img: string
  name: string
  shortDesc: string
}

export const Card: FC<CardType> = ({ img, name, shortDesc }) => {
  return (
    <CardWrapper>
        <Box
          sx={{
            '& img': {
              width: '190px',
              borderRadius: '10px',
            },
          }}
        >
          <img src={img} alt="" />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography fontSize="18px" margin="0 20px 0 20px" fontWeight="bold">
            {name}
          </Typography>
          <Typography color="gray" fontSize="10px">
            {shortDesc}
          </Typography>
        </Box>
    </CardWrapper>
  )
}

const CardWrapper = styled(Box)(
  ({ theme }) => `
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  height:100%;
  align-items: center;
  position: relative;
  border-radius: 10px;
    width:200px;
  background: white;
  padding:15px;
    transition: transform 0.3s ease-in-out;
cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`
)
