export default class BookStoreService {
    data = [
        {
            id: 1,
            title: 'Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming',
            author: 'Eric Matthes',
            price: 21,
            cover: 'https://m.media-amazon.com/images/I/81vmJCNCm6L._AC_UY218_.jpg'
        },
        {
            id: 2,
            title: 'Software Engineering at Google: Lessons Learned from Programming Over Time',
            author: 'Titus Winters',
            price: 39,
            cover: 'https://m.media-amazon.com/images/I/41LGOb9M6zL._AC_UY218_.jpg'
        },
    ];
    getBooks = () => {
        return new Promise((resolve) => {
            setTimeout(
                () => {
                    resolve(this.data)
                }, 700
            )
        });
    }
}
