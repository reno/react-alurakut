import React from 'react';
import MainGrid from '../src/components/MainGrid'
import ProfileSidebar from '../src/patterns/ProfileSidebar'
import WelcomeBox from '../src/patterns/WelcomeBox'
import ActionBox from '../src/patterns/ActionBox'
import FriendsBox from '../src/patterns/FriendsBox'
import CommunitiesBox from '../src/patterns/CommunitiesBox'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';


export default function Home() {
  const user = 'reno';
  const [friends, setFriends] = React.useState([]);
  const [communities, setCommunities] = React.useState([]);
  React.useEffect(function() {
    fetch(`https://api.github.com/users/${user}/following`)
    .then(async (response) => {
      const data = await response.json();
      setFriends(data);
    })
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '18de62917b9f9417f77fd383d5b4fd',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id 
          title
          imageUrl
          ownerSlug
        }
      }` })
    })
    .then(async (response) => {
      const responseData = await response.json();
      const communities = responseData.data.allCommunities;
      setCommunities(communities);
    })
  }, [])

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar user={user}/>
        </div>
        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <WelcomeBox/>
          <ActionBox/>
        </div>
        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
          <FriendsBox title="Amigos" items={friends} maxItems={6}/>
          <CommunitiesBox title="Comunidades" items={communities} maxItems={6}/>
        </div>
      </MainGrid>
    </>
  )
}
