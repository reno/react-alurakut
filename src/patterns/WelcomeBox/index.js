import Box from '../../components/Box'
import { OrkutNostalgicIconSet } from '../../lib/AlurakutCommons';

export default function WelcomeBox(props) {
  return (
    <Box>
      <h1 className='title'>
        Bem vindo(a)
      </h1>
      <OrkutNostalgicIconSet/>
    </Box>
  )
}