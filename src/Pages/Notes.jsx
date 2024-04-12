import { Box,Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import NotesCard from '../Components/NotesCard'
const Notes = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
         {
          notes.map((note)=>(
            <Grid item xs={8}>
            <NotesCard/>
            </Grid>
          ))

         }
         </Grid>

      </Box>
    </>
  )
}
export default Notes;

const notes = [
  {
    id:1,
    subject:'AI',
    Title:'AI Unit-1 Notes',
    src: '../../Notes/AINotesUnit1.pdf'
  },
  {
    id:2,
    subject:'AI',
    Title:'AI Unit-1 Notes',
    src: '../../Notes/AINotesUnit2.pdf'
  },


]
