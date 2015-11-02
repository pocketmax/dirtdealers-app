Ext.define('Dirt.store.Companies', {
	extend: 'Ext.data.Store',
	storeId: 'companies',
	model: 'Dirt.model.Company',
	reader: 'json'
});