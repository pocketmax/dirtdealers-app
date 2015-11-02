Ext.define('Dirt.store.Properties', {
	extend: 'Ext.data.Store',
	storeId: 'properties',
	model: 'Dirt.model.Property',
	reader: 'json'
});