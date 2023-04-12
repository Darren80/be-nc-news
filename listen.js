const listen = (app, PORT) => {
    app.listen(PORT, () => {c
        onsole.log(`Listening on ${PORT}...`)
    });
}

module.exports = listen;