const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const content = fs.readFileSync(indexFile, 'utf8');

const navEndIndex = content.indexOf('</header>') + 9;
const footerStartIndex = content.indexOf('<!-- ═══════════════════════════════════════ FOOTER');

const headAndNav = content.substring(0, navEndIndex);
const footerAndScripts = content.substring(footerStartIndex);

function createPage(filename, title, mainContent) {
    let pageContent = headAndNav + '\n\n  <main class="pt-32 min-h-screen">\n' + mainContent + '\n  </main>\n\n  ' + footerAndScripts;
    
    // Update title
    pageContent = pageContent.replace(/<title>.*?<\/title>/, `<title>${title} — Divine Light Reiki</title>`);
    
    // Update nav active state (remove active from all, add to current)
    pageContent = pageContent.replace(/class="nav-link active/g, 'class="nav-link');
    
    if (filename !== "book.html") {
        // Find the href matching the filename and add active class
        const regex = new RegExp(`class="nav-link(.*?) href="${filename}"`, 'g');
        pageContent = pageContent.replace(regex, `class="nav-link active$1 href="${filename}"`);
    }

    fs.writeFileSync(path.join(__dirname, filename), pageContent, 'utf8');
    console.log(`Created ${filename}`);
}

// 1. Classes Page
const classesContent = `
    <section class="py-20 px-8 max-w-7xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-up">
        <div class="section-label font-label text-xs uppercase tracking-[0.42em] text-primary/70 mb-5">Curriculum</div>
        <h1 class="font-headline text-5xl md:text-7xl text-on-surface italic mb-6">Healing Classes</h1>
        <p class="text-on-surface-variant font-body max-w-2xl mx-auto text-lg leading-relaxed">Awaken your own healing abilities through our comprehensive Reiki certification programs and specialized spiritual workshops.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bento-card bg-surface-container rounded-[2rem] p-10 border border-outline-variant/14" data-aos="fade-up">
           <h3 class="font-headline text-3xl italic text-primary mb-4">Reiki Level I & II Certification</h3>
           <p class="text-on-surface-variant leading-relaxed mb-6">A foundational weekend intensive where you will receive your initial attunements, learn the history of Usui Reiki, and begin practicing hands-on healing.</p>
           <p class="font-bold text-on-surface mb-8">$450 • 2-Day Workshop</p>
           <button class="bg-primary text-on-primary px-8 py-3 rounded-full font-label font-bold text-sm hover:bg-primary-dim transition-all">Join Waitlist</button>
        </div>
        <div class="bento-card bg-secondary-container rounded-[2rem] p-10 border border-secondary-fixed-dim/18" data-aos="fade-up" data-aos-delay="100">
           <h3 class="font-headline text-3xl italic text-on-secondary-container mb-4">Reiki Master Certification</h3>
           <p class="text-on-secondary-container/80 leading-relaxed mb-6">For advanced practitioners ready to step into the role of a teacher and guide. Includes advanced attunements and instructional training.</p>
           <p class="font-bold text-on-secondary-container mb-8">$850 • 3-Day Retreat</p>
           <button class="bg-on-secondary-container text-secondary-container px-8 py-3 rounded-full font-label font-bold text-sm hover:bg-secondary-dim transition-all">Join Waitlist</button>
        </div>
      </div>
    </section>
`;
createPage("classes.html", "Classes", classesContent);

// 2. About Page
const aboutContent = `
    <section class="py-20 px-8 max-w-4xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-up">
        <h1 class="font-headline text-5xl md:text-7xl text-on-surface italic mb-6">About Jyoti</h1>
      </div>
      <div class="editorial rounded-[3rem] overflow-hidden shadow-2xl mb-16 aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/10]" data-aos="zoom-in">
         <img class="w-full h-full object-cover object-top" src="jyoti-portrait.jpg" alt="Jyoti">
      </div>
      <div class="space-y-6 text-on-surface-variant leading-relaxed text-lg font-body" data-aos="fade-up">
        <p>My journey into the healing arts began over a decade ago when a profound personal awakening shattered my conventional understanding of reality.</p>
        <p>I realized that true healing doesn't come from fixing what is broken, but from remembering what has always been whole. Through years of study under master teachers in Japan and Sedona, I have refined my practice to serve as a pure conduit for universal life force.</p>
        <p>At Divine Light Reiki, my mission is to hold a sacred mirror so that you can see your own radiance. Whether you are seeking physical relief, emotional balance, or spiritual clarity, the energy always goes exactly where it is needed most.</p>
      </div>
    </section>
`;
createPage("about.html", "About Jyoti", aboutContent);

// 3. Journal Page
const journalContent = `
    <section class="py-20 px-8 max-w-7xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-up">
        <h1 class="font-headline text-5xl md:text-7xl text-on-surface italic mb-6">The Journal</h1>
        <p class="text-on-surface-variant font-body max-w-2xl mx-auto text-lg leading-relaxed">Reflections on energy, consciousness, and the art of being human.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <article class="blog-card flex flex-col group cursor-pointer" data-aos="fade-up" data-aos-delay="0">
            <div class="blog-thumb aspect-[16/10] rounded-3xl mb-6 relative">
              <img class="w-full h-full object-cover"
                src="journal-1.png"
                alt="Ethereal hands" />
              <div
                class="absolute top-4 left-4 bg-surface-container-lowest/92 backdrop-blur px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-on-surface">
                Energy Tips</div>
              <div
                class="absolute inset-0 rounded-3xl bg-gradient-to-t from-on-surface/18 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              </div>
            </div>
            <h3
              class="font-headline text-3xl text-on-surface group-hover:text-primary transition-colors duration-400 mb-3">
              Awakening the Subtle Body</h3>
            <p class="text-base text-on-surface-variant line-clamp-2 font-body mb-4 leading-relaxed flex-1">Discover the ethereal anatomy that governs your emotional depth. Learn to consciously direct life force energy through the seven primary channels...</p>
            <div class="flex items-center justify-between">
              <time class="text-[10px] uppercase tracking-widest text-outline">Oct 12, 2023</time>
              <span
                class="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-400 text-sm">arrow_forward</span>
            </div>
          </article>

          <article class="blog-card flex flex-col group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <div class="blog-thumb aspect-[16/10] rounded-3xl mb-6 relative">
              <img class="w-full h-full object-cover"
                src="journal-2.png"
                alt="Calm ocean at sunrise" />
              <div
                class="absolute top-4 left-4 bg-surface-container-lowest/92 backdrop-blur px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-on-surface">
                Mindfulness</div>
              <div
                class="absolute inset-0 rounded-3xl bg-gradient-to-t from-on-surface/18 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              </div>
            </div>
            <h3
              class="font-headline text-3xl text-on-surface group-hover:text-primary transition-colors duration-400 mb-3">
              The Architecture of Stillness</h3>
            <p class="text-base text-on-surface-variant line-clamp-2 font-body mb-4 leading-relaxed flex-1">When the external world accelerates, the true sanctuary is found within. A guide to cultivating unbreakable inner peace through anchored breathing...</p>
            <div class="flex items-center justify-between">
              <time class="text-[10px] uppercase tracking-widest text-outline">Oct 05, 2023</time>
              <span
                class="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-400 text-sm">arrow_forward</span>
            </div>
          </article>

          <article class="blog-card flex flex-col group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
            <div class="blog-thumb aspect-[16/10] rounded-3xl mb-6 relative">
              <img class="w-full h-full object-cover"
                src="journal-3.png"
                alt="Glowing candles" />
              <div
                class="absolute top-4 left-4 bg-surface-container-lowest/92 backdrop-blur px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-on-surface">
                Community</div>
              <div
                class="absolute inset-0 rounded-3xl bg-gradient-to-t from-on-surface/18 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              </div>
            </div>
            <h3
              class="font-headline text-3xl text-on-surface group-hover:text-primary transition-colors duration-400 mb-3">
              Resonance & The Collective Field</h3>
            <p class="text-base text-on-surface-variant line-clamp-2 font-body mb-4 leading-relaxed flex-1">How our individual energetic frequencies intertwine to shape the global consciousness. An exploration of distance healing and quantum entanglement...</p>
            <div class="flex items-center justify-between">
              <time class="text-[10px] uppercase tracking-widest text-outline">Sep 28, 2023</time>
              <span
                class="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-400 text-sm">arrow_forward</span>
            </div>
          </article>
      </div>
    </section>
`;
createPage("journal.html", "The Journal", journalContent);

// 4. Contact Page
const contactContent = `
    <section class="py-20 px-8 max-w-3xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <h1 class="font-headline text-5xl md:text-7xl text-on-surface italic mb-6">Connect</h1>
        <p class="text-on-surface-variant font-body">Reach out for collaborations, questions, or just to share your light.</p>
      </div>
      <form class="space-y-6" data-aos="fade-up" onsubmit="event.preventDefault(); alert('Message sent successfully!');">
        <div class="grid grid-cols-2 gap-6">
          <input type="text" placeholder="First Name" class="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-6 py-4 focus:outline-none focus:border-primary">
          <input type="text" placeholder="Last Name" class="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-6 py-4 focus:outline-none focus:border-primary">
        </div>
        <input type="email" placeholder="Email Address" class="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-6 py-4 focus:outline-none focus:border-primary">
        <textarea rows="5" placeholder="Your Message" class="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-6 py-4 focus:outline-none focus:border-primary"></textarea>
        <button class="bg-primary text-on-primary w-full py-4 rounded-xl font-bold hover:bg-primary-dim transition-all shadow-xl shadow-primary/20">Send Message</button>
      </form>
    </section>
`;
createPage("contact.html", "Contact", contactContent);

// 5. Book Page
const bookContent = `
    <section class="py-12 px-8 max-w-6xl mx-auto min-h-[80vh] flex flex-col items-center justify-center">
      
      <div class="text-center mb-12" data-aos="fade-up">
        <div class="section-label font-label text-xs uppercase tracking-[0.42em] text-primary/70 mb-5">Reserve</div>
        <h1 class="font-headline text-5xl md:text-6xl text-on-surface italic mb-4">Book Your Session</h1>
        <p class="text-on-surface-variant font-body max-w-xl mx-auto">Select a date and time that aligns with your energy. All times are displayed in your local timezone.</p>
      </div>

      <!-- This container is designed to be easily swapped with a GoHighLevel iframe later -->
      <div id="booking-widget-container" class="w-full max-w-5xl bg-surface-container-lowest border border-outline-variant/20 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row" data-aos="fade-up" data-aos-delay="100">
        
        <!-- Left Panel: Session Details -->
        <div class="w-full md:w-1/3 bg-surface-container p-10 border-r border-outline-variant/10">
           <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <span class="material-symbols-outlined text-primary text-3xl">spa</span>
           </div>
           <h3 class="font-headline text-3xl italic text-on-surface mb-2">Clarity Session</h3>
           <p class="text-on-surface-variant text-sm font-label font-bold uppercase tracking-widest mb-6">45 Minutes • $85</p>
           <p class="text-sm text-on-surface-variant leading-relaxed mb-8">A gentle healing focused on releasing mental fog and emotional stagnation.</p>
           
           <div class="flex items-center gap-3 text-sm text-on-surface-variant mb-3">
             <span class="material-symbols-outlined text-[18px]">videocam</span> Google Meet / Zoom
           </div>
           <div class="flex items-center gap-3 text-sm text-on-surface-variant">
             <span class="material-symbols-outlined text-[18px]">public</span> Sedona, AZ (or Distance)
           </div>
        </div>

        <!-- Right Panel: The Calendar UI -->
        <div class="w-full md:w-2/3 p-10 relative">
           
           <div class="flex justify-between items-center mb-8">
             <h4 class="font-headline text-2xl text-on-surface">May 2026</h4>
             <div class="flex gap-2">
               <button class="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors"><span class="material-symbols-outlined text-sm">chevron_left</span></button>
               <button class="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container transition-colors"><span class="material-symbols-outlined text-sm">chevron_right</span></button>
             </div>
           </div>

           <!-- Calendar Grid -->
           <div class="grid grid-cols-7 gap-y-4 gap-x-2 text-center mb-8">
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Sun</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Mon</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Tue</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Wed</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Thu</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Fri</div>
             <div class="text-[10px] uppercase tracking-widest text-outline font-bold mb-2">Sat</div>

             <!-- Empty slots for offset -->
             <div></div><div></div><div></div><div></div><div></div>

             <!-- Days -->
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">1</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">2</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">3</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">4</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">5</button>
             
             <!-- Selected Day -->
             <button class="aspect-square flex items-center justify-center rounded-full bg-primary text-on-primary text-sm font-bold shadow-lg shadow-primary/30">6</button>
             
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">7</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">8</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">9</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">10</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">11</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">12</button>
             <button class="aspect-square flex items-center justify-center rounded-full text-sm font-medium text-outline/40 cursor-not-allowed" disabled>13</button>
             <button class="aspect-square flex items-center justify-center rounded-full text-sm font-medium text-outline/40 cursor-not-allowed" disabled>14</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">15</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">16</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">17</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">18</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">19</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">20</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">21</button>
             <button class="aspect-square flex items-center justify-center rounded-full text-sm font-medium text-outline/40 cursor-not-allowed" disabled>22</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">23</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">24</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">25</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">26</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">27</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">28</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">29</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">30</button>
             <button class="aspect-square flex items-center justify-center rounded-full hover:bg-surface-container text-sm font-medium transition-colors">31</button>
           </div>

           <div class="h-px w-full bg-outline-variant/20 mb-8"></div>

           <!-- Time Slots for Selected Day -->
           <h4 class="font-label text-sm font-bold text-on-surface mb-4">Wednesday, May 6</h4>
           <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
             <button class="py-3 border border-primary text-primary rounded-xl font-bold text-sm bg-primary/5 hover:bg-primary hover:text-on-primary transition-all text-center">9:00 AM</button>
             <button class="py-3 border border-outline-variant/30 text-on-surface rounded-xl font-medium text-sm hover:border-primary hover:text-primary transition-all text-center">10:30 AM</button>
             <button class="py-3 border border-outline-variant/30 text-on-surface rounded-xl font-medium text-sm hover:border-primary hover:text-primary transition-all text-center">1:00 PM</button>
             <button class="py-3 border border-outline-variant/30 text-on-surface rounded-xl font-medium text-sm hover:border-primary hover:text-primary transition-all text-center">3:30 PM</button>
           </div>

           <!-- Mock Confirmation -->
           <div class="mt-12 flex justify-end">
             <button onclick="alert('This beautiful custom UI will later be replaced directly by your GoHighLevel embed code!')" class="bg-on-surface text-surface px-10 py-4 rounded-full font-bold shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                Continue <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
             </button>
           </div>

        </div>
      </div>
    </section>
`;
createPage("book.html", "Book a Session", bookContent);

createPage("book.html", "Book a Session", bookContent);

// 6. Healings Page
const healingsContent = `
    <section class="py-20 px-8 max-w-7xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-up">
        <div class="section-label font-label text-xs uppercase tracking-[0.42em] text-primary/70 mb-5">The Offerings</div>
        <h1 class="font-headline text-5xl md:text-7xl text-on-surface italic mb-6">Healing Sessions</h1>
        <p class="text-on-surface-variant font-body max-w-2xl mx-auto text-lg leading-relaxed">Each session is intuitively guided, blending traditional Usui Reiki with sound therapy, crystal grids, and somatic release techniques.</p>
      </div>

      <div class="flex flex-col space-y-12 max-w-4xl mx-auto">
        <!-- Card 1 -->
        <div class="session-card group bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-12 border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 shadow-xl" data-aos="fade-up">
          <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div class="w-full md:w-2/3">
              <h3 class="font-headline text-3xl italic text-on-surface mb-3 group-hover:text-primary transition-colors duration-400">Clarity Session</h3>
              <p class="text-on-surface-variant leading-relaxed mb-6">A gentle introduction or tune-up. Focuses on clearing immediate energetic blockages, balancing the chakras, and restoring a sense of calm and mental clarity.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-on-surface-variant font-medium"><span class="material-symbols-outlined text-primary text-[18px]">done</span> Full chakra sweep & balance</li>
                <li class="flex items-center gap-2 text-sm text-on-surface-variant font-medium"><span class="material-symbols-outlined text-primary text-[18px]">done</span> Light sound therapy (tuning forks)</li>
              </ul>
            </div>
            <div class="w-full md:w-1/3 flex flex-col items-center md:items-end justify-center h-full border-t md:border-t-0 md:border-l border-outline-variant/30 pt-6 md:pt-0 pl-0 md:pl-8">
              <div class="text-center md:text-right mb-6">
                <p class="stat-n text-4xl text-on-surface">$85</p>
                <p class="text-[10px] text-outline uppercase tracking-widest mt-0.5">45 minutes</p>
              </div>
              <button onclick="window.location.href='book.html'" class="bg-surface-container text-on-surface px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary hover:text-on-primary transition-all duration-400">Book</button>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="session-card group bg-surface-container-lowest rounded-[2.5rem] p-8 md:p-12 border-2 border-primary/20 hover:border-primary transition-all duration-500 shadow-2xl relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
          <div class="absolute top-0 right-0 bg-primary text-on-primary text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-2xl">Deepest Healing</div>
          <div class="absolute -inset-1 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
          <div class="flex flex-col md:flex-row gap-8 items-center md:items-start relative">
            <div class="w-full md:w-2/3">
              <h3 class="font-headline text-3xl italic text-on-surface mb-3 group-hover:text-primary transition-colors duration-400">Deep Integration</h3>
              <p class="text-on-surface-variant leading-relaxed mb-6">The signature session. Designed for releasing deep-seated trauma, emotional processing, and significant energetic shifts. Includes consultation and integration discussion.</p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center gap-2 text-sm text-on-surface-variant font-medium"><span class="material-symbols-outlined text-primary text-[18px]">done</span> Comprehensive energy clearing</li>
                <li class="flex items-center gap-2 text-sm text-on-surface-variant font-medium"><span class="material-symbols-outlined text-primary text-[18px]">done</span> Shamanic journeying elements</li>
                <li class="flex items-center gap-2 text-sm text-on-surface-variant font-medium"><span class="material-symbols-outlined text-primary text-[18px]">done</span> Custom crystal grid activation</li>
              </ul>
            </div>
            <div class="w-full md:w-1/3 flex flex-col items-center md:items-end justify-center h-full border-t md:border-t-0 md:border-l border-outline-variant/30 pt-6 md:pt-0 pl-0 md:pl-8">
              <div class="text-center md:text-right mb-6">
                <p class="stat-n text-4xl text-on-primary">$160</p>
                <p class="text-[10px] text-on-primary/55 uppercase tracking-widest mt-0.5">90 minutes</p>
              </div>
              <button onclick="window.location.href='book.html'" class="bg-on-primary text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary-container transition-all duration-400">Book</button>
            </div>
          </div>
        </div>

      </div>
    </section>
`;
createPage("healings.html", "Healings", healingsContent);

console.log("All pages generated successfully!");
