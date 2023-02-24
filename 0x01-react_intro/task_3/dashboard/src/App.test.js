import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
    it('Renders without crashing', () => {
      const app = shallow(<App />);
    
      expect(app).toBeDefined();
    });
  });

  describe('App-header', () => {
    it('Renders a div with the class', () => {
      const app = shallow(<App />);
    
      expect(app.find('App-header')).toBeDefined();
    });
  });

  describe('App-body', () => {
    it('Renders a div with the class', () => {
      const app = shallow(<App />);
    
      expect(app.find('App-body')).toBeDefined();
    });
  });

  describe('App-footer', () => {
    it('Renders a div with the class', () => {
      const app = shallow(<App />);
    
      expect(app.find('App-footer')).toBeDefined();
    });
  });