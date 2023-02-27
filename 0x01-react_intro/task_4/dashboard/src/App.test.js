import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';


describe('App', () => {
    it('Renders without crashing', () => {
      const app = shallow(<App />);
    
      expect(app).toBeDefined();
    });
  });

    it('Renders a div with the class', () => {
      const app = shallow(<App />);
    
      expect(app.find('App-header')).toBeDefined();
    });

    it('Renders a div with the class', () => {
      const app = shallow(<App />);
    
      expect(app.find('App-body')).toBeDefined();
    });
 
    it('Renders a div with the class', () => {
      const app = shallow(<App />);
    
      expect(app.find('App-footer')).toBeDefined();
    });
