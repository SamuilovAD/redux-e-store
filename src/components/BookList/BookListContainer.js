import React,{Component} from "react";
import BookListItem from "./BookListItem";
import './BookList.css';
import {connect} from 'react-redux';
import withBookService from "../hoc";
import {fetchBooks} from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}><BookListItem book={book} onAddedToCart={()=> onAddedToCart(book.id)}/></li>
                    )}
                )
            }
        </ul>
    )
};

class BookListContainer extends Component{

    componentDidMount() {
        this.props.fetchBooks();
    }

    render(){
        const {books, loading, error, onAddedToCart} = this.props;
        if (loading) {
            return (<Spinner/>);
        }

        if (error) {
            return (<ErrorIndicator/>);
        }

        return (
            <BookList books={books} onAddedToCart={onAddedToCart}/>
        )
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};
};

const mapDispatchToProps = (dispatch, {bookStoreService}) => {
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default withBookService()(
    connect(mapStateToProps,mapDispatchToProps)(BookListContainer)
);