const token =  '653d5fffd0676441c11b13ab90a9fdbce9f7f562b279a7ef'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://phonebook-nusn.onrender.com/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create:async (data: any = {}) => {
        const response = await fetch("https://phonebook-nusn.onrender.com/api/contacts",
        {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error("Failed to create new data server");   
        }

        return await response.json()
    },

    update:async (id:string, data: any) => {
        const response = await fetch(`https://phonebook-nusn.onrender.com/api/contacts/${id}`,
        {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error("Failed to create new data server");   
        }

        return await response.json()
    },

    delete:async (id:string) => {
        const response = await fetch(`https://phonebook-nusn.onrender.com/api/contacts/${id}`,
        {
            method: 'DELETE' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })
        
        if (!response.ok) {
            throw new Error("Failed to create new data server");   
        }

        return;
    },
    
}