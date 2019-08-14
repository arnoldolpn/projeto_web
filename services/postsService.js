var getPosts = function ()
{
    var posts = 
    [
        {
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'Meu Primeiro post',
            body: 'Meu Primeiro post blah blah'
        },
        {
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'Meu Segundo post',
            body: 'Meu segundo post blah blah'
        },
    ];
return posts;
}

module.exports = 
{
    getPosts: getPosts
}