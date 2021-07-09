import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'

function Paginate (props) {

    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <Container className="mb-4 mt-4">
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => {
                        return(
                            <li key={number} className="page-item">
                                <a onClick={() => props.paginate(number)} href="!#" className="page-link">
                                    {number}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </Container>
    );
}

function mapStatetoProps(state){
    console.log('mapStatetoProps', state);
    return{
        postsPerPage: state.postsPerPage,
        totalPosts: state.totalPosts
    };
};

export default connect(mapStatetoProps)(Paginate);