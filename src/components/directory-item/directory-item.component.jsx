import { Link, useNavigate } from 'react-router-dom';
import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
	const { id, title, imageUrl, route } = category;
	const navigate = useNavigate();
	const onNavigateHandler = navigate(route);
	return (
		<DirectoryItemContainer onClick={onNavigateHandler} key={id}>
			<BackgroundImage imageurl={imageUrl} />
			<Body>
				<h2 tabIndex={0}>{title}</h2>
				<Link to={route} aria-label={title}>
					Shop now
				</Link>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
