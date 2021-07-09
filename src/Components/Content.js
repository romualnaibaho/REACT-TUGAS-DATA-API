import React, { useState, useEffect } from "react"
import Post from '../Components/Post'
import Paginate from '../Components/Paginate'
import { connect } from 'react-redux'
import store from '../store/'
import axios from 'axios'

function Content(props){

    const [post, setPost] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    
    const fetchPosts = async () => {
        props.setLoading();
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPost(res.data);
        props.setLoading();

    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * props.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - props.postsPerPage;
    const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div>
            <Post post={currentPosts} loading={props.loading} />
            <Paginate store={store} paginate={paginate}/>
        </div>
    );
}

function mapStatetoProps(state){
    console.log('mapStatetoProps', state);
    return{
        postsPerPage: state.postsPerPage,
        loading: state.loading
    }
}

function mapDispatchtoProps(dispatch){
    return{
        setLoading : () => {
            const action = { type : 'CHANGE-LOADING' };
            dispatch(action);
        }
    }
}

export default connect( mapStatetoProps, mapDispatchtoProps )(Content);