$(document).ready(function(){
    //Recording Key Presses
    $('#search').on('keyup',function(e){
        var username = (e.target.value);
        //Make an ajax request
        $.ajax({
            url: "https://api.github.com/users/"+username,
            data: {
                client_id: "0cd8bf56a7d5c921f524",
                client_secret:"dea7a72aa722b2afaad6204db5317e426d8a4cf0"
            },
            //Returns a promise
        }).done(function(user){
            var output = '';
            //Use template literals to dynamically insert user profiles on to the DOM
            $('#profile').html(`
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h2 class="panel-title">${user.name}</h2>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="avi" src="${user.avatar_url}">
                            <br><br>
                            <a class="btn btn-success" href="https://github.com/JuruSteve" target="_blank">View Github Page</a>                            
                        </div>
                        <div class="col-md-9">
                            <ul class="list-group">
                                <li class="list-group-item"><span class="label label-default">Public Repos: ${user.public_repos}</span></li>
                                <li class="list-group-item"><span class="label label-primary">Public Gists: ${user.public_gists}</span></li>
                                <li class="list-group-item"><span class="label label-success">Followers ${user.followers}</span></li>
                                <li class="list-group-item"><span class="label label-info">Following ${user.following}</span></li>

                            </ul>
                            <h2>Bio</h2>
                            <h3 class="well">${user.bio}</h3>
                        </div>
                </div>
            </div>
            `);
        })
    })
});
