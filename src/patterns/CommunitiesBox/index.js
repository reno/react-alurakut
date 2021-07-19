import { ProfileRelationsBoxWrapper } from '../../components/ProfileRelations'

export default function CommunitiesBox(props) {
  const communityList = props.items.slice(0, props.maxItems);
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className='smallTitle'>
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {communityList.map((community) => {
          return (
            <li key={community.id}>
              <a href={`/communities/${community.title}`}>
                <img src={community.imageUrl}/>
                <span>{community.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}