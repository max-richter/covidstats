import * as React from 'react';
import { Site, Grid, Button } from 'tabler-react';


class NavFooter extends React.Component {
    render() {
        return (
            <footer id="footer">
                <Site.Footer
                    className="customFooter"
                    note="A website containing national and statewide COVID-19 statistics."
                    copyright={
                        <>
                            Copyright © 2020 -
                            <a href="https://github.com/max-richter"
                                target="_blank"
                                rel="noreferrer"> Max
                        </a>
                        </>
                    }
                    nav={
                        <>
                            <Grid.Col auto={true}>
                                <Button
                                    href="https://github.com/max-richter/covidstats"
                                    target="_blank"
                                    outline
                                    size="sm"
                                    color="info"
                                    RootComponent="a"
                                >
                                    Check out the Project!
                            </Button>
                            </Grid.Col>
                        </>
                    }
                />
            </footer>

        );
    }
}

export default NavFooter;