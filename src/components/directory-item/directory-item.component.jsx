import { useNavigate } from 'react-router-dom';
import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
	const { id, title, imageUrl, route } = category;
	const navigate = useNavigate();
	const onNavigateHandler = useNavigate(route);
	return (
		<DirectoryItemContainer onClick={onNavigateHandler} key={id}>
			<BackgroundImage imageurl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
