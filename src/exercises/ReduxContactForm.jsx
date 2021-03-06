import React from 'react';
import Title from '../components/Title';
import Section from '../components/Section';

const ReduxContactForm = () => (
    <div>
        <Title>Redux Exercise - Build a Contact Form Page</Title>
        <Section title="API" defaultOpen>
            <ul>
                <li>There is a simple web API served up by ExpressJS available for you to use so that you can focus on the front-end.</li>
                <li>http://localhost:3000/contact will retrieve all contacts</li>
                <li>http://localhost:3000/contact/:id will retrieve a specific contact</li>
                <li>POSTing to http://localhost:3000/contact will create a new contact</li>
                <li>
                    The contact object consists of the following properties
                    <ul>
                        <li><em>name</em> - string</li>
                        <li><em>phoneNumber</em> - number</li>
                        <li><em>phoneType</em> - one of (CELL, HOME, WORK)</li>
                        <li><em>email</em> - string</li>
                        <li><em>message</em> - string</li>
                    </ul>
                </li>
            </ul>
        </Section>
        <Section title="Instructions" defaultOpen>
            <ul>
                <li>There is an <em>exercises/redux/Contact.jsx</em> file in the training materials that can be the entry point for your Redux app.</li>
                <li>
                    Create a simple contact form that performs the following.
                    <ul>
                        <li>lists the current number of submitted contacts</li>
                        <li>allows a user to add a new contact</li>
                        <li>displays a loading state when the request is in-flight</li>
                        <li>displays a confirmation page upon submission.</li>
                        <li>displays an error page if the request failed</li>
                        <li>lists the currently submitted contacts</li>
                        <li>allows the user to sort and filter the contacts</li>
                    </ul>
                </li>
                <li>
                    Dependencies you will need
                    <ul>
                        <li>Redux</li>
                        <li>React-Redux</li>
                        <li>React-Router-Redux (optional)</li>
                        <li>ImmutableJS (optional)</li>
                        <li>redux-immutable (Optional)</li>
                    </ul>
                </li>
                <li><a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en" target="_blank">Redux Dev Tools</a></li>
            </ul>
        </Section>
    </div>
);

export default ReduxContactForm;