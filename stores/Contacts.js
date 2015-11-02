Ext.define('Dirt.store.Contacts', {
	extend: 'Ext.data.Store',
	storeId: 'contacts',
	model: 'Dirt.model.Contact',
	reader: 'json'
});