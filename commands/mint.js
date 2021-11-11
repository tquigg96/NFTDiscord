module.exports = {
	name: 'mint',
	description: "this is a nft minter request",
	execute(message, args){
		message.channel.send('Minty');
	}
}