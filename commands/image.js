module.exports = {
	name: 'image',
	description: "Import an image",
	execute(message, args){
		message.channel.send('ImageRequest');
	}
}