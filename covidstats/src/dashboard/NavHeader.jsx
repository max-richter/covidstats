import * as React from 'react';
import { Site, Button, } from 'tabler-react';
import { NavLink, withRouter } from 'react-router-dom';

// TODO: research more into fixing imageURL (works for now but with link)

class NavHeader extends React.Component {
    render() {
        
        // contains basic info for navbar items
        const navBarItems = [
            {
                value: "National",
                to: "/",
                useExact: true,
                LinkComponent: withRouter(NavLink)
            },
            {
                value: "State",
                to: "/state",
                useExact: true,
                LinkComponent: withRouter(NavLink)
            },
            {
                value: "Feed",
                to: "/feed",
                useExact: true,
                LinkComponent: withRouter(NavLink)
            },
            {
                value: "About",
                to: "/about",
                useExact: true,
                LinkComponent: withRouter(NavLink)
            }
        ]
        
        return (
            <div>
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
                <Site.Nav 
                    itemsObjects={navBarItems}
                
                />

            </div>

        );
    }
}

export default NavHeader;