import * as React from 'react';
import axios from 'axios';
import moment from 'moment';
import NavHeader from './NavHeader';
import NavFooter from './NavFooter';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import C3Chart from 'react-c3js';
import stateData from './states.json';
import {
    Page,
    Grid,
    StatsCard,
    Card,
    colors,
    Table,
    ProgressCard,
    Alert,
    Header
} from 'tabler-react';
import '/Users/max/Desktop/covidstats/covidstats/src/c3.css';

const domain = 'https://api.covidtracking.com';
const states = stateData;

// sets time language to english
moment().locale('en');

// get historic values
let dayTwo = moment().subtract(3, 'days').format("YYYYMMDD").toLocaleString();
let dayThree = moment().subtract(4, 'days').format("YYYYMMDD").toLocaleString();
let dayFour = moment().subtract(5, 'days').format("YYYYMMDD").toLocaleString();
let dayFive = moment().subtract(6, 'days').format("YYYYMMDD").toLocaleString();
let daySix = moment().subtract(7, 'days').format("YYYYMMDD").toLocaleString();
let daySeven = moment().subtract(8, 'days').format("YYYYMMDD").toLocaleString();


class StatePage extends React.Component {

    state = {
        newPos: 0,
        newNeg: 0,
        newDeaths: 0,
        totalDeaths: 0,
        hospitalized: 0,
        newHosp: 0,
        lastUpdated: '',
        dataGrade: '',
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
        newTests: 0,
        yestTests: 0,
        selectedCounty: "WI",
        updated: 0,

    }

    getData() {
        // get current US values
        axios.get(domain + '/v1/states/' + this.state.selectedCounty + '/current.json').then(res => {
            console.log(res.data);
            this.setState({
                newPos: res.data.positiveIncrease,
                newNeg: res.data.negativeIncrease,
                newDeaths: res.data.deathIncrease,
                totalDeaths: res.data.death,
                hospitalized: res.data.hospitalizedCurrently,
                newHosp: res.data.hospitalizedIncrease,
                population: res.data.total,
                dataGrade: res.data.dataQualityGrade,
                newTests: res.data.totalTestResultsIncrease,
                lastUpdated: res.data.lastUpdateEt
            })
        });

        // last api calls
        axios.get(domain + '/v1/states/' + this.state.selectedCounty + '/' + dayTwo + '.json').then(res => {
            this.setState({
                trendTwo: res.data.positiveIncrease,
                yestPos: res.data.positiveIncrease,
                yestNeg: res.data.negativeIncrease,
                yestDeaths: res.data.deathIncrease,
                yestHosp: res.data.hospitalizedIncrease,
                yestTotalDeaths: res.data.death
            });
        })
            .catch((error) => {
                alert("ERROR: Looks like this state has issues reporting their data, please try again later.");
            });
        axios.get(domain + '/v1/states/' + this.state.selectedCounty + '/' + dayThree + '.json').then(res => {
            this.setState({
                trendThree: res.data.positiveIncrease,
                yestTests: res.data.totalTestResultsIncrease
            });
        });
        axios.get(domain + '/v1/states/' + this.state.selectedCounty + '/' + dayFour + '.json').then(res => {
            this.setState({ trendFour: res.data.positiveIncrease });
        });
        axios.get(domain + '/v1/states/' + this.state.selectedCounty + '/' + dayFive + '.json').then(res => {
            this.setState({ trendFive: res.data.positiveIncrease });
        });
        axios.get(domain + '/v1/states/' + this.state.selectedCounty + '/' + daySix + '.json').then(res => {
            this.setState({ trendSix: res.data.positiveIncrease });
        });
        axios.get(domain + '/v1/states/' + this.state.selectedCounty + '/' + daySeven + '.json').then(res => {
            this.setState({ trendSeven: res.data.positiveIncrease });
        });
        this.setState({ updated: 1 });
    }

    componentDidUpdate() {
        if (this.state.updated === 0) {
            this.getData();
            this.setState({ updated: 1 });
        }
    }

    componentDidMount() {
        this.getData();
    }

    onSelectHandler = (eventKey, event) => {
        let temp = event.target.innerHTML;
        this.setState({ selectedCounty: temp });
        this.setState({ updated: 0 });
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
            <>
                <NavHeader />

                <Alert type="primary" isDismissible>
                    <Header.H4>READ: Data Inconsistencies</Header.H4>
                    <p>
                        Due to how states report their data, there are many inconsistencies in regard to
                        some states not reporting the same categories of data. Unfortunately, there is no
                        way tell if states don't report the data listed below. Some states will report a
                        category of data one week and deprecate it the next.
                    </p>
                </Alert>

                <Page.Content title="Statewide Data">
                    <p>Select a State:</p>
                    <DropdownButton
                        title={this.state.selectedCounty}
                        id="dropdown-menu-align-right"
                        className="dropdown">
                        {states.map((data, index) => {
                            return (
                                <Dropdown.Item
                                    eventKey={index.toString()}
                                    onSelect={this.onSelectHandler}
                                    as="button"
                                >
                                    {data}
                                </Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
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
                                movement={percentage(this.state.newTests, this.state.yestTests)}
                                total={this.state.newTests.toLocaleString()}
                                label="New Tests Taken"
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
                                header="Last Updated"
                                content={this.state.lastUpdated.toLocaleString()}
                                progressColor="purple"
                                progressWidth={100}
                            />
                        </Grid.Col>
                        <Grid.Col sm={4}>
                            <ProgressCard
                                header="Data Quality Grade"
                                content={this.state.dataGrade}
                                progressColor="green"
                                progressWidth={100}
                            />
                        </Grid.Col>
                        <Grid.Col lg={12}>
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
                                                this.state.trendSeven,
                                                this.state.trendSix,
                                                this.state.trendFive,
                                                this.state.trendFour,
                                                this.state.trendThree,
                                                this.state.trendTwo,
                                                this.state.newPos,
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
                    </Grid.Row>
                </Page.Content>
                <NavFooter />
            </>
        );
    }
}

export default StatePage;