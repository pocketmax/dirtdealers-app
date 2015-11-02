Ext.define('Dirt.store.Deals', {
	extend: 'Ext.data.Store',
	storeId: 'deals',
	model: 'Dirt.model.Deal',
	reader: 'json'
});