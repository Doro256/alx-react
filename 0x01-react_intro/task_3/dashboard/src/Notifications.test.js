import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Notifications from './Notifications'


describe('Notifications', () => {
    it('Renders without crashing', () => {
      const notifications = shallow(<Notifications />);
    
      expect(Notifications).toBeDefined();
    });
  });

    it('Renders ul', () => {
      const notifications = shallow(<Notifications />);
    
      expect(notifications.find('ul')).toBeDefined();
    });

    it('Renders three list items', () => {
      const notifications = shallow(<Notifications />);
    
      expect(notifications.find('li')).toHaveLength(3);
    });
 
    it('Renders correct text', () => {
      const notifications = shallow(<Notifications />);
    
      expect(notifications.find('p').text()).toBe("Here is the list of notifications");
    });