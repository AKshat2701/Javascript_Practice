

const model =
{
    username : "_akshatsrivastava",
    followers : 
    ["Rohit", "rahul", "ayushi", "Dhoni" , "Virat", "anushka", "samay Raina"],

    following :
    ["virat", "dhoni", "ronaldo", "messi", "sakshi", "anushka"],

    post :
    [
        {
            caption : "first post",
            like : 10,
            comments : 23
        },
        {
            caption: "life like this, i like this",
            like : 20,
            comments : 23
        }
    ],

    addPost(caption)
    {
        const newPost =
        {
            caption : caption,
            likes : 0
        };

        this.post.push(newPost)
        console.log("post added successfully")
    },

    followUser(user)
    {
        if(this.following.includes(user))
        {
            console.log("Already following this user")
            return
        }
        this.following.push(user);
        console.log(`Now following ${user}`)
    }
}

console.log(model.post)
model.followUser("ramesh")

