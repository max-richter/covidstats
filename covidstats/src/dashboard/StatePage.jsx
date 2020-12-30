import * as React from 'react';
import NavHeader from './NavHeader';
import NavFooter from './NavFooter';
import {
    Site,
    Button,
    Page,
    Grid,
    StatsCard
} from 'tabler-react';

class StatePage extends React.Component {
    render() {
        return (
            <>
                <NavHeader />
                <Page.Content title="State Data">
                    <Grid.Row cards={true}>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard layout={1} movement={4} total="67" label="New Positive Cases" />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard
                                layout={1}
                                movement={-7}
                                total="1356"
                                label="New Negative Cases"
                            />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard
                                layout={1}
                                movement={-7}
                                total="1445"
                                label="New Negative Cases"
                            />
                        </Grid.Col>
                    </Grid.Row>
                </Page.Content>
                <NavFooter />
            </>
        );
    }
}

export default StatePage;