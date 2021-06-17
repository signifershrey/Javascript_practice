//Kis ki kitni range h

//Lexical of "This" Keyword
//Jab bhi lexical scope ki dikkat aaye , use arrow function

let data = {
    list: 'friend',
    names: ['a', 'b', 'c'],
    getFriends: function ()
        {
        console.log(this.list);
        console.log(this.list);

        this.names.map((item) =>
            console.log("friend ", item));
        }

}
data.getFriends();