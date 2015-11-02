Ext.define('Dirt.store.Users', {
	extend: 'Ext.data.Store',
	storeId: 'users',
	model: 'Dirt.model.User',
	reader: 'json'
});