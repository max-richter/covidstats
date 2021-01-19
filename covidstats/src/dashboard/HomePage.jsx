import * as React from 'react';
import axios from 'axios';
import moment from 'moment';
import {
    Page,
    Grid,
    StatsCard,
    Card,
    colors,
    Table,
    ProgressCard,
    Alert,
    Text
} from 'tabler-react';

import NavHeader from './NavHeader';
import NavFooter from './NavFooter';
import C3Chart from 'react-c3js';
import '/Users/max/Desktop/covidstats/covidstats/src/c3.css';

// TODO: research more into fixing imageURL (works for now but with link)
const domain = 'https://api.covidtracking.com';
const current = '/v1/us/current.json';

// sets time language to english
moment().locale('en');

// get historic values
let dayTwo = moment().subtract(2, 'days').format("YYYYMMDD").toLocaleString();
let dayThree = moment().subtract(3, 'days').format("YYYYMMDD").toLocaleString();
let dayFour = moment().subtract(4, 'days').format("YYYYMMDD").toLocaleString();
let dayFive = moment().subtract(5, 'days').format("YYYYMMDD").toLocaleString();
let daySix = moment().subtract(6, 'days').format("YYYYMMDD").toLocaleString();
let daySeven = moment().subtract(7, 'days').format("YYYYMMDD").toLocaleString();

// TODO remove recovered data point, deprecated

class HomePage extends React.Component {

    state = {
        newPos: 0,
        newNeg: 0,
        newDeaths: 0,
        totalDeaths: 0,
        hospitalized: 0,
        recovered: 0,
        newHosp: 0,
        currICU: 0,
        onVentilator: 0,
        trendTwo: 0,
        trendThree: 0,
        trendFour: 0,
        trendFive: 0,
        trendSix: 0,
        trendSeven: 0,
        yestPos: 0,
        yestNeg: 0,
        yestDeaths: 0,
        yestHosp: 0,
        yestTotalDeaths: 0,
        loadingCount: 0,
        pendConf: 0,
        yestConf: 0
    }

    getData() {
        let data;
        // get current US values
        axios.get(domain + current).then(res => {
            data = res.data;
            this.setState({
                newPos: data[0].positiveIncrease,
                newNeg: data[0].negativeIncrease,
                newDeaths: data[0].deathIncrease,
                totalDeaths: data[0].death,
                hospitalized: data[0].hospitalizedCurrently,
                newHosp: data[0].hospitalizedIncrease,
                currICU: data[0].inIcuCurrently,
                onVentilator: data[0].onVentilatorCurrently,
                pendConf: data[0].pending
            })
        });

        // last api calls
        axios.get(domain + '/v1/us/' + dayTwo + '.json').then(res => {
            this.setState({
                trendTwo: res.data.positiveIncrease,
                yestPos: res.data.positiveIncrease,
                yestNeg: res.data.negativeIncrease,
                yestDeaths: res.data.deathIncrease,
                yestHosp: res.data.hospitalizedIncrease,
                yestTotalDeaths: res.data.death,
                yestConf: res.data.pending
            });
        });
        axios.get(domain + '/v1/us/' + dayThree + '.json').then(res => {
            this.setState({ trendThree: res.data.positiveIncrease });
        });
        axios.get(domain + '/v1/us/' + dayFour + '.json').then(res => {
            this.setState({ trendFour: res.data.positiveIncrease });
        });
        axios.get(domain + '/v1/us/' + dayFive + '.json').then(res => {
            this.setState({ trendFive: res.data.positiveIncrease });
        });
        axios.get(domain + '/v1/us/' + daySix + '.json').then(res => {
            this.setState({ trendSix: res.data.positiveIncrease });
        });
        axios.get(domain + '/v1/us/' + daySeven + '.json').then(res => {
            this.setState({ trendSeven: res.data.positiveIncrease });
        });
        console.log("called");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.loadingCount !== nextState.value;
    }

    componentDidMount() {
        this.getData();
    }


    render() {

        /**
         * Calculates the percentage increase/decrease for stat cards
         * @param {*} today 
         * @param {*} yesterday 
         */
        function percentage(today, yesterday) {
            let temp = Math.round((today / yesterday) * 100);
            if (temp > 100) {
                temp = 100 - temp;
            } else {
                temp = temp - 100;
            }
            return temp;
        }

        return (
            <div>
                <NavHeader />
                <Page.Content title="National Data">
                    <Grid.Row cards={true}>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard
                                layout={1}
                                movement={percentage(this.state.newPos, this.state.yestPos)}
                                total={this.state.newPos.toLocaleString()}
                                label="New Positive Cases" />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard
                                layout={1}
                                movement={percentage(this.state.newNeg, this.state.yestNeg)}
                                total={this.state.newNeg.toLocaleString()}
                                label="New Negative Cases"
                            />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard
                                layout={1}
                                movement={percentage(this.state.newDeaths, this.state.yestDeaths)}
                                total={this.state.newDeaths.toLocaleString()}
                                label="New Daily Deaths"
                            />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard
                                layout={1}
                                movement={percentage(this.state.totalDeaths, this.state.yestTotalDeaths)}
                                total={this.state.totalDeaths.toLocaleString()}
                                label="Total Deaths"
                            />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard
                                layout={1}
                                movement={percentage(this.state.newHosp, this.state.yestHosp)}
                                total={this.state.hospitalized.toLocaleString()}
                                label="Hospitalized"
                            />
                        </Grid.Col>
                        <Grid.Col width={6} sm={4} lg={2}>
                            <StatsCard
                                layout={1}
                                movement={percentage(this.state.pendConf, this.state.yestConf)}
                                total={this.state.pendConf.toLocaleString()}
                                label="Pending Pos. Cases"
                            />
                        </Grid.Col>
                        <Grid.Col sm={4}>
                            <ProgressCard
                                header="Newly Hospitalized"
                                content={this.state.newHosp.toLocaleString()}
                                progressWidth={100}
                                progressColor="blue"
                            />
                        </Grid.Col>
                        <Grid.Col sm={4}>
                            <ProgressCard
                                header="Currently in ICU"
                                content={this.state.currICU.toLocaleString()}
                                progressColor="purple"
                                progressWidth={100}
                            />
                        </Grid.Col>
                        <Grid.Col sm={4}>
                            <ProgressCard
                                header="Patients on Ventilators"
                                content={this.state.onVentilator.toLocaleString()}
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
                                                this.state.newPos,
                                                this.state.trendTwo,
                                                this.state.trendThree,
                                                this.state.trendFour,
                                                this.state.trendFive,
                                                this.state.trendSix,
                                                this.state.trendSeven,
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
                                            <Table.Col className="text-nowrap">{moment().format('LL')}</Table.Col>
                                            <Table.Col>{this.state.newPos.toLocaleString()}</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">{moment().subtract(1, 'days').format('LL')}</Table.Col>
                                            <Table.Col>{this.state.trendTwo.toLocaleString()}</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">{moment().subtract(2, 'days').format('LL')}</Table.Col>
                                            <Table.Col>{this.state.trendThree.toLocaleString()}</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">{moment().subtract(3, 'days').format('LL')}</Table.Col>
                                            <Table.Col>{this.state.trendFour.toLocaleString()}</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">{moment().subtract(4, 'days').format('LL')}</Table.Col>
                                            <Table.Col>{this.state.trendFive.toLocaleString()}</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">{moment().subtract(5, 'days').format('LL')}</Table.Col>
                                            <Table.Col>{this.state.trendSix.toLocaleString()}</Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col className="text-nowrap">{moment().subtract(6, 'days').format('LL')}</Table.Col>
                                            <Table.Col>{this.state.trendSeven.toLocaleString()}</Table.Col>
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
                                documentation on GitHub.
                            </Alert>
                            <Grid.Row>
                                <Grid.Col sm={12}>
                                    <Card>
                                        <Card.Header>
                                            <Card.Title>ICU Status (% of admitted patients)</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <C3Chart
                                                style={{ height: "16rem" }}
                                                data={{
                                                    columns: [
                                                        ["notInICU", percentage(this.state.hospitalized, this.state.currICU)],
                                                        ["inICU", percentage(this.state.currICU, this.state.hospitalized)],
                                                    ],
                                                    type: "donut",
                                                    colors: {
                                                        notInICU: colors["red"],
                                                        inICU: colors["red-light"]
                                                    },
                                                    names: {
                                                        notInICU: "non-ICU",
                                                        inICU: "ICU"
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
                                            <Card.Title>Ventilator Status (% of admitted patients)</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <C3Chart
                                                style={{ height: "16rem" }}
                                                data={{
                                                    columns: [
                                                        ["nonICU", percentage(this.state.hospitalized, this.state.onVentilator)],
                                                        ["ventilator", percentage(this.state.onVentilator, this.state.hospitalized)],
                                                    ],
                                                    type: "pie",
                                                    colors: {
                                                        nonICU: colors["blue-dark"],
                                                        ventilator: colors["blue-light"],
                                                    },
                                                    names: {
                                                        nonICU: "non-Ventilator",
                                                        ventilator: "Ventilator"
                                                    }
                                                }}
                                            />
                                        </Card.Body>
                                        <Card.Footer>
                                            <Text.Small>
                                                Note: Every state has a different way of reporting this statistic.
                                                Use this graph as an approximate visual representation of the percentage of
                                                patients who are admitted to the hospital and currently on a ventilator.
                                            </Text.Small>
                                        </Card.Footer>
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