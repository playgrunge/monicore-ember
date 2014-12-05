import DS from 'ember-data';
 
var Score = DS.Model.extend({
  homeScore: DS.attr('string'),
  awayScore: DS.attr('string'),
  event: DS.attr('string'),
  awayTeam: DS.attr('string'),
  homeTeam: DS.attr('string'),
  period: DS.attr('string')
});
 
// Match.reopenClass({
//   FIXTURES: [
//     {
//       id: 1,
//       awayTeam: 'CH',
//       homeTeam: 'Predateur'
//     },
//     {
//       id: 2,
//       awayTeam: 'Colorado',
//       homeTeam: 'Flyers'
//     }
//   ]
// });
 
export default Score;
