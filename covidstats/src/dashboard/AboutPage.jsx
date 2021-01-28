import * as React from 'react';
import NavHeader from './NavHeader';
import NavFooter from './NavFooter';
import { Page } from 'tabler-react';
import {
    Accordion,
    Card
} from 'react-bootstrap';


class AboutPage extends React.Component {
    render() {
        return (
            <>
                <NavHeader />
                <Page.Content title="About CovidStats">
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Data Source
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    All data is acquired from the <a href="https://covidtracking.com/data/api"
                                        target="_blank" rel="noreferrer">
                                        The COVID Tracking Project</a>. The full dataset is updated by them between 5:30pm
                                and 7pm Eastern time. This data is not scraped and is gathered and double-checked by
                                humans. Note, the COVID Tracking Project relies on each state to report valid data each and
                                every day. There is no consistent reporting format amongst states, so the data collected
                                for this project is the most recent data available to the public.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Data Inconsistencies
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Due to how states collect their data, some states have fewer categories than others.
                                    For example, states like Wisconsin and California collect data on the amount of people who have
                                    "recovered" from the virus. Many other states don't collect this data or don't make it available to
                                    the public. I did my best to make sure I gathered data from categories that every state consistently
                                    reports, but I ultimately have no way of knowing if states stop reporting the categories listed on
                                    this site.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                Racial Data Dashboard
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    While this information isn't available from The COVID Tracking Project's API,
                                    they have a detailed dataset on the latest race and ethnicity data from every
                                    state/territory that reports it. You can find this data
                                <a href="https://covidtracking.com/race/dashboard" target="_blank"
                                        rel="noreferrer"> here.</a>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                Data Quality Grade
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    The COVID Tracking Project have created a category grading each state on how complete
                                    their data is. Does the state report their statistics in reliable and consistent manner?
                                    Are they reporting on COVID's effects on patients and the healthcare system?
                                    Do they categorize COVID's effect based on detailed demographics? How transparent are they
                                    with their reporting to the public? There are many more factors considered here, but the
                                    goal is to show which states are doing a good job reporting.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                                Check out the Project
                        </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    If you're interested in how I made this website, please check out the <a href="https://github.com/max-richter/covidstats"
                                        target="_blank"
                                        rel="noreferrer">GitHub repository</a>. Here you will find the code I wrote to bring this project to life.
                                        Have a feature suggestion? Please open up an "Issue" and I will try my best to implement it if the feature
                                        fits the project's scope.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Page.Content>
                <NavFooter />
            </>
        );
    }
}

export default AboutPage;