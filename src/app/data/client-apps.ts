import { ClientApp } from '../models/client-app';
/**
 * List of SMART on FHIR Client Applications defined in the SAMPLE APPLICATION
 */
export const CLIENT_APPS: ClientApp[] = [
    {
        name: 'CHBase PPE - Sample Standalone and EHR Launch App',
        uniqueName: 'chbaseppe1',
        clientId: '6faa0fe6-8eb2-4217-8c4f-0910f7fed0b5',
        redirectUri: 'http://localhost:4200/redirect/chbaseppe1',
        launchUrl: 'http://localhost:4200/launch/chbaseppe1',
        scopes: 'patient/*.*',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'chbaseppe',
        secret: '5e24b756-9a70-4ea7-a602-150c639280a3'
    },
    {
        name: 'CHBase PPE - Sample App - Live Demo',
        uniqueName: 'sampleappdocs',
        clientId: 'dc44e287-b68e-46db-877f-7f53c3a594d3',
        redirectUri: 'https://vmr1689.github.io/smart-on-fhir-tutorial-1/example-smart-app/',
        launchUrl: 'https://vmr1689.github.io/smart-on-fhir-tutorial-1/example-smart-app/launch.html',
        scopes: 'patient/*.*',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'chbaseppe',
        secret: 'c55a4f55-c639-4995-8696-d8bbd9c43db7'
    }
];
