const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'Homepage';
        },
    },

    {
        method: '*',
        path: '/',
        handler: (req, h) => {
            return 'Halaman tidak dapat di akses dengan method tersebut!';
        },
    },

    {
        method: 'GET',
        path: '/about',
        handler: (req, h) => {
            return 'About page'
        },
    },

    {
        method: '*',
        path: '/about',
        handler: (req, h) => {
            return 'Halaman tidak dapat di akses dengan metdoh tersebut!'
        },
    },

    {
        method: '*',
        path: '/{any*}',
        handler: (req, h) => {
            return 'Halaman tidak dapat di temukan!'
        },
    },

    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (req, h) =>{
            const { name = 'stranger' } = req.params;
            const { lang } = req.query;

            if ( lang === 'id' ){
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        },
    },

    {
        method: 'POST',
        path: '/login',
        handler: (req, h) => {
            const { username, password } = req.payload;
            return `Welcome ${username}!`;
    },

    }
];

module.exports = routes;