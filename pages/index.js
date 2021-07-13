import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
  console.log(props);
  return (
    <Box>
      <img src={`https://github.com/${props.user}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const user = 'reno';
  const friends = [
    'omariosouto',
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
  ]

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar user={user} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({friends.length})
            </h2>
            <ul>
              {friends.map((friend) => {
                return (
                  <li>
                    <a href={`/users/${friend}`} key={friend}>
                      <img src={`https://github.com/${friend}.png`} />
                      <span>{friend}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidades
            </h2>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
