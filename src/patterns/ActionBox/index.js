import Box from '../../components/Box'

export default function ActionBox(props) {
  return (
    <Box>
      <h2 className='subTitle'>O que você deseja fazer?</h2>
      <form onSubmit={function handleCreateCommunity(event) {
        const formData = new FormData(event.target);
        const community = {
          title: formData.get('title'),
          imageUrl: formData.get('image'),
          ownerSlug: user
        }
        fetch('/api/communities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(community)
        })
        .then(async (response) => {
          const data = await response.json();
          const comm = data.record;
        const updatedCommunities = [...communities, community];
        setCommunity(updatedCommunities)
        })
      }}>
        <div>
          <input
            placeholder='Qual vai ser o nome da sua comunidade?'
            name='title'
            aria-label='Qual vai ser o nome da sua comunidade?'
            type='text'
            />
        </div>
        <div>
          <input
            placeholder='Coloque uma URL para usarmos de capa'
            name='image'
            aria-label='Coloque uma URL para usarmos de capa'
          />
        </div>
        <button>
          Criar comunidade
        </button>
      </form>
    </Box>
  )
}