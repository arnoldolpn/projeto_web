var getPosts = function ()
{
    var posts = 
    [
        {
            id: 1,
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'Meu Primeiro post',
            body: 'Meu Primeiro post blah blah'
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'Meu Segundo post',
            body: 'Meu segundo post blah blah'
        },
        {
            id: 3,
            title: 'Sistema Automático de Posts',
            image: 'post2.jpg',
            description: 'Novo sistema de posts maldito lazarento',
            body: 'Esse é o novo sistema automático de posts'
        },
    ];
return posts;
}

module.exports = 
{
    getPosts: getPosts
}