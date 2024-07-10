import { Box, styled, Typography } from '@mui/material'

export const Blog = () => {
  return (
    <BlogWrapper>
      <Typography>Blog</Typography>
    </BlogWrapper>
  )
}

const BlogWrapper = styled(Box)(
  ({ theme }) => `
    display:flex;
    flex-direction: column;
    align-items:center;
    height:100vh;
    background: ${theme.palette.secondary.main}
`
)
