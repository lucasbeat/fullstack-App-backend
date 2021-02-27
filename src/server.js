import server  from './app';

const port = process.env.PORT || 3535;

server.listen(port, () => {
    console.log('Servidor rodando');
});
