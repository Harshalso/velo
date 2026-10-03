import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, ChevronDown, Heart, Leaf, Menu, ShieldCheck, Sparkles, X } from 'lucide-react';

const photos = {
  hero: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1100&q=85',
  woman: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=900&q=85',
  man: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377bed?auto=format&fit=crop&w=500&q=85',
  food: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85',
  walking: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85',
  coach: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85',
  bowl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85',
  yoga: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85'
};

const results = [
  { name: 'Aanya', detail: 'A more balanced everyday routine', tag: 'CONSISTENCY', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85' },
  { name: 'Rohan', detail: 'Building habits around a busy workday', tag: 'EVERYDAY ENERGY', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85' },
  { name: 'Meera', detail: 'Finding joy in nourishing meals', tag: 'MINDFUL LIVING', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=85' }
];

const faqs = [
  ['I have a busy schedule. Can Velo fit my routine?', 'Yes. Velo is designed specifically around real life: flexible meal ideas, realistic movement milestones, and sustainable habit coaching that seamlessly integrates into demanding work and family schedules.'],
  ['Do I have to give up my favourite foods?', 'No. Our philosophy is rooted in sustainable balance rather than strict elimination diets. We show you how to enjoy your favourite cultural and comfort foods while still achieving your health and energy goals.'],
  ['Do I need a gym membership?', 'Not at all. Your assigned Velo coach builds your movement program around your current lifestyle and equipment access — whether that means daily walking targets, bodyweight stretches, or home workouts.'],
  ['Is the plan personalized?', 'Yes, 100%. After you submit your health profile and goals, our certified nutrition and wellness specialists craft a custom roadmap tailored to your metabolism, daily schedule, dietary preferences, and target milestones.'],
  ['How do I get started?', 'Complete our consultation request form below. A member of our wellness team will review your profile and contact you within 24 hours to schedule your comprehensive 1-on-1 discovery call.']
];

function App() {
  const [seconds, setSeconds] = useState(300);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s > 0 ? s - 1 : 300), 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return <div className="site-shell">
    <div className="offer-bar"><Sparkles size={16} /> YOUR WELLNESS JOURNEY STARTS HERE <span className="offer-separator">·</span> DISCOVER VELO</div>
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Velo home"><span className="brand-mark">V</span><span>velo<span className="brand-dot">.</span></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
        <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
        <a href="#stories" onClick={() => setMenuOpen(false)}>Wellness stories</a>
        <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
        <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
      </nav>
      <a className="nav-cta" href="#consultation">Get started <ArrowRight size={17} /></a>
    </header>

    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> WELLNESS THAT WORKS WITH REAL LIFE</div>
          <h1>Small steps.<br /><em>Lasting change.</em></h1>
          <p className="hero-lede">Feel good in your everyday. Build healthier habits with practical food ideas, mindful movement, and support that meets you where you are.</p>
          <div className="hero-actions"><a className="button button-primary" href="#consultation">Find your starting point <ArrowRight size={18} /></a><a className="text-link" href="#approach">Explore the Velo way <span>↓</span></a></div>
          <div className="hero-trust"><div className="avatar-stack"><img src={results[0].image} alt="" /><img src={results[1].image} alt="" /><img src={results[2].image} alt="" /></div><div><div className="stars">★★★★★</div><span>Made for real people and real routines</span></div></div>
        </div>
        <div className="hero-visual">
          <div className="sphere-glow-backdrop" aria-hidden="true" />
          <div className="sphere-orbit-ring orbit-outer" aria-hidden="true">
            <span className="orbit-dot dot-1" />
            <span className="orbit-dot dot-2" />
          </div>
          <div className="sphere-orbit-ring orbit-inner" aria-hidden="true" />

          <div className="hero-image-wrap sphere-main">
            <img className="hero-image" src={photos.hero} alt="Fresh, colourful ingredients for a balanced meal in an attractive spherical presentation" />
            <div className="sphere-specular" aria-hidden="true" />
            <div className="sphere-depth-shadow" aria-hidden="true" />
          </div>

          <div className="micro-orb orb-coral" aria-hidden="true" />
          <div className="micro-orb orb-sage" aria-hidden="true" />

          <div className="floating-note note-top">
            <span className="note-icon"><Leaf size={18} /></span>
            <div><strong>Simple, balanced choices</strong><small>One day at a time</small></div>
          </div>
          <div className="floating-note note-bottom">
            <span className="note-icon note-heart"><Heart size={18} /></span>
            <div><strong>Your pace. Your progress.</strong><small>Progress over perfection</small></div>
          </div>
          <div className="hero-stamp spherical-badge">
            <div className="stamp-inner">
              <span>FEEL GOOD</span>
              <span className="stamp-highlight">DAILY <Sparkles size={13} /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="value-strip">
        <div><ShieldCheck /><span><strong>People-first</strong><small>Guidance that respects your life</small></span></div>
        <div><Leaf /><span><strong>Everyday-friendly</strong><small>Food and habits made practical</small></span></div>
        <div><Heart /><span><strong>Whole-person wellness</strong><small>More than a number on a scale</small></span></div>
      </section>

      <section className="section-wrap intro-section" id="approach">
        <div className="section-heading">
          <div className="eyebrow"><span className="eyebrow-line" /> A FRESH APPROACH</div>
          <h2>Wellness should fit<br />your <em>life, not the other way around.</em></h2>
          <p>Forget all-or-nothing routines. Velo helps make healthier choices feel approachable, flexible, and easier to return to every day.</p>
        </div>
        <div className="intro-grid">
          <div className="intro-photo"><img src={photos.food} alt="Fresh salad and wholesome ingredients" /><span className="photo-label">NOURISH, DON'T RESTRICT</span></div>
          <div className="intro-content">
            <div className="intro-number">01 / THE VELO MINDSET</div>
            <h3>You don't need a perfect plan.<br /><em>You need a plan you can live with.</em></h3>
            <p>Busy weeks happen. Favourite foods belong at the table. And progress rarely moves in a straight line. Our approach focuses on sustainable habits instead of quick fixes.</p>
            <ul className="check-list"><li><Check /> Practical ideas for everyday meals</li><li><Check /> Flexible movement, at your level</li><li><Check /> Encouragement without guilt or extremes</li></ul>
            <a className="text-link link-dark" href="#how-it-works">See how Velo works <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="stories-section" id="stories">
        <div className="section-wrap">
          <div className="stories-header"><div><div className="eyebrow"><span className="eyebrow-line" /> EVERYDAY INSPIRATION</div><h2>Different lives.<br /><em>Small wins that matter.</em></h2></div><p>Wellness is personal. Celebrate the habits, energy, and confidence you build along the way.</p></div>
          <div className="story-grid">{results.map((person, i) => <article className="story-card" key={person.name}><div className="story-image"><img src={person.image} alt={`Portrait representing ${person.name}`} /><span className="story-tag">{person.tag}</span></div><div className="story-body"><div className="story-index">VELO JOURNAL / 0{i + 1}</div><h3>{person.name}'s everyday reset</h3><p>{person.detail}. A reminder that meaningful change can start with one doable choice.</p><a href="#consultation" className="story-link">Start your own story <ArrowRight size={16} /></a></div></article>)}</div>
        </div>
      </section>

      <section className="section-wrap formula-section" id="how-it-works">
        <div className="formula-copy"><div className="eyebrow"><span className="eyebrow-line" /> THE VELO METHOD</div><h2>Three simple ways<br />to <em>feel more like you.</em></h2><p>Build a foundation with small, repeatable actions. Start with one area and add more when you feel ready.</p><a className="button button-primary" href="#consultation">Build my starting plan <ArrowRight size={19} /></a></div>
        <div className="formula-cards">
          <article className="formula-card"><span className="formula-num">01</span><div className="formula-icon"><Leaf /></div><h3>Nourish</h3><p>Explore balanced meals and familiar foods that make everyday eating enjoyable.</p><img src={photos.bowl} alt="A colourful bowl of fresh vegetables" /></article>
          <article className="formula-card formula-card-raised"><span className="formula-num">02</span><div className="formula-icon"><Heart /></div><h3>Reconnect</h3><p>Notice your energy, celebrate small wins, and make room for rest and reflection.</p><img src={photos.yoga} alt="A calm yoga and mindfulness practice" /></article>
          <article className="formula-card"><span className="formula-num">03</span><div className="formula-icon"><Sparkles /></div><h3>Move</h3><p>Find movement you enjoy, from a short walk to a gentle stretch at home.</p><img src={photos.woman} alt="A person enjoying an active lifestyle" /></article>
        </div>
      </section>

      <section className="quote-section"><div className="quote-mark">“</div><blockquote>Healthy habits aren't built in a day.<br /><em>They're built one day at a time.</em></blockquote><p>THE VELO PHILOSOPHY</p></section>

      <section className="section-wrap included-section">
        <div className="included-visual"><img src={photos.coach} alt="A friendly wellness professional" /><div className="included-badge"><Heart size={19} /><span>Support for<br />your real life</span></div></div>
        <div className="included-copy"><div className="eyebrow"><span className="eyebrow-line" /> YOUR WELLNESS TOOLKIT</div><h2>A little support<br />can go a <em>long way.</em></h2><p>Make your next step feel clearer with approachable tools and thoughtful guidance.</p><div className="included-list"><div><span className="included-check"><Check /></span><span><strong>A one-to-one conversation</strong><small>Share your goals, preferences, and everyday routine.</small></span></div><div><span className="included-check"><Check /></span><span><strong>Practical ideas to try</strong><small>Explore meal inspiration and realistic activity ideas.</small></span></div><div><span className="included-check"><Check /></span><span><strong>Room to adjust as you go</strong><small>Build a routine that can evolve with your life.</small></span></div><div><span className="included-check"><Check /></span><span><strong>A focus on the whole you</strong><small>Make space for rest, wellbeing, and consistency.</small></span></div></div><a className="button button-primary" href="#consultation">Talk to the Velo team <ArrowRight size={19} /></a></div>
      </section>

      <section className="faq-section" id="faq"><div className="section-wrap faq-layout"><div><div className="eyebrow"><span className="eyebrow-line" /> GOOD TO KNOW</div><h2>Your questions,<br /><em>answered simply.</em></h2><p>Not sure where to begin? Here are a few helpful details.</p><div className="faq-side-note"><Sparkles /><span>Still curious?<br /><strong>We're happy to help.</strong></span></div></div><div className="faq-list">{faqs.map(([q, a], i) => <div className={openFaq === i ? 'faq-item faq-active' : 'faq-item'} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown size={20} /></button>{openFaq === i && <p>{a}</p>}</div>)}</div></div></section>

      <section className="consult-section" id="consultation"><div className="consult-shape consult-shape-one"></div><div className="consult-shape consult-shape-two"></div><div className="consult-inner"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> YOUR NEXT CHAPTER</div><h2>Ready to make<br />wellness <em>your own?</em></h2><p>Tell us a little about yourself. Your first step can be a small one.</p>{submitted ? <div className="success-message"><Check size={24} /><div><strong>Thank you! Your request has been received.</strong><span>Our dedicated wellness advisory team will review your health profile and reach out within 24 hours to schedule your welcome call.</span></div></div> : <form className="consult-form" onSubmit={handleSubmit}><label>Your name<input name="name" placeholder="e.g. Priya Sharma" required /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label><label>What would you like support with?<select name="goal" defaultValue="" required><option value="" disabled>Select your main goal</option><option>Everyday nutrition</option><option>Building a movement routine</option><option>More mindful habits</option><option>General wellness</option></select></label><button className="button button-light" type="submit">Request a conversation <ArrowRight size={19} /></button><small>By submitting, you agree to receive tailored guidance and updates from Velo Wellness. Your information is kept strictly confidential.</small></form>}</div></section>
    </main>

    <footer className="footer"><div className="footer-top"><a className="brand brand-footer" href="#top"><span className="brand-mark">V</span><span>velo<span className="brand-dot">.</span></span></a><p>Feel good in your everyday.<br />One small step at a time.</p><a className="back-top" href="#top">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Velo Wellness Inc. All rights reserved.</span><span>Made for real life, with care.</span></div></footer>

    <div className="sticky-cta"><div className="sticky-copy"><span className="sticky-label">A SMALL STEP STARTS HERE</span><strong>Make room for a healthier routine.</strong></div><div className="sticky-timer"><span>{minutes}</span><b>:</b><span>{secs}</span><small>INTRO OFFER</small></div><a className="button button-primary sticky-button" href="#consultation">Get started <ArrowRight size={17} /></a></div>
  </div>;
}

export default App;
