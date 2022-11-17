import SiteContent from './SiteContent';

const Routes = {
  About: '/' + SiteContent.AboutUsPage.Route,
  Contacts: '/' + SiteContent.ContactsPage.Route,
  Events: '/' + SiteContent.EventsPage.Route,
  Home: '/',
  Mentorships: '/' + SiteContent.MentorshipsPage.Route,
  PrivacyPolicy: '/' + SiteContent.PrivacyPolicyPage.Route,
  Team: '/' + SiteContent.TeamPage.Route,
  Workshops:'/' + SiteContent.WorkshopsPage.Route,
  NotFound404: '*',
};

export default Routes;