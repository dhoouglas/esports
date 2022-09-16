import express, { request } from "express";

const app = express();

// localhost:3333/ads

// HTTP methods / API RESTful (GET, POST, PUT, PATCH, DELETE) / HTTP Codes

app.get('/games', (request, response) => {
    return response.json([]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([])
});

app.get("/games/:id/ads", (request, response) => {
    // const gameId = request.params.id;

    return response.json([
        { id: 1, nome: "Anúncio 1" },
        { id: 2, nome: "Anúncio 2" },
        { id: 3, nome: "Anúncio 3" },
        { id: 4, nome: "Anúncio 4" },
        { id: 5, nome: "Anúncio 5" },
    ])
});

app.get("/ads/:id/discord", (request, response) => {
    // const adId = request.params.id;

    return response.json([])
});

app.listen(3333);