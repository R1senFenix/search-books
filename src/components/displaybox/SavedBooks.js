import React from "react";
import Button from "./button/button";


const savedList = [
    {
        title: "firstBook",
        subtitle: "this is the first book",
        author: "first person",
        img: "./images/test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit. Massa sed elementum tempus egestas sed sed risus pretium. Diam sollicitudin tempor id eu nisl. Vulputate enim nulla aliquet porttitor lacus luctus. Amet volutpat consequat mauris nunc. Dignissim suspendisse in est ante in nibh. Quam nulla porttitor massa id. Tempor id eu nisl nunc mi ipsum faucibus vitae. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Vestibulum rhoncus est pellentesque elit ullamcorper. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Neque volutpat ac tincidunt vitae semper quis lectus. Consectetur lorem donec massa sapien faucibus et molestie. Dolor sit amet consectetur adipiscing elit ut. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Ac tortor dignissim convallis aenean et tortor at risus. Risus feugiat in ante metus. Fringilla urna porttitor rhoncus dolor purus non enim. Hendrerit gravida rutrum quisque non tellus orci ac. Aliquet eget sit amet tellus cras adipiscing enim eu. Mauris rhoncus aenean vel elit. Lorem ipsum dolor sit amet. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Congue nisi vitae suscipit tellus mauris. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. At elementum eu facilisis sed odio morbi. Vulputate ut pharetra sit amet. Mattis enim ut tellus elementum sagittis vitae et leo. Consectetur lorem donec massa sapien faucibus et molestie. Ac tortor vitae purus faucibus ornare. Orci sagittis eu volutpat odio facilisis. Eros donec ac odio tempor orci dapibus ultrices in. Tristique senectus et netus et."
    },
    {
        title: "secondBook",
        subtitle: "this is the second book",
        author: "second person",
        img: "./images/test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit. Massa sed elementum tempus egestas sed sed risus pretium. Diam sollicitudin tempor id eu nisl. Vulputate enim nulla aliquet porttitor lacus luctus. Amet volutpat consequat mauris nunc. Dignissim suspendisse in est ante in nibh. Quam nulla porttitor massa id. Tempor id eu nisl nunc mi ipsum faucibus vitae. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Vestibulum rhoncus est pellentesque elit ullamcorper. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Neque volutpat ac tincidunt vitae semper quis lectus. Consectetur lorem donec massa sapien faucibus et molestie. Dolor sit amet consectetur adipiscing elit ut. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Ac tortor dignissim convallis aenean et tortor at risus. Risus feugiat in ante metus. Fringilla urna porttitor rhoncus dolor purus non enim. Hendrerit gravida rutrum quisque non tellus orci ac. Aliquet eget sit amet tellus cras adipiscing enim eu. Mauris rhoncus aenean vel elit. Lorem ipsum dolor sit amet. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Congue nisi vitae suscipit tellus mauris. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. At elementum eu facilisis sed odio morbi. Vulputate ut pharetra sit amet. Mattis enim ut tellus elementum sagittis vitae et leo. Consectetur lorem donec massa sapien faucibus et molestie. Ac tortor vitae purus faucibus ornare. Orci sagittis eu volutpat odio facilisis. Eros donec ac odio tempor orci dapibus ultrices in. Tristique senectus et netus et."
    },
]

function SavedBooks() {

    let bookSorter = [];
    if (savedList) {
        bookSorter = savedList.map((book) => {
            return (
                <div>
                    <div className="title-row">
                        <div className="title-block">
                            <h5>{savedList.title}</h5>
                            <h5>{savedList.subtitle}</h5>
                            <h5>Written By: {savedList.author}</h5>

                        </div>
                        <div className="button-block">
                            <Button>View</Button>

                            <Button>Delete</Button>
                        </div>
                    </div>
                    <div className="description-row">
                        <div className="img-div">
                            <img src={savedList.img} alt="./notFound.jpeg"></img>
                        </div>
                        <div className="desc-div">
                            <p>{savedList.description}</p>
                        </div>
                    </div>
                </div>
            )

        })

    } else {
        return (
            <div>
                <p>Search <a href="/ResultsBooks">here</a> for books to save.</p>
            </div>
        )
    }



    return (
        <div className="border">
            <h4>Saved Books</h4>
            <div>{bookSorter}</div>
        </div>
    )
}

export default SavedBooks;