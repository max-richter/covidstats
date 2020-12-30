import * as React from 'react';
import {
    Page,
    Grid,
    StatsCard
} from 'tabler-react';

import NavHeader from './NavHeader';
import NavFooter from './NavFooter'

// TODO: research more into fixing imageURL (works for now but with link)

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NavHeader />
                <Page.Content title="National Data">
                    <Grid.Row cards={true}>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard layout={1} movement={4} total="50" label="New Positive Cases" />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard 
                                layout={1}
                                movement={-7}
                                total="98700"
                                label="New Negative Cases"
                            />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard 
                                layout={1}
                                movement={-7}
                                total="14"
                                label="New Daily Deaths"
                            />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard 
                                layout={1}
                                movement={-7}
                                total="18"
                                label="Total Deaths"
                            />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard 
                                layout={1}
                                movement={-7}
                                total="148"
                                label="Hospitalized"
                            />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard 
                                layout={1}
                                movement={-7}
                                total="48"
                                label="Recovered"
                            />
                        </Grid.Col>

                    </Grid.Row>
                </Page.Content>
                <NavFooter />
            </div>

        );
    }
}

export default HomePage;