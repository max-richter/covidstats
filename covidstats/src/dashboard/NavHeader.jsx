import * as React from 'react';
import { Site, Button } from 'tabler-react';

// TODO: research more into fixing imageURL (works for now but with link)

class NavHeader extends React.Component {
    render() { 
        return (
                <Site.Header 
                    imageURL="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
                    href="/"
                    alt="COVID Stats"
                    navItems={
                        <Button
                            href="https://github.com/max-richter/covidstats"
                            target="_blank"
                            outline
                            RootComponent="a"
                            color="info"
                        >
                            Source Code
                        </Button>
                    }
                />
        );
    }
}

export default NavHeader;