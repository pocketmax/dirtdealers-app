Ext.define('Dirt.store.StreetAddresses', {
	extend: 'Ext.data.Store',
	storeId: 'streetaddresses',
	model: 'Dirt.model.StreetAddress',
	reader: 'json'
});