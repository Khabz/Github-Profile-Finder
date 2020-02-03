$(document).ready(function (){
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;

        //Make request to Github
        $.ajax({
            url: 'https://api.github.com/users/'+username,
            data: {
                client_id: 'd244d0eac5c4409babb8',
                client_secret: 'a98bf11cbc537ea848f9ed6434e7e7463db19240'
            }
        }).done(function (user){
            console.log(user);
        });
    });
});