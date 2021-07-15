import { ProfileRelationsBoxWrapper } from '../../components/ProfileRelations'

export default function FriendsBox(props) {
  const friendList = props.items.slice(0, props.maxItems);
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {friendList.map((friend) => {
          return (
            <li key={friend.id}>
              <a href={`https://github.com/${friend.login}`}>
                <img src={`https://github.com/${friend.login}.png`}/>
                <span>{friend.login}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}