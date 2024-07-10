import { Box } from '@mui/material'
import { styled } from '@mui/material'

export const NavBar = () => {
  return (
    <NavWrapper>
      <Box>Logo</Box>
      <ul>
        <li>Soluiton</li>
        <li>Platform</li>
        <li>Pricing</li>
        <li>About us</li>
      </ul>
      <button>Sign in</button>
    </NavWrapper>
  )
}

const NavWrapper = styled(Box)(
  ({ theme }) => `
    display: flex;
    background:${theme.palette.secondary.main};
    flex-direction: row;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    color: gray;
    & li {
        list-style: none;
        margin: 0 10px 0 10px;
        padding:  0 10px 0 10px;
        border-right: gray 2px solid;
    }
    & ul {
        display: flex;
    }
    & button{
    background: #C54C5A;
    border: none;
    padding: 10px;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    }
`
)
