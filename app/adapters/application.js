import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://192.171.0.120:3001/api'
});

 
 export default ApplicationAdapter;

// export default DS.FixtureAdapter.extend();