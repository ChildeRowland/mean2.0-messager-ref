
export class Message {
	content: string;
	userId: string;
	messageId: string;
	username: string;

	constructor(
		content: string,
		userId?: string, 
		messageId?: string, 
		username?: string){

		this.content = content;
		this.userId = userId;
		this.messageId = messageId;
		this.username = username;	
	}
}