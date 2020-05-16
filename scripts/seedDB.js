const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/search-books-db"
);

const savedList = [

    {
        id: 1,
        title: "firstBook",
        subtitle: "this is the first book",
        author: "first person",
        img: "./images/notFound.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit. Massa sed elementum tempus egestas sed sed risus pretium. Diam sollicitudin tempor id eu nisl. Vulputate enim nulla aliquet porttitor lacus luctus. Amet volutpat consequat mauris nunc. Dignissim suspendisse in est ante in nibh. Quam nulla porttitor massa id. Tempor id eu nisl nunc mi ipsum faucibus vitae. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Vestibulum rhoncus est pellentesque elit ullamcorper. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Neque volutpat ac tincidunt vitae semper quis lectus. Consectetur lorem donec massa sapien faucibus et molestie. Dolor sit amet consectetur adipiscing elit ut. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Ac tortor dignissim convallis aenean et tortor at risus. Risus feugiat in ante metus. Fringilla urna porttitor rhoncus dolor purus non enim. Hendrerit gravida rutrum quisque non tellus orci ac. Aliquet eget sit amet tellus cras adipiscing enim eu. Mauris rhoncus aenean vel elit. Lorem ipsum dolor sit amet. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Congue nisi vitae suscipit tellus mauris. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. At elementum eu facilisis sed odio morbi. Vulputate ut pharetra sit amet. Mattis enim ut tellus elementum sagittis vitae et leo. Consectetur lorem donec massa sapien faucibus et molestie. Ac tortor vitae purus faucibus ornare. Orci sagittis eu volutpat odio facilisis. Eros donec ac odio tempor orci dapibus ultrices in. Tristique senectus et netus et."
    },
    {
        id: 2,
        title: "secondBook",
        subtitle: "this is the second book",
        author: "second person",
        img: "./images/test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit. Massa sed elementum tempus egestas sed sed risus pretium. Diam sollicitudin tempor id eu nisl. Vulputate enim nulla aliquet porttitor lacus luctus. Amet volutpat consequat mauris nunc. Dignissim suspendisse in est ante in nibh. Quam nulla porttitor massa id. Tempor id eu nisl nunc mi ipsum faucibus vitae. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Vestibulum rhoncus est pellentesque elit ullamcorper. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Neque volutpat ac tincidunt vitae semper quis lectus. Consectetur lorem donec massa sapien faucibus et molestie. Dolor sit amet consectetur adipiscing elit ut. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Ac tortor dignissim convallis aenean et tortor at risus. Risus feugiat in ante metus. Fringilla urna porttitor rhoncus dolor purus non enim. Hendrerit gravida rutrum quisque non tellus orci ac. Aliquet eget sit amet tellus cras adipiscing enim eu. Mauris rhoncus aenean vel elit. Lorem ipsum dolor sit amet. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Congue nisi vitae suscipit tellus mauris. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. At elementum eu facilisis sed odio morbi. Vulputate ut pharetra sit amet. Mattis enim ut tellus elementum sagittis vitae et leo. Consectetur lorem donec massa sapien faucibus et molestie. Ac tortor vitae purus faucibus ornare. Orci sagittis eu volutpat odio facilisis. Eros donec ac odio tempor orci dapibus ultrices in. Tristique senectus et netus et."
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(savedList))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
