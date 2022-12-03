export interface IComment {

}

export interface IPlaylist {
	id: string;
	about: string;
	audioURL: string;
	comments: IComment[];
	imageURL: string;
	title: string
}
