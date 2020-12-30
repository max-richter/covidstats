import * as React from 'react';
import {
    Page,
    Grid,
    StatsCard,
    Card,
    colors,
    Table,
    ProgressCard,
    Alert
} from 'tabler-react';

import NavHeader from './NavHeader';
import NavFooter from './NavFooter';
import C3Chart from 'react-c3js';
import '/Users/max/Desktop/covidstats/covidstats/src/c3.css';

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

                        <Grid.Col sm={4}>
                            <ProgressCard
                                header="Newly Hospitalized"
                                content="5,152"
                                progressWidth={100}
                                progressColor="blue"

                            />
                        </Grid.Col>
                        <Grid.Col sm={4}>
                            <ProgressCard
                                header="Currently in ICU"
                                content="22,838"
                                progressColor="purple"
                                progressWidth={100}
                            />
                        </Grid.Col>
                        <Grid.Col sm={4}>
                            <ProgressCard
                                header="Patients on Ventilators"
                                content="7,885"
                                progressColor="red"
                                progressWidth={100}
                            />
                        </Grid.Col>

                        <Grid.Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>Case Trend</Card.Title>
                                </Card.Header>
                                <C3Chart
                                    style={{ height: "10rem" }}
                                    data={{
                                        columns: [
                                            [
                                                "cases",
                                                345,
                                                213,
                                                145,
                                                84,
                                                130,
                                                213,
                                                145,
                                            ],
                                        ],
                                        type: "area",
                                        groups: [["cases"]],
                                        colors: {
                                            cases: colors["blue-dark"],
                                        },
                                        names: {
                                            cases: "Cases",
                                        },
                                    }}
                                    axis={{
                                        y: {
                                            padding: {
                                                bottom: 0,
                                            },
                                            show: false,
                                            tick: {
                                                outer: false,
                                            },
                                        },
                                        x: {
                                            padding: {
                                                left: 0,
                                                right: 0,
                                            },
                                            show: false,
                                        },
                                    }}
                                    legend={{
                                        show: true,
                                        position: "bottom",
                                        padding: 0,
                                    }}
                                    tooltip={{
                                        format: {
                                            title: function (x) {
                                                return "";
                                            },
                                        },
                                    }}
                                    padding={{
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                    }}
                                    point={{
                                        show: true,
                                    }}
                                />
                                <Table
                                    cards={true}
                                    striped={true}
                                    responsive={true}
                                    className="table-vcenter"
                                >
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.ColHeader>Date</Table.ColHeader>
                                            <Table.ColHeader>New Cases</Table.ColHeader>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">December 30, 2020</Table.Col>
                                            <Table.Col>123,654</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">December 29, 2020</Table.Col>
                                            <Table.Col>121,127</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">December 28, 2020</Table.Col>
                                            <Table.Col>121,127</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">December 27, 2020</Table.Col>
                                            <Table.Col>121,127</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">December 26, 2020</Table.Col>
                                            <Table.Col>121,127</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">December 25, 2020</Table.Col>
                                            <Table.Col>121,127</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">December 24, 2020</Table.Col>
                                            <Table.Col>121,127</Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Card>
                        </Grid.Col>

                        <Grid.Col md={6}>
                            <Alert type="info">
                                <Alert.Link
                                    href="https://github.com/max-richter"
                                    target="_blank"
                                >
                                    Check out the project's
                                </Alert.Link>{" "}
                                documentation on GitHub
                            </Alert>
                            <Grid.Row>
                                <Grid.Col sm={12}>
                                    <Card>
                                        <Card.Header>
                                            <Card.Title>ICU Status</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <C3Chart
                                                style={{ height: "16rem"}}
                                                data={{
                                                    columns: [
                                                        ["notInICU", 68],
                                                        ["inICU", 32],
                                                    ],
                                                    type: "donut",
                                                    colors: {
                                                        notInICU: colors["red"],
                                                        inICU: colors["red-light"]
                                                    },
                                                    names: {
                                                        notInICU: "Admitted",
                                                        inICU: "Not Admitted"
                                                    },
                                                }}
                                                padding={{
                                                    bottom: 0,
                                                    top: 0
                                                }}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Grid.Col>
                                <Grid.Col sm={12}>
                                    <Card>
                                        <Card.Header>
                                            <Card.Title>Hospital Status</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <C3Chart 
                                                style={{height: "16rem"}}
                                                data={{
                                                    columns: [
                                                        ["nonICU", 72],
                                                        ["ICU", 6],
                                                        ["ventilator", 22],
                                                    ],
                                                    type: "pie",
                                                    colors: {
                                                        nonICU: colors["green-darkest"],
                                                        ICU: colors["green-darker"],
                                                        ventilator: colors["green-light"],
                                                    },
                                                    names: {
                                                        nonICU: "Admitted",
                                                        ICU: "ICU",
                                                        ventilator: "Ventilator"
                                                    }
                                                }}
                                            
                                            />
                                        </Card.Body>


                                    </Card>
                                </Grid.Col>
                            </Grid.Row>
                        </Grid.Col>

                    </Grid.Row>
                </Page.Content>
                <NavFooter />
            </div>

        );
    }
}

export default HomePage;