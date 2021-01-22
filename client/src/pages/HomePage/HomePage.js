import { Button, Typography, Box } from "@material-ui/core";
import { NavLink } from 'react-router-dom'

export default function HomePage() {
    return (
        <Box m={1} p={10}  display='flex' flexDirection='column' alignItems='center'>
            <Typography variant='h1' gutterBottom>Welcome</Typography>
            <Button variant='outlined' component={NavLink} to={`/heroes`}>List Hero</Button>
        </Box>
    )
}