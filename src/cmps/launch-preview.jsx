import { Link } from 'react-router-dom'

export function LaunchPreview(props) {
    const { id, links, name } = props.launch
    return <Link className="preview-card flex clean-link" to={`/launch/${id}`}>
        <img src={links.patch.large} alt="" />
        <h1>{name}</h1>
    </Link>

}