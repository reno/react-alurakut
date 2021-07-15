import Box from '../../components/Box'
import { AlurakutProfileSidebarMenuDefault } from '../../lib/AlurakutCommons';
 
export default function ProfileSidebar(props) {
  return (
    <Box as='aside'>
      <img src={`https://github.com/${props.user}.png`} style={{ borderRadius: '8px' }} />
      <hr/>
      <p>
        <a className='boxLink' href={`https://github.com/${props.user}`}>
          @{props.user}
        </a>
      </p>
      <hr/>
      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}