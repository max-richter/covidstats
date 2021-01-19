import * as React from 'react';
import NavHeader from './NavHeader';
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
                            First Question
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Body of the card</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Second Question
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Body of the card</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Page.Content>
            </>
        );
    }
}

export default AboutPage;