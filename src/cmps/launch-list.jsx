
import { LaunchPreview } from './launch-preview.jsx'

export function LaunchList(props) {
        const { launches } = props
        return <section className="launch-list">
            {launches.slice(0, 20).map(launch =>
                <LaunchPreview key={launch.id} launch={launch} />
            )}
        </section>
}