import { PageIntro, Button } from '../components/UI';
export default function NotFound() {
  return <><PageIntro title="Page not found" body="This page wandered off. Let's get you back to the puppies." /><section className="nf"><Button to="/">Back home</Button></section></>;
}
