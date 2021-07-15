import { SiteClient } from 'datocms-client';

export default async function requestReceiver(request, response) {
    if(request.method === 'POST') {
        const TOKEN = process.env.DATO_TOKEN;
        const client = new SiteClient(TOKEN);
        console.log('TOKEN:', TOKEN)
        const record = await client.items.create({
            itemType: '968054', // model ID from Dato
            ...request.body,
        })
        response.json({
            data: record,
        })
        return;
    }
    response.status(404).json({
        message: 'Method not allowed.'
    })
} 