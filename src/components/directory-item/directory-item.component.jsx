import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
	const { id, title, imageUrl } = category;
	return (
		<DirectoryItemContainer key={id}>
			<BackgroundImage imageurl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
