import * as React from 'react';
import NavHeader from './NavHeader';
import NavFooter from './NavFooter';

class FeedPage extends React.Component {
    render() {
        return (
            <>
            <NavHeader />
            <h1>This is the feed page!</h1>
            <NavFooter />
            </>
        );
    }
}

export default FeedPage;