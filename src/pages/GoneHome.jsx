import { Link } from 'react-router-dom';
import { gone, goneAlt } from '../data/gone';
import { media } from '../lib/img';
import { PageIntro, Button, Img } from '../components/UI';
import { Reveal } from '../components/Reveal';
import { Sparkle, HeartDoodle } from '../components/Doodles';

export default function GoneHome() {
  return (
    <>
      <section className="page-intro gone-intro">
        <h1>Gone home</h1>
        <p>Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we'll help you find your match.</p>
        <Button to="/puppies">See available puppies</Button>
        <Sparkle className="gi-sp" /><HeartDoodle className="gi-h" />
      </section>
      <section className="tickets-section">
        <p className="hand ticket-label">tickets home</p>
        <ul className="tickets">
          {gone.map((g, i) => (
            <Reveal as="li" key={g.slug} delay={(i % 4) * 60}>
              <Link className="ticket" to={'/puppies/' + g.slug}>
                <div className="t-photo"><Img src={media(g.cover, 640)} alt={goneAlt(g)} /><span className="t-pill hand">one ticket home</span></div>
                <div className="t-stub">
                  <h3>{g.name}</h3>
                  <p>{g.breed}{g.named || true ? `, ${g.sex.toLowerCase()}` : ''}</p>
                  <div className="t-meta"><span>{g.source}</span><span className="hand">home ♥</span></div>
                  <small>admit one</small>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
