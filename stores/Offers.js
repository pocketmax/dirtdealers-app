Ext.define('Dirt.store.Offers', {
	extend: 'Ext.data.Store',
	storeId: 'offers',
	model: 'Dirt.model.Offer',
	reader: 'json'
});