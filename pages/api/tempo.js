async function tempo(Request, Response) {
    const dynamicDate = new Date();

    const requestData = {
        "email": "teste@email.com",
        "password": 123456
    }

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
    };

    const response = await fetch("https://devbarberapi.globalsitepro.com/api/auth/login", requestOptions);
    const user = await response.json();

    // const resBarbers = await fetch("https://devbarberapi.globalsitepro.com/api/barbers?token="+user.token);
    // const barbers = await resBarbers.json();

    Response.json({
        date: dynamicDate.toGMTString(),
        token:user.token
    })
}

export default tempo;