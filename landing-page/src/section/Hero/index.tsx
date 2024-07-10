import { Box, Button, styled, Typography } from '@mui/material'
import icon1 from '../../asset/icon/Group 2.svg'

export const Hero = () => {
  return (
    <Herowrapper>
      <Box
        position="relative"
        top="40%"
        
        sx={{
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '40%',
        }}
      >        <Typography
          borderLeft={(theme) => `${theme.palette.primary.main}  solid 4px`}
          paddingLeft="5px"
          fontWeight="bold"
          fontSize="13px"
          position="absolute"
          right="-70%"
          top="-70%"
        >
          Transforming legal expertise with AI: <br />
          Your reliable assistant for smarter, <br />
          faster legal solutions.
        </Typography>
        <Typography
          position="relative"
          fontWeight="bold"
          fontSize="50px"
          textAlign="center"
        >
          Say hello to your legal AI Assistant
        </Typography>
        <Typography textAlign="center">
          AI Assistant automates routine contract tasks, all from within Juro's
          contract automation platform.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        marginTop="auto"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Box position="relative" height="78%">
          <img src={icon1} alt="" />
        </Box>
        <Button
          sx={{
            position: 'relative',
            bottom: '50%',
            borderRadius: '10px',
            background: 'transparent',
            border: (theme) => `${theme.palette.primary.main} solid 2px`,
            color: 'black',
            width: '200px',
            height: '50px',
          }}
        >
          <Typography fontSize="16px" fontWeight="bold">
            Get a demo
          </Typography>
        </Button>
        <Box
          sx={{
            '& img': {
              transform: 'rotateY(180deg)',
            },
          }}
          position="relative"
          height="78%"
        >
          <img src={icon1} alt="" />
        </Box>
      </Box>
    </Herowrapper>
  )
}

const Herowrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  position: relative;
  flex-direction:column;
  align-items: center;
  background:${theme.palette.secondary.main};
  height:100vh;
  & button {
    transition: all 0.5s;
  };
  & button:hover{
    transform: scale(1.1);
  }

`
)
