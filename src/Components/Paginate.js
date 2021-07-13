import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

function Paginate (props) {

    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <Container style={{marginTop:"3rem"}}>
            <ul>
                {pageNumbers.map(number => {
                    return(
                        <li key={number} className="mb-4">
                            <a onClick={() => props.paginate(number)} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    );
                })}
            </ul>
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