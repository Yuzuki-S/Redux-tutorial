//function that returns the part of application responsible for storing the users. (eg. update, delete, change the users)

export default function () {
    return [
        {
            id:1,
            first: "Leslie",
            last: "Alldridge",
            age:26,
            github:"https://github.com/leslie-alldridge",
            image:"https://avatars0.githubusercontent.com/u/11302742?s=460&v=4"
        },
        {
            id:2,
            first: "Luke",
            last: "Chadwick",
            age:29,
            github:"https://github.com/lukechadwick",
            image: "https://avatars2.githubusercontent.com/u/6725655?s=460&v=4"
        },
        {
            id:3,
            first: "Yuzuki",
            last: "Sado",
            age:27,
            github:"https://github.com/Yuzuki-S",
            image: "https://avatars1.githubusercontent.com/u/36879321?s=460&v=4"
        }
    ]
}

//Reducers take in actions and update part of applications state