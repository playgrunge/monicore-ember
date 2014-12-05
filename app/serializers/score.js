import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	 normalize: function(type, hash, property) {
    // Ember Data use the zone name as the ID.
    hash.id = hash.awayTeam;

    // Delegate to any type-specific normalizations.
    return this._super(type, hash, property);
  }
});
