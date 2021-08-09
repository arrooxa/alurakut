import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '752d522c7d96932e9477739c54583a'

        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: '1003523',
            ...request.body,
        })

        response.json({
            dados: 'Um dado qualquer',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'Caso queria informações, utilize o método POST.'
    })
}