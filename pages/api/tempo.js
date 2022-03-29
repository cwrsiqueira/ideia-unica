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

    const response = await fetch("http://127.0.0.1:8000/api/auth/login", requestOptions);
    const user = await response.json();

    const resBarbers = await fetch("http://127.0.0.1:8000/api/barbers?token="+user.token);
    const barbers = await resBarbers.json();

    Response.json({
        date: dynamicDate.toGMTString(),
        barbers
    })
}

export default tempo;