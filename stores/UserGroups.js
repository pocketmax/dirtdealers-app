Ext.define('Dirt.store.UserGroups', {
	extend: 'Ext.data.Store',
	storeId: 'usergroups',
	model: 'Dirt.model.UserGroup',
	reader: 'json'
});