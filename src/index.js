import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {

    return (
    <div className='ui container comments'>

        <ApprovalCard>
            <CommentDetail 
                author="Kimy" 
                timeAgo="today at 4pm" 
                commentDisplay='test'
                avatar={faker.image.image()}
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
                author="Danilo" 
                timeAgo="today at 5pm" 
                commentDisplay='test three'
                avatar={faker.image.image()}
            />
       </ApprovalCard>

       <ApprovalCard>
            <CommentDetail 
                author="Laura" 
                timeAgo="today at 6pm" 
                commentDisplay='test four'
                avatar={faker.image.image()}
            />
       </ApprovalCard>
    </div>
    )
    
}

ReactDOM.render(<App />, document.querySelector("#root"));