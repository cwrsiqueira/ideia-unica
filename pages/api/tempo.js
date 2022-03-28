async function tempo(Request, Response) {
    const dynamicDate = new Date();


    Response.json({
        date: dynamicDate.toGMTString()
    })
}

export default tempo;