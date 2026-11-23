import { Link } from 'react-router-dom';
import { media } from '../lib/img';
import { altFor, subtitle } from '../data/puppies';
import { goneAlt } from '../data/gone';
import { Img } from './UI';

export function PuppyCard({ p, i = 0 }) {
  return (
    <Link className="puppy-card" to={'/puppies/' + p.slug} style={{ '--i': i % 4 }}>
      <div className="card-image">
        <Img src={media(p.cover, 640)} alt={altFor(p)} />
        <span className="available">Available</span>
        {p.video && <span className="video-pill">▶ video</span>}
      </div>
      <div className="card-copy"><h3>{p.name}</h3><p>{subtitle(p)}</p></div>
    </Link>
  );
}
export function GoneCard({ g, small = false }) {
  return (
    <Link className={'puppy-card gone-card' + (small ? ' small' : '')} to={'/puppies/' + g.slug}>
      <div className="card-image">
        <Img src={media(g.cover, 640)} alt={goneAlt(g)} />
        <span className="gone-pill">gone home ♥</span>
      </div>
      <div className="card-copy"><h3>{g.name}</h3></div>
    </Link>
  );
}
